// https://youtu.be/lY2TZXEgYUw?t=147

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const hoverVariants = {
  visable: {
    x: [0, -90, 90, -90, 50], // these are called keyframes
    transition: { delay: 2 },
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 10px rgba(0,0,0,0.5)",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
    transition: {
      yoyo: Infinity,
    },
  },
};

const NNFMLessonThree = () => {
  // https://youtu.be/sClYgoPOpaI
  const [showTitle, setShowTitle] = useState(true);

  // https://youtu.be/sClYgoPOpaI
  setTimeout(() => {
    setShowTitle(false);
  }, 4000);

  return (
    <>
      <motion.div
        variants={hoverVariants} // specify the variant you want to use
        animate="visable"
        whileHover="hover" // The key 'hover' nested inside hoverVariants
      >
        I move back & forth using keyframes, I pulse using the 'yoyo' repeating
        animation
        <AnimatePresence>
          {showTitle && (
            <motion.h2 exit={{ y: -1000 }} transition={{ duration: 12 }}>
              I dissapear after 4 seconds
            </motion.h2>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default NNFMLessonThree;
