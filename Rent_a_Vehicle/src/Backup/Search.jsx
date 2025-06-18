import React from "react";
import { Type } from "../Db/Type";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { enIN } from "date-fns/locale";

const Search = () => {
  const [Typedata, settypedata] = useState(Type);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // const [Btn,setbtn]=useState("")

  const Click =(id)=>{
    setbtn=(id);

  }

  return (
    <>
      <div className="container-fluid ">
        <div className=" mt-3 h-[640px] md:ml-[120px] md:mt-[40px] lg:w-[590px] lg:h-[435px]  lg:mt-10  rounded-3xl lg:ml-[-12px]">
          <div className="mt-3 flex justify-center ">
            <span className=" md:ml-4 font-main text-3xl border-b-2 border-w-[20px]  border-b-primary ">
              Which Type of Vehicle
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-[20px] ml-[20px] md:grid-cols-4 lg:grid-cols-4 md:gap-4 md:mt-[35px] lg:mt-[30px]">
            {Typedata.map((items, id) => (
              <button
              onClick={()=>Click(items)}
                key={id}
                className="w-[90px] h-[70px] rounded-3xl ml-5 text-center text-white  bg-primary  hover:bg-gray-600"
              >
                <img src={items.img} width="70px" className="ml-[10px] mt-1" />
                <span className="text-xs font-main" >{items.Title}</span>
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-[32px] md:ml-[30px]">
            <div className="flex md:block  lg:block">
              <label className="block text-sm font-medium text-gray-700 ml-[23px] lg:mb-2 lg:ml-3">
                Pickup Location
              </label>
              <input
                type="text"
               
                placeholder="Enter pickup location"
                className="w-auto px-4 py-2 border border-primary  rounded-lg  ml-3   mr-2 "
              />
            </div>
            <div className="flex md:block lg:block">
              <label className="block text-sm font-medium text-gray-700 mb-2  ml-[23px] z-20" >
                Drop Location
              </label>
              <input
                type="text"

                placeholder="Enter drop location"
                className="w-auto px-4 py-2 border border-primary  rounded-lg ml-[22px] lg:mr-3   "
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-[20px] ml-[8px] md:ml-[30px]">
            <div className="flex md:block lg:block">
              <label className="block text-sm font-medium text-gray-700 mb-2 ml-3">
                Pickup Date & Time
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                dateFormat="dd/MM/yyyy | h:mm aa"
                locale={enIN}
                className="w-auto px-4 py-2 border border-primary  rounded-lg focus:ring-2 ml-3  mr-2 "
                wrapperClassName="w-full"
              />
            </div>
            <div className="flex md:block lg:block relative z-20">
              <label className="block text-sm font-medium text-gray-700 mb-2 ml-3">
                Return Date & Time
              </label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                showTimeSelect
                dateFormat="dd/MM/yyyy | h:mm aa"
                locale={enIN}
                className="w-auto px-4 py-2 border border-primary  rounded-lg   mr-2 z-20 "
                wrapperClassName="w-full"
              />
            </div>
          </div>

         
          <div className="flex justify-center mt-6 ml-[5px] md:mt-6 md:ml-[40px] lg:mt-6">
            <button 
             
              className="
                px-8 py-3 bg-primary text-white 
                rounded-full font-semibold 
                hover:bg-slate-600
              "
            >
              Find Your Vehicle
            </button>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Search;
