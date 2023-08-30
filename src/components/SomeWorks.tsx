import { GetImageUrl } from "../helpers/GetImageUrl";
import { styled } from "styled-components";
import trabajo2 from "../assets/some-work-2.jpg";
import { NavLink } from "react-router-dom";

const data = [
  {
    id: 1,
    image: `${GetImageUrl("some-work-1")}`,
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
    image: `${GetImageUrl("some-work-3")}`,
    title: "Tapizado de silla con botones",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate voluptas, veniam eveniet magnam expedita doloremque perferendis ducimus voluptatem",
    link: "",
  },
  {
    id: 4,
    image: `${GetImageUrl("some-work-4")}`,
    title: "Tapizado y arreglado de sillas de comedor",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate voluptas, veniam eveniet magnam expedita doloremque perferendis ducimus voluptatem",
    link: "",
  },
];

export const SomeWorks = () => {
  return (
    <MainContentWorks>
      <div className="section">
        <h2>Algunos de nuestros trabajos</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
          voluptate voluptas, veniam eveniet magnam expedita doloremque
          perferendis ducimus voluptatem, tempore ipsam ipsum illum modi neque
          fugit rerum. Quis, corrupti officia?
        </p>
        <ContentCards>
          {data.map((item, index) => {
            return (
              <Card key={index}>
                <img src={item.image} alt={`Trabajo ${item.id}`} />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div>
                  <NavLink to={item.link}>Ver más detalles</NavLink>
                </div>
              </Card>
            );
          })}
        </ContentCards>
      </div>
    </MainContentWorks>
  );
};

const MainContentWorks = styled.section`
  background-color: #fafbf3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 900;
  }
`;

const ContentCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Card = styled.div`
  padding: 0 0 1.25rem;

  h4 {
    margin: 0.75rem 0 0;
  }

  p {
    margin: 1.5rem 0 0 0;
  }

  div {
    margin-top: 1.5rem;
    a {
      color: #000;
    }
  }
`;
