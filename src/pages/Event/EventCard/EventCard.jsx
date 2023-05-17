const EventCard = () => {
  return (
    <div className="m-10 mx-4 max-w-screen-lg overflow-hidden rounded-xl border shadow-lg md:pl-8">
      <div className="flex flex-col overflow-hidden bg-white sm:flex-row ">
        <div className="order-first ml-auto h-36 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-full">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            loading="lazy"
          />
        </div>

        <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
          <p className="mt-2 text-lg">By Luis Vuitton</p>
          <p className="mt-4 mb-8 max-w-md text-gray-500">15/2/2023</p>
          <button
           
            className="group mt-auto flex lg:w-44 cursor-pointer select-none items-center justify-center rounded-md bg-blue-500 px-6 py-2 text-white transition"
          >
            <span className="group flex w-full items-center justify-center rounded py-1 text-center font-bold">
              {" "}
              Cancel
            </span>
            <svg
              className="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all"
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="bevel"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        {/*  className="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all" */}
      </div>
    </div>
  );
};

export default EventCard;
