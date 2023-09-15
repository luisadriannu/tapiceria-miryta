import { GetImageUrl } from "../helpers/GetImageUrl";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import "./Styles.css";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("some-work-1")}`,
    title: "Tapizado de sillon",
    description: "Tela para mueble fondo en círculos. Tela de alta calidad.",
    link: "/trabajos-realizados/salas",
  },
  {
    id: 2,
    image: `${GetImageUrl("work-automotive-4")}`,
    title: "Asiento para camioneta Ford",
    description: "Tapizado en tela automotriz color gris medio.",
    link: "/trabajos-realizados/automotriz",
  },
  {
    id: 3,
    image: `${GetImageUrl("some-work-3")}`,
    title: "Silla para reina",
    description: "Tela metálica color plata capitonado.",
    link: "/trabajos-realizados/sillas",
  },
  {
    id: 4,
    image: `${GetImageUrl("some-work-4")}`,
    title: "Tapizado de sillas de comedor",
    description: "Tapizado y pintado de silla, tela floreada.",
    link: "/trabajos-realizados/sillas",
  },
];

const scrollTop = () => {
  window.scrollTo({
    top: 0,
  });
};

export const SomeWorks = () => {
  return (
    <MainContentWorks className="section">
      <article className="container content-works">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeIn",
          }}
          viewport={{ once: true }}
        >
          <div>
            <h2>Algunos de nuestros trabajos</h2>
            <p>
              Aquí podrás ver algunos de nuestros trabajos que hemos realizado,
              si alguno de estos trabajos te interesa no dudes mandarnos un
              mensaje en la sección de {""}
              <NavLink to="/contacto">
                <b>Contacto</b>
              </NavLink>
            </p>
            <p>
              Usted es libre de elegir el color de tela o plástico que más le
              guste, dependiendo del tipo y color que elija será el presupuesto.
            </p>
          </div>
          <ContentCards>
            {data.map((item, index) => {
              return (
                <Card key={index}>
                  <img src={item.image} alt={`Trabajo ${item.id}`} />
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <div>
                    <NavLink onClick={scrollTop} to={item.link}>
                      Ver más detalles
                    </NavLink>
                  </div>
                </Card>
              );
            })}
          </ContentCards>
        </motion.div>
      </article>
    </MainContentWorks>
  );
};

const MainContentWorks = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d6f2f8;

  h2 {
    font-weight: 900;
    margin: 0 0 1.5rem 0;
  }

  p {
    margin: 0 0 1.5rem 0;

    a {
      color: #000;
    }
  }
`;

const ContentCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Card = styled.div`
  padding: 0 0 1.25rem;

  img {
    border-radius: 0.25rem;
  }

  h4 {
    margin: 0.75rem 0 0;
  }

  p {
    margin: 1rem 0 0 0;
  }

  div {
    margin-top: 1.5rem;
    a {
      color: #000;
    }
  }
`;

export { ContentCards, Card };
