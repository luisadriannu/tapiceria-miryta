import { styled } from "styled-components";

export const WorksHome = () => {
  return (
    <section className="section">
      <ContentHome className="container">
        <div>
          <h2>Hecha un vistazo a nuestros trabajos</h2>
        </div>
      </ContentHome>
    </section>
  );
};

const ContentHome = styled.article`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    text-align: center;
  }
`;
