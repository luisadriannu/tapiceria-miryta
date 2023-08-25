import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

import { HomeHeroImage } from "../components/HomeHeroImage";
import { SomeWorks } from "../components/SomeWorks";

export const Home = () => {
  return (
    <>
      <section className="container">
        <HomeMainContent className="section">
          <h1>Tapiceria Miryta</h1>
          <div>
            <NavLink to="/">Explora nuestros trabajos &rarr;</NavLink>
          </div>
        </HomeMainContent>
      </section>
      <HomeHeroImage />
      <Text className="container">
        <article className="section">
          <p>
            Nuestra misión es darle la mejor atención al cliente y ser mas
            reconocidos en toda la región.
          </p>
        </article>
      </Text>
      <SomeWorks />
    </>
  );
};

const HomeMainContent = styled.article`
  margin-top: 6rem;

  h1 {
    margin: 0 0 1.5rem;
  }

  div {
    display: flex;
    justify-content: end;
  }
`;

const Text = styled.article`
  padding: 3rem 0;
`;
