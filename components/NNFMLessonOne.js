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
        {/* NOTE: "whileHover" doesn't work on Google Chrome */}
        {/* https://github.com/framer/motion/issues/880 */}
        <motion.button
          whileHover={{
            scale: 1.8,
            textShadow: "0px 0px 8px rgb(117, 97, 90)",
            boxShadow: "0px 0px 8px rgb(117, 97, 90)",
            color: "#ff2994",
            originX: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          whileTap={{ scale: 0.8 }}
        >
          <p className="border-2 border-yellow-900 p-2">
            This is another button
          </p>
        </motion.button>
      </div>
    </>
  );
};

export default NNFMLessonOne;
