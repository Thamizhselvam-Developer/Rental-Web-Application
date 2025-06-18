import React, { useEffect } from "react";
import { Type } from "../../Db/Type";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { enIN } from "date-fns/locale";

const Search = () => {
  const [Typedata, settypedata] = useState(Type);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [activeId, setactiveId] = useState()

  const Click = (id) => {

    setactiveId(id)

  }

  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(true);
  const [autoFilled, setAutoFilled] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation("Geolocation not supported");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          if (data && data.display_name) {
            setLocation(data.display_name);
            setAutoFilled(true);
          } else {
            setLocation(`Lat: ${latitude}, Lng: ${longitude}`);
            setAutoFilled(true);
          }
        } catch (error) {
          console.error("Error fetching location name:", error);
          setLocation(`Lat: ${latitude}, Lng: ${longitude}`);
          setAutoFilled(true);
        }
        setLoading(false);
      },
      (error) => {
        console.error("Error getting location:", error);
        setLocation("Unable to retrieve location.");
        setLoading(false);
      }
    );
  }, []);

  const handleChange = (e) => {
    setLocation(e.target.value);
    setAutoFilled(false);
  };

  return (
    <>
      <div className="container-fluid  ">
        <div className=" mt-3 h-[640px] md:ml-[120px] md:mt-[40px] lg:w-[590px] lg:h-[435px]  lg:mt-10  rounded-3xl lg:ml-[-12px]">
          <div className="mt-3 flex justify-center ">
            <span className=" mr-[180px] md:mr-[0px] md:ml-4 font-main text-3xl border-b-2 border-w-[20px]   border-b-primary ">
              Which Type of Vehicle
            </span>
          </div>
          <div className=" md:grid grid-cols-2 gap-4 mt-[20px]  mr-[200px] md:mr-[0px] md:ml-[20px] md:grid-cols-4 lg:grid-cols-4 md:gap-4 md:mt-[35px] lg:mt-[30px]">
            {Typedata.map((items, id) => (
              <button
                onClick={() => Click(items.id)}
                key={id}
                className={`w-[70px] md:w-[90px] lg:w-[90px] h-[50px] md:h-[70px] rounded-2xl md:rounded-3xl ml-5 text-center text-white 
                  ${activeId == items.id ? `bg-gray-600` : ` bg-primary`}`}
              >
                <img src={items.img} width="" className="ml-[10px] w-[50px] md:w-[70px] md:ml-[10px] mt-1" />
                <span className="text-sm  font-main" >{items.Title}</span>
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-[40px] md:mt-[30px]  items-center ">
            <div className="flex md:block  lg:block   mr-12">
              <label className="block text-sm items-center  font-medium text-gray-700 ml-[20px]  mb-2 lg:ml-3">
                Pickup Location
              </label>
              <input
                type="text"
                // value={loading ? "Fetching location..." : location}
                onChange={handleChange}
                className="w-auto  md:w-[218px] lg:w-[218px]  px-3 py-3 mx-4  mt-[-10px] md:mt-0 border border-primary font-extralight text-sm rounded-lg   lg:mr-3"
                placeholder="Enter your location manually"
              />
            </div>

            <div className="flex mt- md:block lg:block mt-3   md:mt-[-2px]  ">
              <label className="block text-sm items-center  font-medium text-gray-700 ml-[20px]  mb-2 lg:ml-3 " >
                Drop Location
              </label>
              <input
                type="text"

                placeholder="Enter drop location"
                className=" w-auto   md:w-11/12 lg:w-[218px]  px-3 py-3 mx-7 md:mx-0 mt-[-10px] md:mt-0 border border-primary font-extralight text-sm rounded-lg   lg:mr-3  "
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-[30px] md:mt-[30px]    items-center ">
            <div className="flex  gap-10 md:block  lg:block ">
              <div className="ml-6 grid-rows-2 md:hidden">

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2">
                    Pickup Date
                  </label>
                </div>
                <div>
                  <span> & Time</span>

                </div>
              </div>
               <label className="hidden md:block lg:block text-sm font-medium text-gray-700 mb-2">
                    Pickup Date & Time
                  </label>
              

              <div className=" flex justify-start ">

                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  dateFormat="dd/MM/yyyy | h:mm aa"
                  locale={enIN}
                  className=" w-auto md:w-11/12 max-w-[250px] lg:w-11/12 md:mx-5 px-3 py-3 border border-primary font-extralight text-sm rounded-lg mr-12 "

                  wrapperClassName="w-full"
                />
              </div>
            </div>

            <div className="flex  gap-8  md:block lg:block mt-3  md:mt-[-2px]  ">
              <div className="grid grid-rows-2 md:hidden lg:hidden">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 ml-7">
                    Return Date
                  </label>
                </div>

                <div>
                  <span>& Time</span>

                </div>
              </div>
               <label className="hidden md:block lg:block text-sm font-medium text-gray-700 mb-2 ml-7">
                    Return Date & Time
                  </label>
             

              <div>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  showTimeSelect
                  dateFormat="dd/MM/yyyy | h:mm aa"
                  locale={enIN}
                  className=" w-auto   max-w-[250px] md:w-11/12 md:mx-3  lg:w-11/12   px-3 py-3 border border-primary font-extralight text-sm rounded-lg mr-1 "
                  wrapperClassName="w-full"
                />
              </div>
            </div>
          </div>






          <div className="flex mt-[70px] md:mt-6 justify-center  mr-[150px] md:mr-0  ">

            <button className="bg-primary p-2 rounded-lg text-white font-semibold hover:bg-red-500 transition-colors">
              Search
            </button>
          </div>
        </div>

      </div>



    </>
  );
};

export default Search;