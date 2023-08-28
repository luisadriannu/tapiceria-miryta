import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../hooks/useDimentions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const scrollTop = () => {
    scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <motion.nav
        className={`nav ${isOpen ? "" : "pointer-none"}`}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <MenuToggle toggle={() => toggleOpen()} />
        <Navigation
          menuOpen={isOpen}
          toggle={() => {
            toggleOpen();
            scrollTop();
          }}
        />
      </motion.nav>
    </>
  );
};
