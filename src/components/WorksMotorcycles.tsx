import { ContentCards, Card } from "./SomeWorks";
import { GetImageUrl } from "../helpers/GetImageUrl";
import { LoaderWorks } from "./LoaderWorks";
import { useLoader } from "../hooks/useLoader";
import { ContentButton } from "./WorksHalls";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("work-motorcycles-4")}`,
    title: "Asiento para moto F-150",
    description:
      "Tapizada en vinipiel color negro. Se realizó una decoración en color negro a petición del cliente.",
  },
  {
    id: 2,
    image: `${GetImageUrl("work-motorcycles-2")}`,
    title: "Asiento para moto WS-150 Sport",
    description:
      "Asiento para moto tapizada en vinil capri color negro y rojo. Se realizó decoración en color rojo en combinación con el color del vehículo.",
  },
  {
    id: 3,
    image: `${GetImageUrl("work-motorcycles-3")}`,
    title: "Asiento para moto Italika",
    description: "Tapizado en orion blanco y orion negro.",
  },
  {
    id: 4,
    image: `${GetImageUrl("work-motorcycles-1")}`,
    title: "Tapizado para moto deportiva",
    description: "Tapizado en plástico oxen color negro y oxen blanco.",
  },
  {
    id: 5,
    image: `${GetImageUrl("work-motorcycles-5")}`,
    title: "Tapizado para moto FT-125",
    description: "Tapizado en vinil capri color negro.",
  },
];

const moreData = [
  {
    id: 6,
    image: `${GetImageUrl("work-motorcycles-6")}`,
    title: "Asiento para moto FT-150",
    description: "Tapizado en vinil capri color negro con cinturon.",
  },
  {
    id: 7,
    image: `${GetImageUrl("work-motorcycles-7")}`,
    title: "Tapizado para moto FT-125",
    description: "Tapizado en vinil con detalle avitonado en color café.",
  },
  {
    id: 8,
    image: `${GetImageUrl("work-motorcycles-8")}`,
    title: "Asiento para moto FT-150",
    description: "Tapizado en vinil orion color negro con detalle gajeado.",
  },
  {
    id: 9,
    image: `${GetImageUrl("work-motorcycles-9")}`,
    title: "Asiento para moto deportiva",
    description: "Tapizado en 3 colores vinil, capri, rojo, blanco y negro.",
  },
  {
    id: 10,
    image: `${GetImageUrl("work-motorcycles-10")}`,
    title: "Asiento para moto FT-150",
    description:
      "Tapizado en vinil capri negro con decoración a petición del cliente en gris medio.",
  },
];

const styleh3 = {
  margin: "0 0 1.5rem 0",
};

export const WorksMotorcycles = () => {
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
      <h3 style={styleh3}>Motos</h3>
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
