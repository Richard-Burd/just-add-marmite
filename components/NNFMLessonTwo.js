// https://codesandbox.io/s/framer-motion-accordion-qx958
// https://www.w3schools.com/howto/howto_js_accordion.asp

import { useState } from "react";
import { motion } from "framer-motion";

// https://youtu.be/G_y61k-4i6E?t=68
// This is the new thing...it's called a "variant"
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visable: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",

      // not so bouncy on initial render
      // not so bouncy when you click off
      stiffness: 100,
      delay: 0.5,
    },
  },
  clicker: {
    color: "red",
    x: 82,
    transition: {
      type: "spring",
      stiffness: 500, // super bouncy when you click on it.
    },
  },
};
// NOTE: the variant ends here, it's just an object.

const NNFMLessonTwo = () => {
  return (
    <>
      <motion.div
        variants={containerVariants} // this enables the 3 lines below
        initial="hidden"
        animate="visable"
        whileTap="clicker"
      >
        I use Variants
      </motion.div>
    </>
  );
};

export default NNFMLessonTwo;
