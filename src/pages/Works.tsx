import { styled } from "styled-components";
import { ContentMain } from "./Services";
import { Outlet, NavLink } from "react-router-dom";
import "../components/Styles.css";
import { ScrollProgress } from "../components/ScrollProgress";
import { motion } from "framer-motion";

export const Works = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      exit={{ opacity: 0 }}
      className="section"
    >
      <ContentMain className="container">
        <h2>Trabajos</h2>
        <div>
          <h4>
            Aquí podrás ver algunos de nuestros trabajos que hemos realizado
          </h4>
          <p>Puedes ver por las siguientes secciones:</p>
          <List>
            <div>
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to="/trabajos-realizados/salas"
              >
                Salas
              </NavLink>
            </div>
            <div>
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to="/trabajos-realizados/automotriz"
              >
                Autos
              </NavLink>
            </div>
            <div>
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to="/trabajos-realizados/sillas"
              >
                Sillas
              </NavLink>
            </div>
            <div>
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to="/trabajos-realizados/motos"
              >
                Motos
              </NavLink>
            </div>
          </List>
        </div>
      </ContentMain>
      <Outlet />
      <ScrollProgress />
    </motion.section>
  );
};

const List = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #252422;
  padding: 0.5rem 0;
  border-radius: 100px;
  max-width: 768px;
  margin: 1.8rem auto 1.5rem auto;
  position: sticky;
  top: 75px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    padding: 0 0.25rem;

    a {
      text-align: center;
      width: 100%;
      color: #fff;
      padding: 0.5rem;
      text-decoration: none;
      border-radius: 100px;
    }
  }
  @media screen and (max-width: 350px) {
    flex-wrap: wrap;

    div {
      width: auto;
    }
  }
`;
