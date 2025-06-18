import react, { useState } from "react";

import date from "../assets/Events/Date.png";
import location from "../assets/Events/location.png";
import { Event } from "../Db/Event";

function Events() {
  const [Eventdata, setEventdata] = useState(Event);

  return (
    <>
      <div className="container ">
        <div className="flex mt-3 font-main  ">
          <div className="flex justify-start  ">
            <h1 className="mt-4 mx-12 font-bold md:w-[400px] md:ml-[1px] text-[30px]  ">
              TODAY EVENTS
            </h1>
          </div>

          <div className="pt-2 md:w-[100px] md:ml-[85px] lg:ml-[750px] flex justify-end  mt-4 ">
            <button
              type="button"
              className=" hidden md:block rounded-full border-2 border-gray-700  w-24 h-9 hover:bg-[#FF0000]"
            >
              View All
            </button>
          </div>
        </div>

        <div className="ml-[0.5px]  flex gap-7 md:gap-20 font-main tracking-widest overflow-x-scroll scroll-smooth h-[540px] white scrollbar-hidden ">
          {Event.map((items, id) => (
            <div key={id}>
              <div className="bg-white rounded-lg shadow-[0px_4px_11px_8px_rgba(0,_0,_0,_0.1)] p-4 w-[350px] h-[380px]  lg:w-[500px] lg:h-[450px]  lg:ml-[25px] mt-14  ">
                <div className=" ">
                  <div className="relative">
                    <div className="w-full h-[180px] md:w-[470px] md:h-[270px] lg:w-[470px] lg:h-[270px] max-w-full overflow-hidden">
                    
                      <img
                        className="rounded-xl w-full h-full object-cover "
                        src={items.img}
                        
                      />
                    </div>

                    <div className="text-lg font-bold mt-2 tracking-widest">
                      {items.Title}
                    </div>
                    <span className="absolute top-2 right-2 bg-[#FF0000] text-white text-xs font-semibold px-2 py-1 rounded">
                      {items.Tag}
                    </span>
                  </div>

                  <div className="font-[5000] flex text-gray-950 mt-2 text-base">
                    <img className="w-5" src={date} alt="date icon" />
                    <div className="ms-2 font-bold">
                      {items.Date}&nbsp;|&nbsp;<span>{items.Time}</span>
                    </div>
                  </div>
                  <div className="flex mt-2 justify-between h-[40px]">
                    <div className="flex">
                      <div className="font-s text-gray-700">
                        <img
                          className="w-5"
                          src={location}
                          alt="location icon"
                        />
                      </div>
                      <div className="font-bold ms-2 text-base text-gray-950">
                        {items.Location}
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-[100px] h-8 bg-[#FF0000] text-white font-semibold rounded-full hover:bg-red-600 mb-20 text-sm"
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
      </div >
    </>
  );
}
export default Events;
