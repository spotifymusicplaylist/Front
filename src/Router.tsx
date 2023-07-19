import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import KakaoLoginRedirect from "./Pages/KakaoLoginRedirect";
import SignUpPage from "./Pages/SignUpPage";
import NotFoundPage from "./Pages/NotFound";
import HomePage from "./Pages/HomePage";
import MusicPage from "./Pages/page";
import MymusicPage from "./Pages/myMusicPage";
import OthermusicPage from "./Pages/otherMusicPage";
import FriendsListPage from "./Pages/FrinedsListPage";
import SettingPage from "./Pages/SettingPage";
import EditPage from "./Pages/Edit";
import MakePage from "./Pages/MakePage";
import MainPage from "./Pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "main",
    element: <MainPage />,
    children: [
      {
        path: ":idx",
        element: <HomePage />,
      },
      {
        path: ":idx/makePage",
        element: <MakePage />,
      },
    ],
  },
  { path: "oauth2/redirect", element: <KakaoLoginRedirect /> },
  { path: "signup", element: <SignUpPage /> },
  { path: "setting", element: <SettingPage /> },
  { path: "friendsList", element: <FriendsListPage /> },
  {
    path: "page",
    element: <MusicPage />,
    children: [
      {
        path: "myMusic/:idx",
        element: <MymusicPage />,
      },
      {
        path: "myMusic/:idx/edit",
        element: <EditPage />,
      },
      { path: "otherMusic/:idx", element: <OthermusicPage /> },
    ],
  },
  { path: "edit", element: <EditPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

export default router;
