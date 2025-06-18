import { useState } from "react";
import { Cardsdb } from "../Db/Card";
import seat from "../assets/Cards/Vector.png";
import auto from "../assets/Cards/Gear.png";
import Fuel from "../assets/Cards/Fuel.png";
import Heart from "../@UI/Heart";

function Cards() {
  const [cardData, setCarddata] = useState(Cardsdb);
  console.log(Cardsdb[0].img.ImgOne);

  return (
    <>
      <div className="">
        <div className="container flex justify-around md:justify-between  md:items-center   mb-9 md:mt-[20px]">
          <div className=" font-main font-bold text-3xl tracking-[2px] ml-[-20px]">
            {" "}
            For You{" "}
          </div>
          <button className="text-black bg-[#ffffff] border-[3px] border-black py-3 px-8 font-sans rounded-full text-lg text-center shadow-lg hover:bg-[#ff9191] text-nowrap">
            View more...
          </button>
        </div>

        <div className="grid gap-4 justify-center items-center grid-cols-1 m-3  md:grid-cols-2 lg:grid-cols-3  font-main  ">
          {cardData.map((items, id) => (
            <div className=" rounded-2xl shadow-[0px_4px_11px_8px_rgba(0,_0,_0,_0.1)] m-3 ">
              <div className=" relative top-[-13px] ml-4 mr-4">
                <div className=" relative top-9 left-[240px] flex w-8 h-7 justify-center items-center md:top-[35px] md:left-[237px] lg:left-[360px]  rounded-md bg-white overflow-hidden ">
                  <Heart />
                </div>
                <div className="w-full h-full md:w-[470px] md:h-[270px] lg:w-[470px] lg:h-[230px] max-w-full overflow-hidden">
                    
                    <img
                      className="rounded-xl w-full h-full object-cover "
                      src={items.img}
                      
                    />
                  </div>
              </div>

              <div>
                <div className="flex justify-center">
                  <div className=" border border-[#FF4545]  bg-[#FF4545] w-[170px] mt-2"></div>
                </div>

                <div className="grid grid-cols-2 items-center ml-6 mt-3">
                  <span className="text-[20px]  font-bold text-black">
                    {items.Name}
                  </span>
                  <div className=" flex ml-[40px]">
                    <svg
                      className="w-4 h-4 text-[#FF0000] ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-[#FF0000] ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-[#FF0000] ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-[#FF0000] ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-[88px_95px_95px] justify-center gap-4 mx-2 font-normal lg:gap-6  text-gray-700 dark:text-gray-400">
                <div className="grid grid-cols-2 justify-center  items-end">
                  <div className="mt-2 mx-2">
                    <img src={seat} alt="" width="30px" height="30px" />
                  </div>
                  <div className="mt-3 mx-1">
                    <span>07</span>
                  </div>
                </div>

                <div className=" grid grid-cols-[26px_1fr] justify-center items-end">
                  <div className="mt-3  ">
                    <img src={auto} width="26px" height="26px" />
                  </div>
                  <div className="mt-3 mx-2">
                    <span className="text-nowrap">{items.system}</span>
                  </div>
                </div>

                <div className="grid grid-cols-[36px_1fr] justify-center">
                  <div className="mt-[8px]">
                    <img src={Fuel} width="28px" height="28px" />
                  </div>
                  <div className="mt-[10px]">
                    <span>Petrol</span>
                  </div>
                </div>
              </div>

              <div className="px-4  relative">
                <hr className="h-px my-4 bg-[#F5EEDC] border-2 border-[#F5EEDC] dark:bg-gray-700 " />
              </div>

              <div className="grid grid-cols-2 gap-[20px] mt-5 mx-4 mb-5 shadow-red-900">
                <div className="mb-3 flex gap-1 justify-start text-gray-700 dark:text-gray-400">
                  <div className="mt-1 text-[23px]">
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                  </div>
                  <span className="text-[25px] font-black">{items.price}</span>
                  <span className="text-[20px] text-nowrap mt-1">
                    / Per Day
                  </span>
                </div>

                <div className="ml-[40px] ">
                  <button
                    type="button"
                    className="text-white bg-[#FF0000]  font-main rounded-full text-sm text-center me-2 mb-2 hover:bg-[#b23737] w-24 h-[35px]"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards;
