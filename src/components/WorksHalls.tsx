import { ContentCards, Card } from "../components/SomeWorks";
import trabajo2 from "../assets/some-work-2.jpg";
import { GetImageUrl } from "../helpers/GetImageUrl";
import { useState } from "react";
import { styled } from "styled-components";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("work-hall-4")}`,
    title: "Tapizado de sillon",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate voluptas, veniam eveniet magnam expedita doloremque perferendis ducimus voluptatem",
    link: "",
  },
  {
    id: 2,
    image: trabajo2,
    title: "Tapizado de sillon",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate voluptas, veniam eveniet magnam expedita doloremque perferendis ducimus voluptatem",
    link: "",
  },
  {
    id: 3,
    image: `${GetImageUrl("work-hall-5")}`,
    title: "Tapizado de silla con botones",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate voluptas, veniam eveniet magnam expedita doloremque perferendis ducimus voluptatem",
    link: "",
  },
  {
    id: 4,
    image: `${GetImageUrl("work-hall-1")}`,
    title: "Tapizado y arreglado de sillas de comedor",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate voluptas, veniam eveniet magnam expedita doloremque perferendis ducimus voluptatem",
    link: "",
  },
  {
    id: 5,
    image: `${GetImageUrl("work-hall-2")}`,
    title: "Tapizado y arreglado de sillas de comedor",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate voluptas, veniam eveniet magnam expedita doloremque perferendis ducimus voluptatem",
    link: "",
  },
];

const moreData = [
  {
    id: 6,
    image: `${GetImageUrl("work-hall-3")}`,
    title: "Tapizado y arreglado de sillas de comedor",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate voluptas, veniam eveniet magnam expedita doloremque perferendis ducimus voluptatem",
    link: "",
  },
  {
    id: 7,
    image: `${GetImageUrl("work-hall-6")}`,
    title: "Tapizado y arreglado de sillas de comedor",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate voluptas, veniam eveniet magnam expedita doloremque perferendis ducimus voluptatem",
    link: "",
  },
  {
    id: 8,
    image: `${GetImageUrl("work-hall-7")}`,
    title: "Tapizado y arreglado de sillas de comedor",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate voluptas, veniam eveniet magnam expedita doloremque perferendis ducimus voluptatem",
    link: "",
  },
  {
    id: 9,
    image: `${GetImageUrl("work-hall-8")}`,
    title: "Tapizado y arreglado de sillas de comedor",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate voluptas, veniam eveniet magnam expedita doloremque perferendis ducimus voluptatem",
    link: "",
  },
  {
    id: 10,
    image: `${GetImageUrl("work-hall-9")}`,
    title: "Tapizado y arreglado de sillas de comedor",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate voluptas, veniam eveniet magnam expedita doloremque perferendis ducimus voluptatem",
    link: "",
  },
  {
    id: 11,
    image: `${GetImageUrl("work-hall-10")}`,
    title: "Tapizado y arreglado de sillas de comedor",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate voluptas, veniam eveniet magnam expedita doloremque perferendis ducimus voluptatem",
    link: "",
  },
];

const styleh3 = {
  margin: "0 0 1.5rem 0",
};

export const WorksHalls = () => {
  const [loadData, setLoadData] = useState(false);

  const loadMoreData = () => {
    setLoadData(true);
  };

  return (
    <div>
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
      <ContentCards>
        {loadData
          ? moreData.map((item, index) => {
              return (
                <Card key={index}>
                  <img src={item.image} alt={`Trabajo ${item.id}`} />
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </Card>
              );
            })
          : null}
      </ContentCards>
      {loadData ? null : (
        <ContentButton>
          <button className="" onClick={loadMoreData}>
            Cargar más trabajos
          </button>
        </ContentButton>
      )}
    </div>
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
    background-color: #000;
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1;
    text-transform: none;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
  }
`;
