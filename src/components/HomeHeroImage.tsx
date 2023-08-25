import { GetImageUrl } from "../helpers/GetImageUrl";
import { styled } from "styled-components";

export const HomeHeroImage = () => {
  return (
    <ContentBackgroundImage>
      <img src={GetImageUrl("home-image")} alt="Tapizado de Sala" />
      <div>
        <p>
          Somos los mejores en tapicería en CD. Altamirano. Tenemos variedad de
          telas y pieles que mas le sea de su agrado
        </p>
      </div>
    </ContentBackgroundImage>
  );
};

const ContentBackgroundImage = styled.article`
  margin-top: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  div {
    background-color: #f4f4f429;
    backdrop-filter: blur(5px);
    border-radius: 0.25rem;
    position: absolute;
    padding: 0.5rem;
    width: 70%;

    p {
      color: #fff;
      margin: 0;
    }
  }
`;
