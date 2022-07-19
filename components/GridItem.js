const GridItem = (props) => {
  return (
    <div className="" id="deletable">
      <button
        className={`
          active:bg-slate-700
          active:border-0
          active:text-slate-300
          bg-${props.color}-500
          border-8 
          border-${props.color}-600 
          box-border
          curson-pointer
          font-extrabold 
          h-32
          hover:bg-${props.color}-600
          hover:bg-opacity-70
          hover:border-${props.color}-900
          hover:text-${props.color}-200
          m-4
          text-center
          text-${props.color}-800
          tracking-wide
          transform hover:scale-110 
          transition ease-out duration-300
          w-32 
        `}
      >
        <div className={`inline-block`}>
          <svg
            className="h-4 w-4 mr-2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <span>{props.color}</span>
      </button>
    </div>
  );
};

export default GridItem;
