import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { AdaptablePrices } from "./Home";
import { motion } from "framer-motion";

const scrollTop = () => {
  scrollTo({
    top: 0,
  });
};

export const Services = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        exit={{ opacity: 0 }}
        className="section"
      >
        <ContentMain className="container">
          <h2>Servicios</h2>
          <div>
            <h4>En tapicería Miryta contamos con los siguientes servicios:</h4>
          </div>
          <ServicesDescription>
            <div>
              <h5>Tapizado de automóvil</h5>
              <p>
                Contamos con reparación y tapicería en general de los autos,
                podemos reparar y tapizar lo que son:{" "}
                <b>
                  <u>toldos</u>
                </b>
                ,{" "}
                <b>
                  <u>asientos</u>
                </b>
                ,{" "}
                <b>
                  <u>alfombra</u>
                </b>
                ,{" "}
                <b>
                  <u>tablero</u>
                </b>{" "}
                y todo lo que implique tapicería.
              </p>

              <h5>Tapizado de asientos de moto</h5>
              <p>
                Si tu asiento de moto ya se ve descarapelado, feo, o roto,
                nosotros podemos reparar desde 0 de su asiento, incluso si no
                tiene esponja o le hace falta, podemos repararlo sin problema.
              </p>
            </div>
            <div>
              <h5>Reparación y tapizado de salas</h5>
              <p>
                Contamos con tapizado completo de salas y reparación de asientos
                de estos mismos, así como también los brazos y tapicería en
                general. Tú eliges el tipo de tela o color que más te guste, y
                nosotros nos encargamos de todo.
              </p>

              <h5>Servicio a domicilio</h5>
              <p>
                Contamos con servicio a domicilio dentro de la localidad,
                nosotros vamos por tu sala y te la llevamos en cuanto esté
                listo.
              </p>
            </div>
          </ServicesDescription>
        </ContentMain>
      </motion.section>

      <section>
        <AdaptablePrices $backgroundColor="#d6f2f8">
          <h2>Traenos tu sala para transformarla</h2>
          <p>Contamos con ofertas y precios adaptables según tu presupuesto.</p>
          <p></p>
          <div>
            <NavLink onClick={scrollTop} to="/contacto">
              Contactanos
            </NavLink>
          </div>
        </AdaptablePrices>
      </section>
    </>
  );
};

const ContentMain = styled.article`
  margin-top: 5rem;

  h5 {
    margin: 0 0 1rem 0;
    color: #00b4d8;
  }

  h2 {
    margin: 0 0 1.5rem 0;
  }

  p {
    margin: 0;
  }
`;

const ServicesDescription = styled.article`
  margin-bottom: 2rem;

  h4 {
    margin: 1.5rem 0 0 0;
  }

  p {
    margin: 0 0 1.5rem 0;
  }

  div {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 1.5rem;

    div {
      padding: 1rem;
    }
  }
`;

export { ContentMain };
