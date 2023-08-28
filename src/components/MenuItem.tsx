import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const variants = {
  open: {
    // y: 0,
    opacity: 1,
    // transition: {
    //   y: { stiffness: 1000, velocity: -100 },
    // },
  },
  closed: {
    // y: 50,
    opacity: 0,
    // transition: {
    //   y: { stiffness: 1000 },
    // },
  },
};

export const MenuItem = ({ toggle }) => {
  const style = { color: "#fff" };
  return (
    <motion.ul variants={variants}>
      <li>
        <NavLink onClick={toggle} style={style} to="/">
          Inicio
        </NavLink>
      </li>
      <li>
        <NavLink onClick={toggle} style={style} to="/servicios">
          Servicios
        </NavLink>
      </li>
      <li>
        <NavLink onClick={toggle} style={style} to="/">
          Trabajos
        </NavLink>
      </li>
      <li>
        <NavLink onClick={toggle} style={style} to="/acerca">
          Acerca de
        </NavLink>
      </li>
      <li>
        <NavLink onClick={toggle} style={style} to="/contacto">
          Contacto
        </NavLink>
      </li>
    </motion.ul>
  );
};
