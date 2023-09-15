import { GetImageUrl } from "../helpers/GetImageUrl";
import { styled } from "styled-components";
import { motion } from "framer-motion";

interface BackgroundImageProps {
  $image: string;
}

const HomeImage = `${GetImageUrl("home-image")}`;

export const HomeHeroImage = () => {
  return (
    <ContentBackgroundImage>
      <BackgroundImage $image={HomeImage}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.5,
          }}
        >
          <p>
            <i>
              Somos los mejores en tapicería en CD. Altamirano. Tenemos variedad
              de telas y pieles que más le sea de su agrado.
            </i>
          </p>
        </motion.div>
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
      font-size: clamp(1.06rem, calc(1.03rem + 0.19vw), 1.25rem);
      color: #fff;
      margin: 0;
      line-height: 1.5rem;
    }
  }

  @media screen and (min-width: 768px) {
    align-items: center;

    div {
      width: 50%;
      margin-left: 0;
    }
  }
`;
