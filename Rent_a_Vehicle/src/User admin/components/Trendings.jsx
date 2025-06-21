import React, { useRef } from "react";
import date from "../../assets/Events/Date.png";
import location from "../../assets/Events/location.png";
import { Trends } from "../../Db/Trends";

function Trendings() {
  const scrollRef = useRef(null);

  const handleScrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <>
      <div className="container relative">
        <div className="flex flex-col md:flex-row mt-3 font-main md:justify-between lg:justify-between">
          <div className="hidden md:flex md:ml-[20px] lg:flex lg:justify-start">
            <h1 className="mt-[-40px] md:mt-4 lg:mt-4 font-bold md:w-[600px] text-[28px] tracking-wider">
              Places To Explore Around Puducherry
            </h1>
          </div>
          <div className="block md:hidden lg:hidden">
            <h1 className="mx-5 font-bold text-[24px] text-center leading-snug">
              Places To <span>Explore Around </span>
              <span>Puducherry</span>
            </h1>
          </div>
          <div className="pt-2  md:auto flex justify-center md:justify-end mt-4 md:mt-0 pr-4">
            <button
              type="button"
              className="hidden md:block rounded-full border-2 border-gray-700 w-24 h-9 hover:bg-[#FF0000] hover:text-white transition"
            >
              View All
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="ml-[0.5px] flex gap-4 md:gap-4 lg:flex font-main tracking-widest overflow-x-scroll scroll-smooth h-auto scrollbar-hidden overflow-auto py-4"
        >
          {Trends.map((items, id) => (
            <div key={id}>
              <div className="bg-white rounded-lg shadow-[0px_4px_11px_8px_rgba(0,_0,_0,_0.1)] p-4 w-[300px] sm:w-[350px] h-[350px] lg:w-[500px] lg:h-[410px] lg:ml-[25px] mt-8">
                <div className="relative">
                  <div className="w-full h-[170px] lg:w-[470px] lg:h-[270px] overflow-hidden">
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

                  <div className="font-[5000] flex text-gray-950 mt-2 text-base">
                    <img className="w-5" src={date} alt="date icon" />
                    <div className="ms-2 font-bold">
                      {items.Date}&nbsp;|&nbsp;<span>{items.Time}</span>
                    </div>
                  </div>

                  <div className="flex mt-2 justify-between items-center h-[40px]">
                    <div className="flex items-center">
                      <img className="w-5" src={location} alt="location icon" />
                      <div className="font-bold ms-2 text-base text-gray-950">
                        {items.Location}
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-[80px] md:w-[100px] h-8 bg-[#FF0000] text-white font-semibold rounded-full hover:bg-red-600 text-sm"
                      >
                        Free
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:flex absolute top-1/2 left-0 -translate-y-1/2 z-10">
          <button
            onClick={handleScrollLeft}
            className="rounded-full bg-white p-3 border-gray-100 shadow-lg ml-5"
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
    </>
  );
}

export default Trendings;

