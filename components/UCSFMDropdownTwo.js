import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const UCSFMDropdownTwo = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <div className="w-1/2 overflow-hidden z-0">
        <motion.div onTap={() => setVisible(!isVisible)}>
          <div className="bg-slate-400 cursor-pointer elliptical-geometry p-2 relative text-center w-full z-20">
            This is the Button Number Two
          </div>
        </motion.div>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { height: "auto", z: 1 },
                collapsed: { height: 0, z: 1 },
              }}
              transition={{
                duration: 0.8,
                z: 20,
              }}
            >
              <div className="bg-slate-300 elliptical-geometry pt-12 relative -translate-y-11 z-10">
                <p className="p-4 text-base">
                  This is the Panel, there is some text inside of it just to
                  fill up some space for testing purposes...This is a really
                  long piece of text, it needs to be in order to see the
                  dropdown that is supposed to happen
                </p>
                <p className="p-4 text-base">
                  This is the Panel, there is some text inside of it just to
                  fill up some space for testing purposes...This is a really
                  long piece of text, it needs to be in order to see the
                  dropdown that is supposed to happen
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <style jsx>{`
        .elliptical-geometry {
          border-bottom-left-radius: 70px 25px;
          border-bottom-right-radius: 70px 25px;
          border-top-left-radius: 70px 25px;
          border-top-right-radius: 70px 25px;
        }
      `}</style>
    </>
  );
};

export default UCSFMDropdownTwo;
