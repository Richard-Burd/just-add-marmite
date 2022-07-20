const UCSDropdownBox = (props) => {
  // some code to hide the <div> with the "animated-dropdown" class on initial render

  const handleClick = (e) => {
    // somehow grap ahold of the <div> with the "animated-dropdown" class
    // ...cause that div to slowly drop down when this element is clicked:
    // ...the <button> with the "accordion-initializer" class
    // ...
    // If the <div> with the "animated-dropdown" class is displayed,
    // ...get it to retract when the <button> with the "accordion-initializer" class is clicked
    console.log("hello", e);
  };

  return (
    <>
      <div className="max-w-lg">
        <div
          className="
          bg-gray-300 
          elliptical-geometry 
          mx-2 
          shadow-geometry
          "
        >
          <button
            onClick={handleClick}
            tabIndex="auto"
            className="
              accordion-initializer
              elliptical-geometry 
              min-w-full 
              bg-gray-400 
              duration-200 
              focus:bg-gray-700 
              focus:text-white 
              hover:bg-gray-700 
              hover:text-gray-100 
              prompt-font 
              transition 
              px-2 
              py-1 
              rounded 
              shadow-geometry 
              text-gray-900 
              text-xl
              "
          >
            <div class="font-bold mx-2">
              <span>{props.title}</span>
            </div>
          </button>
          <div className="animated-dropdown">
            <div className="text-sm text-gray-900 px-8 py-4 text-justify">
              <span>{props.description}</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .standard-gray {
          background-color: #777777ff;
        }
        .standard-gray-light {
          background-color: #f1f1f1ff;
        }
        .standard-gray-dark {
          background-color: #555555ff;
        }
        .elliptical-geometry {
          border-bottom-left-radius: 70px 25px;
          border-bottom-right-radius: 70px 25px;
          border-top-left-radius: 70px 25px;
          border-top-right-radius: 70px 25px;
        }
        .shadow-geometry {
          box-shadow: 4px 6px 6px #86888f;
        }
        .shadow-geometry:hover {
          box-shadow: 4px 6px 6px #575757;
          transition: 500ms;
        }
      `}</style>
    </>
  );
};

export default UCSDropdownBox;
