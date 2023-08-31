import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export default function Error404() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <section className="section">
      <ContentError className=" container">
        <div>
          <i className="bi bi-search"></i> <br />
        </div>
        <div>
          <h2>Error, no se ha podido encontrar esta sección :(</h2>
        </div>
        <NavLink className="exit-button" to="/" onClick={scrollTop}>
          <ExitButton>Volver a inicio</ExitButton>
        </NavLink>
      </ContentError>
    </section>
  );
}

const ContentError = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  gap: 20px;

  i {
    font-size: clamp(1.7rem, calc(1.25rem + 2.25vw), 3.95rem);
  }

  h2 {
    margin: 0;
  }
`;

const ExitButton = styled.div`
  padding: 1rem 1rem;
  background-color: #000;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1;
  text-transform: none;
  text-decoration: none;
  text-align: center;
`;
