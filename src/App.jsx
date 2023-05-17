import { useEffect, useState } from "react";
import Card from "./pages/Home/Card/Card";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5050/events`)
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <>
      <div className="space-y-10">
        <h1 className="font-bold text-center text-5xl uppercase">
          I grow by helping people in need.
        </h1>
        <div className="mx-auto w-screen max-w-screen-md  leading-6">
          <form className="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded-md border shadow-lg">
            <svg
              className="absolute left-2 block h-5 w-5 text-blue-400"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" className=""></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
            </svg>
            <input
              type="name"
              name="search"
              className="h-14 w-full rounded-md py-4 pr-40 pl-12 outline-none focus:ring-2"
              placeholder="City, Address, Zip :"
            />
            <button
              type="submit"
              className="absolute right-0 mr-1 inline-flex h-12 items-center justify-center rounded-lg bg-blue-500 px-10 font-medium text-white focus:ring-4 hover:bg-gray-700"
            >
              Search
            </button>
          </form>
        </div>
        <div className="grid lg:grid-cols-4">
          {events.map((event) => (
            <Card key={event._id} event={event} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
