// Start with this tutorial: https://www.youtube.com/watch?v=gs14LEv7Hfk
// Task: Rebuild this in React: https://alpine-ejs-testbed.herokuapp.com/ucs-about
// Repo for original Alpine + ejs: https://github.com/Richard-Burd/alpine-js-sandbox

const DropdownBox = () => {
  return (
    <>
      <div>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        ></link>
        <h3 className="text-blue-600 non-tailwind-class">
          Dropdown Box w/TailwindCSS & JSX Inline Styling
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

export default DropdownBox;

// HTML & CSS: https://www.youtube.com/playlist?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G
