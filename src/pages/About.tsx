import { styled } from "styled-components";
import { ContentMain } from "./Services";
import { motion } from "framer-motion";

export const About = () => {
  return (
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
        <h2>Acerca de</h2>
        <ContenInfo>
          <p>
            <b>
              Somos una empresa con más de 20 años de experiencia, mis clientes
              respaldan la calidad de mi trabajo.
            </b>
          </p>
          <p>
            Como tapicero profesional, mi pasión y dedicación se reflejan en la
            restauración y transformación de muebles y superficies. Con años de
            experiencia en el arte de la tapicería, mi objetivo es llevar a cabo
            proyectos de alta calidad que revitalicen y den nueva vida a los
            muebles y objetos de nuestros clientes.
          </p>

          <p>
            Desde la selección de telas y materiales de alta calidad hasta la
            meticulosa atención a los detalles, mi compromiso es proporcionar
            resultados excepcionales que cumplan con las expectativas y
            necesidades individuales de cada cliente.
          </p>
          <p>
            Mi trabajo abarca desde la restauración de piezas antiguas hasta la
            creación de diseños personalizados, siempre con un enfoque en la
            belleza, la comodidad y la durabilidad. En el mundo de la tapicería,
            cada proyecto es una oportunidad para crear obras maestras que
            perdurarán en el tiempo y que llenarán de elegancia y confort los
            espacios de nuestros clientes.
          </p>
          <h4>Misión</h4>
          <p>
            <b>
              Nuestra misión en Tapicería Miryta es transformar los sueños de
              nuestros clientes en realidades tangibles a través del arte de la
              tapicería.
            </b>
          </p>
          <p>
            Nos comprometemos a proporcionar servicios de tapicería
            excepcionales que no solo renuevan muebles y espacios, sino que
            también agregan comodidad y estilo a la vida de las personas. Con
            una combinación de experiencia artesanal, creatividad y atención
            meticulosa a los detalles, nuestro equipo se esfuerza por superar
            las expectativas en cada proyecto.
          </p>
          <p>
            Valoramos la satisfacción del cliente, la calidad duradera y la
            belleza intemporal en cada pieza que restauramos o creamos. En
            Tapicería Miryta, nuestro propósito es inspirar y enriquecer los
            espacios y vidas de nuestros clientes a través de la tapicería de la
            más alta calidad.
          </p>
        </ContenInfo>
      </ContentMain>
    </motion.section>
  );
};

const ContenInfo = styled.div`
  padding-bottom: 1.5rem;

  h4 {
    margin: 0 0 1.5rem 0;
  }

  p {
    padding: 0 0 1.5rem 0;
  }
`;
