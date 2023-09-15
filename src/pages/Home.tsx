import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { HomeHeroImage } from "../components/HomeHeroImage";
import { SomeWorks } from "../components/SomeWorks";
import { ScrollProgress } from "../components/ScrollProgress";
import { motion } from "framer-motion";

const scrollTop = () => {
  scrollTo({
    top: 0,
  });
};

interface AdaptablePricesProps {
  $backgroundColor?: string;
}

export const Home = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        exit={{ opacity: 0 }}
        className="section"
      >
        <HomeMainContent className="container">
          <h1>Tapicería Miryta</h1>
          <div>
            <NavLink onClick={scrollTop} to="/trabajos-realizados">
              Explora nuestros trabajos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l14 0"></path>
                <path d="M13 18l6 -6"></path>
                <path d="M13 6l6 6"></path>
              </svg>
            </NavLink>
          </div>
        </HomeMainContent>
      </motion.section>
      <HomeHeroImage />
      <Text className="container">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeIn",
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p>
            Nuestra misión es darle la mejor atención al cliente y ser más
            reconocidos en toda la región.
          </p>
          <div>
            <NavLink onClick={scrollTop} to="/trabajos-realizados">
              Explora nuestros trabajos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l14 0"></path>
                <path d="M13 18l6 -6"></path>
                <path d="M13 6l6 6"></path>
              </svg>
            </NavLink>
          </div>
        </motion.div>
      </Text>
      <SomeWorks />
      <section>
        <AdaptablePrices>
          <h2>Precios adaptables</h2>
          <p>Contamos con ofertas y precios adaptables según tu presupuesto.</p>
          <p>
            <b>¿Que es lo que quieres que te tapicemos?</b>
          </p>
          <div>
            <NavLink onClick={scrollTop} to="/contacto">
              Contáctanos
            </NavLink>
          </div>
        </AdaptablePrices>
      </section>
      <ScrollProgress />
    </>
  );
};

const HomeMainContent = styled.article`
  margin-top: 5rem;

  h1 {
    margin: 0 0 1.5rem;
    font-weight: 800;
  }

  div {
    display: flex;
    justify-content: end;

    a {
      text-decoration: none;
      color: #000;
      display: flex;
      gap: 2px;
    }
  }
`;

const Text = styled.article`
  padding: 7vw;

  p {
    font-size: clamp(1.2rem, calc(1.1rem + 0.47vw), 1.67rem);
  }

  div {
    div {
      margin-top: 1.5rem;
      a {
        text-decoration: none;
        color: #000;
        display: flex;
        gap: 2px;
      }
    }
  }
`;

const AdaptablePrices = styled.section<AdaptablePricesProps>`
  text-align: center;
  padding: 8vw;
  background-color: ${(props) => props.$backgroundColor || "#f1f0f4"};

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
      border-radius: 0.25rem;
      padding: 1rem 1rem;
      display: inline-block;
      background-color: #90e0ef;
      color: #000;
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
