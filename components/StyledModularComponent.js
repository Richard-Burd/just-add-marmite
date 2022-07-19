// If TailwindCSS is installed and if TailwindCSS' base functionality
// is imported into the (Next.js) globals.css stylesheet, then we can
// import TailwindCSS into this component with this statement:
// import "../styles/globals.css";
// ...which is used on the "_app.js" file.

// archetype component that we'll be using with styling done inside of it.
const StyledModularComponent = () => {
  return (
    <>
      <div>
        <h3 className="text-blue-600 non-tailwind-class">
          Styled Modular Component w/TailwindCSS & JSX Inline Styling
        </h3>
      </div>
      <style jsx>{`
        h2,
        h3 {
          font-style: italic;
          letter-spacing: 5px;
        }
        .non-tailwind-class {
          background-color: white;
        }
      `}</style>
    </>
  );
};

export default StyledModularComponent;
