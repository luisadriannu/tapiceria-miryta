import { styled } from "styled-components";
import { ContentMain } from "./Services";
import { WorksHalls } from "../components/WorksHalls";

export const Works = () => {
  return (
    <section className="section">
      <ContentMain className="container">
        <h2>Trabajos</h2>
        <div>
          <h4>
            Aqui podrás ver algunos de nuestros trabajos que hemos realizado
          </h4>
          <p>Puedes ver por:</p>
          <List>
            <a href="#">Salas</a>
            <a href="#">Automoviles</a>
            <a href="#">Sillas</a>
          </List>
        </div>
        <WorksHalls />
      </ContentMain>
    </section>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.5rem;
  background-color: #dadccd;
  padding: 0.5rem 0;

  a {
    background-color: #fff;
    padding: 0.25rem;
    display: block;
    color: #000;
    text-decoration: none;
  }
`;
