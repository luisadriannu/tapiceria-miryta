import { ContentCards, Card } from "./SomeWorks";
import { GetImageUrl } from "../helpers/GetImageUrl";
import { LoaderWorks } from "./LoaderWorks";
import { useLoader } from "../hooks/useLoader";
import { ContentButton } from "./WorksHalls";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("work-chair-1")}`,
    title: "Sillas de comedor 6pzas",
    description:
      "Tapizadas en tela Hawái negra. Se reparó la madera que venía en mal estado, así como también se pintó la decoloración de metal de las sillas.",
  },
  {
    id: 2,
    image: `${GetImageUrl("work-chair-2")}`,
    title: "Sillas de comedor 8pzas",
    description:
      "Tapizadas en tela, suede grecas. Se realizó tapizado y relleno de esponja para mayor comodidad.",
  },
  {
    id: 3,
    image: `${GetImageUrl("work-chair-3")}`,
    title: "Sillas de comedor 6pzas",
    description:
      "Tapizado en tela para mueble a cuadros. Se cambió la madera que venía en mal estado.",
  },
  {
    id: 4,
    image: `${GetImageUrl("work-chair-4")}`,
    title: "Sillas de comedor 8pzas",
    description:
      "Tapizadas en vinipiel oxen color beige. Se rellenó de esponja para mayor comodidad.",
  },
  {
    id: 5,
    image: `${GetImageUrl("work-chair-5")}`,
    title: "Sillas de comedor 6pzas",
    description:
      "Tapizadas en vinipiel b-30 rosa pastel. Se pintó en color blanco el metal que venía decolorada.",
  },
];

const moreData = [
  {
    id: 6,
    image: `${GetImageUrl("work-chair-6")}`,
    title: "Sillas para kinder",
    description:
      "Tapizadas en vinipiel b-30 naranja y pintura. Se pintó en color negro el metal que venía decolorada, así como también se rellenó de esponja.",
  },
  {
    id: 7,
    image: `${GetImageUrl("work-chair-7")}`,
    title: "Sillas de comedor 10pzas estilo rustico",
    description:
      "Se tapizó en tela de alta calidad, así como también se rellenó de esponja los brazos para mayor comodidad.",
  },
  {
    id: 8,
    image: `${GetImageUrl("work-chair-8")}`,
    title: "Sillas 2pzas",
    description:
      "Tapizadas en tela color beige y platico kristal. Se rellenó de esponja de alta calidad para mayor comodidad.",
  },
  {
    id: 9,
    image: `${GetImageUrl("work-chair-9")}`,
    title: "Silla rustica 8pzas",
    description:
      "Tapizado en tela para mueble color morada grecas. Se barnizó un poco la madera, así como también se rellenó de esponja.",
  },
  {
    id: 10,
    image: `${GetImageUrl("work-chair-10")}`,
    title: "Silla de reina",
    description: "Tapizada en terciopelo color rojo capitonada.",
  },
];

const styleh3 = {
  margin: "0 0 1.5rem 0",
};

export const WorksChairs = () => {
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
      <h3 style={styleh3}>Sillas</h3>
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
