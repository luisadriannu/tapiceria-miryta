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

export const MenuItem = () => {
  const style = { color: "#000" };
  return (
    <motion.ul variants={variants}>
      <li>
        <NavLink style={style} to="#">
          Inicio
        </NavLink>
      </li>
      <li>
        <NavLink style={style} to="#">
          Servicios
        </NavLink>
      </li>
      <li>
        <NavLink style={style} to="#">
          Acerca de
        </NavLink>
      </li>
      <li>
        <NavLink style={style} to="#">
          Contacto
        </NavLink>
      </li>
    </motion.ul>
  );
};
