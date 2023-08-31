import { ContentCards, Card } from "./SomeWorks";
import { GetImageUrl } from "../helpers/GetImageUrl";
import { LoaderWorks } from "./LoaderWorks";
import { useLoader } from "../hooks/useLoader";
import { ContentButton } from "./WorksHalls";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("work-chair-1")}`,
    title: "Tapizado de sillon",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate voluptas, veniam eveniet magnam expedita doloremque perferendis ducimus voluptatem",
    link: "",
  },
  {
    id: 2,
    image: `${GetImageUrl("work-chair-2")}`,
    title: "Tapizado de sillon",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate voluptas, veniam eveniet magnam expedita doloremque perferendis ducimus voluptatem",
    link: "",
  },
  {
    id: 3,
    image: `${GetImageUrl("work-chair-3")}`,
    title: "Tapizado de silla con botones",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate voluptas, veniam eveniet magnam expedita doloremque perferendis ducimus voluptatem",
    link: "",
  },
  {
    id: 4,
    image: `${GetImageUrl("work-chair-4")}`,
    title: "Tapizado y arreglado de sillas de comedor",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate voluptas, veniam eveniet magnam expedita doloremque perferendis ducimus voluptatem",
    link: "",
  },
  {
    id: 5,
    image: `${GetImageUrl("work-chair-5")}`,
    title: "Tapizado y arreglado de sillas de comedor",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate voluptas, veniam eveniet magnam expedita doloremque perferendis ducimus voluptatem",
    link: "",
  },
];

const moreData = [
  {
    id: 6,
    image: `${GetImageUrl("work-chair-6")}`,
    title: "Tapizado y arreglado de sillas de comedor",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate voluptas, veniam eveniet magnam expedita doloremque perferendis ducimus voluptatem",
    link: "",
  },
  {
    id: 7,
    image: `${GetImageUrl("work-chair-7")}`,
    title: "Tapizado y arreglado de sillas de comedor",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate voluptas, veniam eveniet magnam expedita doloremque perferendis ducimus voluptatem",
    link: "",
  },
  {
    id: 8,
    image: `${GetImageUrl("work-chair-8")}`,
    title: "Tapizado y arreglado de sillas de comedor",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate voluptas, veniam eveniet magnam expedita doloremque perferendis ducimus voluptatem",
    link: "",
  },
  {
    id: 9,
    image: `${GetImageUrl("work-chair-9")}`,
    title: "Tapizado y arreglado de sillas de comedor",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate voluptas, veniam eveniet magnam expedita doloremque perferendis ducimus voluptatem",
    link: "",
  },
  {
    id: 10,
    image: `${GetImageUrl("work-chair-10")}`,
    title: "Tapizado y arreglado de sillas de comedor",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate voluptas, veniam eveniet magnam expedita doloremque perferendis ducimus voluptatem",
    link: "",
  },
];

const styleh3 = {
  margin: "0 0 1.5rem 0",
};

export const WorksChairs = () => {
  const { loadData, loading, hiddeButton, loadWorks } = useLoader();

  return (
    <div>
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
    </div>
  );
};
