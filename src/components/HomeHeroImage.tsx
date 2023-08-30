import { GetImageUrl } from "../helpers/GetImageUrl";
import { styled } from "styled-components";

interface BackgroundImageProps {
  $image: string;
}

const HomeImage = `${GetImageUrl("home-image")}`;
console.log(typeof HomeImage);

export const HomeHeroImage = () => {
  return (
    <ContentBackgroundImage>
      <BackgroundImage $image={HomeImage}>
        <div>
          <p>
            <i>
              Somos los mejores en tapicería en CD. Altamirano. Tenemos variedad
              de telas y pieles que mas le sea de su agrado
            </i>
          </p>
        </div>
      </BackgroundImage>
    </ContentBackgroundImage>
  );
};

const ContentBackgroundImage = styled.article`
  margin-top: 2rem;
  height: 480px;
  position: relative;
`;

const BackgroundImage = styled.article<BackgroundImageProps>`
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${(props) => props.$image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;

  div {
    background-color: #f4f4f429;
    backdrop-filter: blur(5px);
    border-radius: 0.25rem;
    position: absolute;
    padding: 1rem;
    width: 70%;
    margin-left: 1rem;

    p {
      color: #fff;
      margin: 0;
    }
  }
`;
