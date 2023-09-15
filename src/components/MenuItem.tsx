import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./StylesHeader.css";

const variants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

interface Toggle {
  toggle: () => void;
}

export const MenuItem: React.FC<Toggle> = ({ toggle }) => {
  const style = { color: "#000", fontWeight: "bold" };
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
        <NavLink onClick={toggle} style={style} to="/trabajos-realizados">
          Trabajos realizados
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
