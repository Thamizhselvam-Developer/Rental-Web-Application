import React, { useState, useRef, useEffect } from "react";
import Date from "../../assets/Events/Date.png";
import Location from "../../assets/Events/location.png";
import { Event } from "../../Db/Event";
import axios from "axios";

function Events() {
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi;
  const [Events, setEvents] = useState(Event);
  const scrollContainerRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section id="/Events">
      <div className="container relative">
        <div className="flex mt-3 font-main justify-between items-center flex-wrap">
          <h1 className="mt-4 mx-6 md:mx-12 font-bold text-[24px] md:text-[30px] text-center md:text-left w-full md:w-auto">
            TODAY EVENTS
          </h1>
          <div className="pt-2 w-full md:w-auto flex justify-center md:justify-end mt-4 md:mt-0 pr-4">
            <button
              type="button"
              className="hidden md:block rounded-full border-2 border-gray-700 w-24 h-9 hover:bg-[#FF0000] hover:text-white transition"
            >
              View All
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="ml-[0.5px] flex gap-5 md:gap-10 lg:flex-nowrap font-main tracking-widest overflow-x-scroll scroll-smooth h-auto py-4 scrollbar-hidden overflow-auto"
        >
          {Events.map((items, id) => (
            <div key={id} className="flex-shrink-0">
              <div className="bg-white rounded-lg shadow-[0px_4px_11px_8px_rgba(0,_0,_0,_0.1)] p-4 w-[300px] sm:w-[330px] md:w-[350px] lg:w-[500px] h-auto mt-6">
                <div className="relative">
                  <div className="w-full h-[160px] sm:h-[180px] md:h-[210px] lg:h-[270px] overflow-hidden">
                    <img
                      className="rounded-xl w-full h-full object-cover"
                      src={items.img}
                      loading="lazy"
                      alt="event"
                    />
                  </div>
                  <div className="text-lg font-bold mt-2 tracking-widest">
                    {items.Title}
                  </div>
                </div>

                <div className="flex text-gray-950 mt-2 text-sm sm:text-base">
                  <img className="w-5" src={Date} alt="date icon" />
                  <div className="ms-2 font-bold">{items.Date}</div>
                </div>

                <div className="flex mt-2 justify-between items-center">
                  <div className="flex items-center">
                    <img className="w-5 h-5 sm:w-6 sm:h-6" src={Location} alt="location icon" />
                    <div className="font-bold ms-2 text-sm sm:text-base text-gray-950">
                      {items.Location}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-[70px] sm:w-[100px] h-8 bg-[#FF0000] text-white font-semibold rounded-full hover:bg-red-600 text-sm"
                  >
                    Free
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:flex absolute top-1/2 left-0 -translate-y-1/2 z-10">
          <button
            onClick={handleScrollLeft}
            className="rounded-full bg-white p-3 border-gray-100 shadow-lg ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex absolute top-1/2 right-0 -translate-y-1/2 z-10">
          <button
            onClick={handleScrollRight}
            className="rounded-full bg-white p-3 border-gray-100 shadow-lg mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div className="md:hidden flex justify-center gap-5 mt-4">
          <button
            onClick={handleScrollLeft}
            className="rounded-full bg-white p-3 border-gray-100 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            onClick={handleScrollRight}
            className="rounded-full bg-white p-3 border-gray-100 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Events;
