import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import "../components/StylesHeader.css";
import "./StylesHeader.css";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

interface Toggle {
  toggle: () => void;
  menuOpen: boolean;
}

export const Navigation: React.FC<Toggle> = ({ menuOpen, toggle }) => (
  <motion.div className={menuOpen ? " " : "pointer"} variants={variants}>
    <MenuItem toggle={toggle} />
  </motion.div>
);
