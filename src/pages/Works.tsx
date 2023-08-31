import { styled } from "styled-components";
import { ContentMain } from "./Services";
import { Link, Outlet } from "react-router-dom";

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
            <Link to="/trabajos-realizados/salas">Salas</Link>
            <Link to="/trabajos-realizados/automoviles">Automóviles</Link>
            <Link to="/trabajos-realizados/sillas">Sillas</Link>
          </List>
          <Outlet />
        </div>
      </ContentMain>
    </section>
  );
};

const List = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.5rem;
  background-color: #000;
  padding: 0.5rem 0;

  a {
    color: #fff;
    padding: 0.25rem;
    display: block;
  }
`;
