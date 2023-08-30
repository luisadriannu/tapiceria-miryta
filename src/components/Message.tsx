import "./Styles.css";
import { motion } from "framer-motion";

const Message = () => {
  return (
    <article className="modal-transparent">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        exit={{ opacity: 0, scale: 0.5 }}
        className="message text-center"
      >
        <i className="bi bi-send-check-fill"></i>
        <h4>Los datos han sido enviados correctamente</h4>
      </motion.div>
    </article>
  );
};

export default Message;
