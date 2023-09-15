import { styled } from "styled-components";

export const WorksHome = () => {
  return (
    <ContentHome>
      <h2>Hecha un vistazo a nuestros trabajos</h2>
      <p>Haz click en las diferentes secciones</p>
    </ContentHome>
  );
};

const ContentHome = styled.article`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
    margin: 0;
  }

  p {
    margin: 1.5rem 0 0 0;
  }
`;
