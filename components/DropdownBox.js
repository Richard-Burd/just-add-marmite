// Start with this tutorial: https://www.youtube.com/watch?v=gs14LEv7Hfk
// Task: Rebuild this in React: https://alpine-ejs-testbed.herokuapp.com/ucs-about
// Repo for original Alpine + ejs: https://github.com/Richard-Burd/alpine-js-sandbox

import Image from "next/image";

const DropdownBox = () => {
  return (
    <>
      <div>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        ></link>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
        <div className="bg-red-100 border-red-400 border-4 p-2 mt-2 ">
          <h3 className="text-blue-600 non-tailwind-class">
            Dropdown Box w/TailwindCSS & JSX Inline Styling
          </h3>
          <div className="flex justify-between text-gray-500 font-mono my-imported-font">
            <p>This is a paragraph</p>
            <p>This is a paragraph</p>
            <p>This is a paragraph</p>
          </div>
        </div>
        <div className="m-4 flex items-end justify-center">
          <div className="bg-red-500 sm:bg-yellow-500 lg:bg-red-300 h-12 mx-4 w-12 rounded"></div>
          <div className="bg-blue-500 sm:bg-yellow-500 lg:bg-red-300 h-12 mx-4 w-12 rounded"></div>
          <div className="bg-green-500 sm:bg-yellow-500 lg:bg-red-300 h-12 mx-4 w-12 rounded"></div>
        </div>
        <div>
          <span>text on top</span>
          <span className="block">text on bottom (cuz of block)</span>
          <Image
            src="/bnb.jpg"
            width={200}
            height={400}
            className="w-full h-32 sm:h-48 object-cover"
          />
        </div>
      </div>
      <style jsx>{`
        h2,
        h3 {
          font-style: italic;
          letter-spacing: 5px;
        }
        .non-tailwind-class {
          // background-color: white;
        }
        .my-imported-font {
          font-family: "Nunito", sans-serif;
          font-weight: 900;
        }
      `}</style>
    </>
  );
};

export default DropdownBox;

// HTML & CSS: https://www.youtube.com/playlist?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G
