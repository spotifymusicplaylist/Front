import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { REDIRECT_URI, REST_API_KEY } from "../Constants/kakaoLoginData";
import axios from "axios";

const KakaoLoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];
  console.log("몇번실행");
  const getKakaoToken = async () => {
    try {
      const response = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        {
          grant_type: "authorization_code",
          client_id: REST_API_KEY,
          redirect_uri: REDIRECT_URI,
          code: KAKAO_CODE,
        },
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
      const data = response.data;
      localStorage.setItem("token", data.access_token);
      navigate("/");
    } catch (error) {
      console.error(error);
      navigate("/login");
    }
  };
  useEffect(() => {
    getKakaoToken();
  });
  return <></>;
};

export default KakaoLoginPage;