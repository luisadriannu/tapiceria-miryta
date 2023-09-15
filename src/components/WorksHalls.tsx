import { ContentCards, Card } from "../components/SomeWorks";
import trabajo2 from "../assets/some-work-2.jpg";
import { GetImageUrl } from "../helpers/GetImageUrl";
import { styled } from "styled-components";
import { LoaderWorks } from "./LoaderWorks";
import { useLoader } from "../hooks/useLoader";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("work-hall-4")}`,
    title: "Tapizado de sala",
    description:
      "Tela para mueble color dorada, tela de alta calidad. Usted puede elegir la tela que más le guste.",
  },
  {
    id: 2,
    image: trabajo2,
    title: "Tapizado de sillón",
    description:
      "Tela para mueble rallado color vino. Se realizó reparación de brazos y se rellenó con esponja.",
  },
  {
    id: 3,
    image: `${GetImageUrl("work-hall-5")}`,
    title: "Sillón capitonado",
    description:
      "Tela para mueble color rojo. Se colocaron esponjas nuevas de alta calidad.",
  },
  {
    id: 4,
    image: `${GetImageUrl("work-hall-1")}`,
    title: "Tapizado de sillón",
    description:
      "Sillón tapizado en tela y vinil color chocolate. Se realizó relleno de esponja y reparación de madera que estaba en mal estado.",
  },
  {
    id: 5,
    image: `${GetImageUrl("work-hall-2")}`,
    title: "Tapizado de sillón",
    description:
      "Sillón tapizado en vinil capri color beige. Se recogió a domicilio y una vez terminado se llevó nuevamente a domicilio a su dueño.",
  },
];

const moreData = [
  {
    id: 6,
    image: `${GetImageUrl("work-hall-3")}`,
    title: "Tapizado de sillón combinado",
    description:
      "Tela para mueble grecas. Se realizó reparación y cambio de patas del conjunto de sillones.",
  },
  {
    id: 7,
    image: `${GetImageUrl("work-hall-6")}`,
    title: "Tapizado de sillón",
    description: "Tela metálica color plata. Se realizó reparación de esponja.",
  },
  {
    id: 8,
    image: `${GetImageUrl("work-hall-7")}`,
    title: "Tapizado de sillón",
    description: "Tela metálica color plata.",
  },
  {
    id: 9,
    image: `${GetImageUrl("work-hall-8")}`,
    title: "Tapizado de sillón",
    description: "Tela metálica color plata.",
  },
  {
    id: 10,
    image: `${GetImageUrl("work-hall-9")}`,
    title: "Tapizado sillon capitonado",
    description:
      "Tela color verde sencilla. Se reparó la madera que venía en mal estado.",
  },
];

const styleh3 = {
  margin: "0 0 1.5rem 0",
};

export const WorksHalls = () => {
  const { loadData, loading, hiddeButton, loadWorks } = useLoader();

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.1,
        ease: "easeIn",
      }}
      exit={{ opacity: 0 }}
      className="container mb"
    >
      <h3 style={styleh3}>Salas</h3>
      <ContentCards>
        {data.map((item, index) => {
          return (
            <Card key={index}>
              <img src={item.image} alt={`Trabajo ${item.id}`} />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </Card>
          );
        })}
      </ContentCards>
      {hiddeButton ? (
        <ContentButton>
          <button onClick={loadWorks}>Cargar más trabajos</button>
        </ContentButton>
      ) : null}
      {loading ? <LoaderWorks /> : null}
      {loadData ? null : (
        <ContentCards>
          {loading ? (
            <LoaderWorks />
          ) : loadData ? null : (
            moreData.map((item, index) => {
              return (
                <Card key={index}>
                  <img src={item.image} alt={`Trabajo ${item.id}`} />
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </Card>
              );
            })
          )}
        </ContentCards>
      )}
    </motion.article>
  );
};

const ContentButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 1.5rem 0;

  button {
    padding: 1rem 1rem;
    display: inline-block;
    background-color: #ade8f4;
    border-radius: 0.25rem;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1;
    text-transform: none;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
  }
`;

export { ContentButton };
