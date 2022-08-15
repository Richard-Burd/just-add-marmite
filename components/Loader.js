// https://youtu.be/wAwJj-KGb38
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  // toggles between animationOne and animationTwo
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

  return (
    <>
      <motion.div variants={loaderVariants} animate={animation}>
        <div className="loader"></div>
      </motion.div>
      <motion.div
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        dragElastic={0.4}
      >
        <div className="flex justify-center">
          <button
            className="bg-lime-500 font-bold p-4 rounded-2xl shadow-xl text-lime-900"
            onClick={() => cycleAnimation()}
          >
            Cycle Animation or Drag me Around
          </button>
        </div>
      </motion.div>
      <style jsx>{`
        .loader {
          width: 10px;
          height: 10px;
          margin: 40px auto;
          border-radius: 50%;
          background-color: green;
        }
      `}</style>
    </>
  );
};

export default Loader;
