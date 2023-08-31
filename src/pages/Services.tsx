import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { AdaptablePrices } from "./Home";
import { ScrollProgress } from "../components/ScrollProgress";

const scrollTop = () => {
  scrollTo({
    top: 0,
  });
};

export const Services = () => {
  return (
    <>
      <section className="section">
        <ContentMain className="container">
          <h2>Servicios</h2>
          <div>
            <h4>En tapicería Miryta ofrecemos los siguientes servicios:</h4>
          </div>
          <ServicesDescription>
            <div>
              <h4>Tapizado de automóvil</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                placeat obcaecati voluptate unde sapiente eligendi? Inventore,
                animi iure. Odit, eos quibusdam quasi ipsa laboriosam
                exercitationem sapiente reiciendis possimus. Ullam,
                necessitatibus.
              </p>

              <h4>Tapizado de asientos de moto</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                placeat obcaecati voluptate unde sapiente eligendi? Inventore,
                animi iure. Odit, eos quibusdam quasi ipsa laboriosam
                exercitationem sapiente reiciendis possimus. Ullam,
                necessitatibus.
              </p>
            </div>
            <div>
              <h4>Reparación y tapizado de salas</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                placeat obcaecati voluptate unde sapiente eligendi? Inventore,
                animi iure. Odit, eos quibusdam quasi ipsa laboriosam
                exercitationem sapiente reiciendis possimus. Ullam,
                necessitatibus.
              </p>

              <h4>Servicio a domicilio</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                placeat obcaecati voluptate unde sapiente eligendi? Inventore,
                animi iure. Odit, eos quibusdam quasi ipsa laboriosam
                exercitationem sapiente reiciendis possimus. Ullam,
                necessitatibus.
              </p>
            </div>
          </ServicesDescription>
        </ContentMain>
      </section>
      <Clients>
        <div className="container">
          <h4>Algunos de nuestros clientes</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            laudantium et incidunt eveniet ea omnis laborum consequatur commodi,
            est quos illum expedita reiciendis rerum natus dicta dolor in
            similique consequuntur!
          </p>
          <p>Name of the client</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            fugiat dolor quo corporis consectetur odit blanditiis. Sed
            laudantium doloremque possimus consequuntur quis temporibus
            praesentium itaque illo impedit ad. Est, suscipit!
          </p>
        </div>
      </Clients>
      <section>
        <AdaptablePrices>
          <h2>Traenos tu sala para transformarla</h2>
          <p>Contamos con ofertas y precios adaptables segun tu presupuesto.</p>
          <p></p>
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

const ContentMain = styled.article`
  margin-top: 6rem;

  h2 {
    margin: 0 0 1.5rem 0;
  }
`;

const ServicesDescription = styled.article`
  margin-bottom: 2rem;

  h4 {
    margin: 1.5rem 0 0 0;
  }

  p {
    margin: 1.5rem 0 0 0;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 1.5rem;
  }
`;

const Clients = styled.section`
  color: #fff;
  background-color: #000;

  padding: 1rem;
`;

export { ContentMain };
