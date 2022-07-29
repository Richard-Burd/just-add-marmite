// https://headlessui.com/react/disclosure#styling-an-open-panel
import { Disclosure, Transition } from "@headlessui/react";

const UCSDisclosure = () => {
  return (
    <>
      <div className="w-1/2 z-10">
        <div className="bg-slate-200 elliptical-geometry">
          <Disclosure>
            <Disclosure.Button className="w-full z-10">
              <div className="bg-slate-400 elliptical-geometry p-2 w-full z-10">
                This is the Button
              </div>
            </Disclosure.Button>
            <Transition
              enter="transition duration-700 ease-out z-0"
              enterFrom="transform scale-10 opacity-0 -translate-y-full blur-md z-0"
              enterTo="transform scale-100 opacity-90 z-0"
              leave="transition duration-500 ease-in z-0"
              leaveFrom="transform scale-100 opacity-100 z-0"
              leaveTo="transform scale-10 -translate-y-full opacity-0 blur-md z-0"
            >
              <Disclosure.Panel>
                <div className="m-2 p-2 z-0">
                  <p className="bg-slate-300 elliptical-geometry -m-4 p-4 z-0">
                    This is the Panel, there is some text inside of it just to
                    fill up some space for testing purposes...This is a really
                    long piece of text, it needs to be in order to see the
                    dropdown that is supposed to happen
                  </p>
                </div>
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
        </div>
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

export default UCSDisclosure;
