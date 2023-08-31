import { styled } from "styled-components";
import { ContentMain } from "./Services";

export const About = () => {
  return (
    <section className="section">
      <ContentMain className="container">
        <h2>Acerca de</h2>
        <ContenInfo>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            animi nesciunt porro impedit quaerat eius, ratione aut consequuntur
            sit dolorum, distinctio libero eos? Eum consequuntur dolore quas
            earum impedit? Tempore.
          </p>
          <h4>Misión</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            dolorum temporibus beatae laborum nam consequuntur fugiat, neque,
            inventore quae magni aut, deserunt odit. Beatae, voluptate eveniet.
            Molestiae asperiores repudiandae dignissimos.
          </p>
        </ContenInfo>
      </ContentMain>
    </section>
  );
};

const ContenInfo = styled.div`
  h4 {
    margin: 0;
  }

  p {
    margin: 1.5rem 0 1.5rem 0;
  }
`;
