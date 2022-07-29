import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FramerMotionTest = () => {
  const [isVisible, setVisible] = useState(true);

  return (
    <motion.div
      style={{
        width: 150,
        height: 150,
        borderRadius: 30,
        backgroundColor: "rgba(255,255,255,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "top",
        cursor: "pointer",
      }}
      onTap={() => setVisible(!isVisible)}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            style={{
              width: 150,
              height: 80,
              borderRadius: 15,
              backgroundColor: "blue",
            }}
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1, originY: 0 }}
            exit={{ opacity: 0, scaleX: 0.85, scaleY: 0 }}
          >
            This is the text that is inside the box, I would really like to see
            how it anumates
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FramerMotionTest;
