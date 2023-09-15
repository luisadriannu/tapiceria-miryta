import { ContentCards, Card } from "./SomeWorks";
import { GetImageUrl } from "../helpers/GetImageUrl";
import { LoaderWorks } from "./LoaderWorks";
import { useLoader } from "../hooks/useLoader";
import { ContentButton } from "./WorksHalls";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("work-automotive-1")}`,
    title: "Asiento de camioneta Chevrolet S-10",
    description:
      "Tela automotriz color azul rey. Se limpió y relleno de esponja para mayor comodidad.",
  },
  {
    id: 2,
    image: `${GetImageUrl("work-automotive-2")}`,
    title: "Asiento para Volkswagen",
    description:
      "Asientos de cubo para Volkswagen tapizados en vinipiel negro y rojo. Se le realizó un diseño especial en color rojo a petición del cliente.",
  },
  {
    id: 3,
    image: `${GetImageUrl("work-automotive-3")}`,
    title: "Tapizado para camioneta Nissan estaquitas",
    description:
      "Tapizado en tela automotriz negra con combinación en gris rayada. Se reparó y relleno de esponja, así como también se le dio un diseño especial a petición del cliente.",
  },
  {
    id: 4,
    image: `${GetImageUrl("work-automotive-4")}`,
    title: "Asiento para camioneta Ford F-150",
    description:
      "Asiento tapizado en tela automotriz gris con gajeado al centro.",
  },
  {
    id: 5,
    image: `${GetImageUrl("work-automotive-5")}`,
    title: "Asiento para camioneta Nissan PickUp",
    description:
      "Asiento tapizado en tela gris normal con centros en color gris oscuro rayado.",
  },
];

const moreData = [
  {
    id: 6,
    image: `${GetImageUrl("work-automotive-6")}`,
    title: "Asiento para camioneta Nissan PickUp",
    description:
      "Asiento tapizado color negro centros en color gris automotriz. Se le dio un diseño especial a en color gris a petición del cliente.",
  },
  {
    id: 7,
    image: `${GetImageUrl("work-automotive-7")}`,
    title: "Asiento para camioneta Nissan PickUp",
    description:
      "Asiento tapizado combinación negro y gris. Se rellenó de esponja y se reparó resorte.",
  },
  {
    id: 8,
    image: `${GetImageUrl("work-automotive-8")}`,
    title: "Asientos de Nissan Sentra",
    description:
      "Asientos tapizados en gris medio en combinación con gris oscuro.",
  },
  {
    id: 9,
    image: `${GetImageUrl("work-automotive-9")}`,
    title: "Camioneta Nissan",
    description: "Asientos tapizados en tela automotriz y vinil en el centro.",
  },
  {
    id: 10,
    image: `${GetImageUrl("work-automotive-10")}`,
    title: "Asientos de camioneta Ford",
    description: "Asientos tapizados en vinipiel color negro.",
  },
  {
    id: 11,
    image: `${GetImageUrl("work-automotive-11")}`,
    title: "Asiento de camioneta Nissan",
    description: "Tapizado en tela automotriz color negra a rayas.",
  },
  {
    id: 12,
    image: `${GetImageUrl("work-automotive-12")}`,
    title: "Asiento de camioneta Chevrolet",
    description:
      "Tapizados en vinipiel capri con centros en rojo. Se realizó decoración en color rojo a petición del cliente.",
  },
];

const styleh3 = {
  margin: "0 0 1.5rem 0",
};

export const WorksAutomotive = () => {
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
      <h3 style={styleh3}>Automotriz</h3>
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
