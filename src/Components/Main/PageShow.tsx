import { useNavigate } from "react-router-dom";
import { ContainerPage, ContainerWrapper } from "../../Styles/HomePageStyle";
import { MusicColor, mainPlaylistProps } from "../../atom";
import { useSetRecoilState } from "recoil";

function PageShow({ listInfo }: { listInfo: Array<mainPlaylistProps> }) {
  //제목, 이용자, 배경컬러, 스티커랜덤(일단은 지정으로 어차피 넘길 때 랜덤으로 줄 것이기 때문)
  const navigate = useNavigate();
  const pageColorNum = useSetRecoilState(MusicColor);
  return (
    <>
      <ContainerWrapper>
        <div className="blackSpace">
          <div></div>
        </div>
        {listInfo === undefined
          ? null
          : listInfo.map((e) => {
              return (
                <ContainerPage
                  onClick={() => {
                    if (e.type === "playlist") {
                      navigate(`/page/${e.playlistIdx}`, {
                        state: {
                          userId: e.userIdx,
                          playlistIdx: e.playlistIdx,
                        },
                      });
                      pageColorNum(e.backgroundIdx);
                    } else {
                      alert("아직 이동을 못해요!");
                    }
                  }}
                  className={`containerTheme${e.backgroundIdx}`}
                >
                  {e.playlistName}
                  <div
                    className="imgInput"
                    style={{
                      backgroundImage: `url(/img/sticker/sticker${e.imageIdx}.png)`,
                    }}
                  />
                </ContainerPage>
              );
            })}
      </ContainerWrapper>
    </>
  );
}

export default PageShow;
