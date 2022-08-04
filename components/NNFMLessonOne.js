// https://codesandbox.io/s/framer-motion-accordion-qx958
// https://www.w3schools.com/howto/howto_js_accordion.asp

import { useState } from "react";
import { motion } from "framer-motion";

const NNFMLessonOne = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: 1.2,
          color: "#ff2994",
          x: 500,
          y: 10,
        }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          type: "spring", // the default
          stiffness: 200, // bounces around (used only with "spring")
        }}
      >
        Animated Text Block
      </motion.div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          marginTop: 30,
          marginBottom: 30,
          scale: 1.5,
          x: 50,
          rotateZ: 3,
        }}
        transition={{
          duration: 0.5, // only works with "tween"
          delay: 1,
          type: "tween",
        }}
      >
        This is a button
      </motion.button>
      <div>
        <motion.button
          whileHover={{
            scale: 1,
          }}
          whileTap={{ scale: 0.8 }}
        >
          This is another button
        </motion.button>
      </div>
    </>
  );
};

export default NNFMLessonOne;
