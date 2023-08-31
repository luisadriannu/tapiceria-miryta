import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { HomeHeroImage } from "../components/HomeHeroImage";
import { SomeWorks } from "../components/SomeWorks";
import { ScrollProgress } from "../components/ScrollProgress";

const scrollTop = () => {
  scrollTo({
    top: 0,
  });
};

export const Home = () => {
  return (
    <>
      <section className="section">
        <HomeMainContent className="container">
          <h1>Tapiceria Miryta</h1>
          <div>
            <NavLink onClick={scrollTop} to="/trabajos-realizados">
              Explora nuestros trabajos <i className="bi bi-arrow-right"></i>
            </NavLink>
          </div>
        </HomeMainContent>
      </section>
      <HomeHeroImage />
      <Text className="container">
        <div>
          <p>
            Nuestra misión es darle la mejor atención al cliente y ser mas
            reconocidos en toda la región.
          </p>
          <div>
            <NavLink onClick={scrollTop} to="/trabajos-realizados">
              Explora nuestros trabajos <i className="bi bi-arrow-right"></i>
            </NavLink>
          </div>
        </div>
      </Text>
      <SomeWorks />
      <section>
        <AdaptablePrices>
          <h2>Precio adaptables</h2>
          <p>Contamos con ofertas y precios adaptables segun tu presupuesto.</p>
          <p>
            <b>¿Interesado?</b>
          </p>
          <div>
            <NavLink onClick={scrollTop} to="/contacto">
              Contactanos
            </NavLink>
          </div>
        </AdaptablePrices>
      </section>
      <ScrollProgress />
    </>
  );
};

const HomeMainContent = styled.article`
  margin-top: 6rem;

  h1 {
    margin: 0 0 1.5rem;
    font-weight: 900;
  }

  div {
    display: flex;
    justify-content: end;

    a {
      color: #000;
    }
  }
`;

const Text = styled.article`
  padding: 7vw;

  div {
    div {
      margin-top: 1.5rem;
      a {
        color: #000;
      }
    }
  }
`;

const AdaptablePrices = styled.section`
  text-align: center;
  padding: 8vw;

  h2 {
    margin: 0;
  }

  p {
    margin: 1.5rem 0 0 0;
  }

  div {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;

    a {
      padding: 1rem 1rem;
      display: inline-block;
      background-color: #000;
      color: #fff;
      font-weight: bold;
      font-size: 1rem;
      line-height: 1;
      text-transform: none;
      text-decoration: none;
      text-align: center;
      cursor: pointer;
    }
  }
`;

export { AdaptablePrices };
