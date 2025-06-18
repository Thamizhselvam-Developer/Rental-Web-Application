import React from "react";
import HeroImg from "../assets/bg.png";
import Lamp from "../assets/Lamp.png";
import Black from "../assets/Blackblend.png";
import ImgOne from "../assets/img-1.png";
import bgOverlay from "../assets/bgover.png";
import Gear from "../assets/Gear.png";
// import Frame from "../assets/Frame.svg";
import Bike from "../assets/Bike.png";
import Man from "../assets/Man.png"
import Light from "../assets/Light.png"
import BG from "../assets/BG.png"
import Search from "./Search";
import Mapbg from "../assets/mapbg.png"
const Hero = () => {
  return (
    <>
      <div className="container overflow-hidden md:flex w-full h-[850px] md:h-[630px] lg:h-[633px]   mt-[5px] lg:gap-[90px] bg-main relative z-10   ">
        {/* <div className=" absolute top-[-80px] left-[-11px] opacity-50 z-10">
          <img src={BG}  width="400px"/>
        </div> */}
        <div
          // style={{
          //   backgroundImage:
          //     "radial-gradient(rgba(0,0,0, 0.271) 2px, transparent 0)",
          //   backgroundSize: "30px 30px",
          //   backgroundPosition: "-5px -5px",
          // }}
          className="block
            w-[100%]  md:w-[] lg:w-[60%] z-5 lg:flex lg:ml-[30px]  "
        > 
          {/* <div className=" absolute opacity-50 w-[800px] left-[60px] top-[90px]">
            <img src={Mapbg}/>
          </div> */}
          <div className="font-main w-[550px] h-[480px]  text-center md:ml-[]  lg:ml-[80px] lg:mt-[5px]   ">
            <div className="relative z-20"> 
              <h3 className="hidden md:block lg:block font-main font-semibold text-[40px]  text-start md:ml-[140px]  lg:ml-[50px] lg:mt-[2px]">
                {/* <span className="text-primary text-7xl ml-6  ">"</span> */}
                <span className="text-primary text-8xl text-start text-wrap">R</span>ental Your
                <span className="">Way,</span>
                <span className="block md:ml-[-24px]   text-start"> Anytime, Anywhere!</span>
              </h3>
              <div className="relative z-20 md:hidden lg:hidden ">
              <h3 className=" ml-[-230px]  font-main font-semibold text-[40px] text-center  lg:ml-[50px] ">
              <span className="text-primary text-8xl  text-wrap">R</span><span>ental Your</span>
              <span className="block ">Way,</span>
              <span className="block   "> Anytime </span>
              <span className="block">Anywhere!</span>
              </h3>
              </div>

              {/* <p className=" mt-[20px] text-start">
                Our Bikes and Cars Rental platform to rent vehicles with ease.{" "}
                <br /> Boking options, real-time availability,
                secure payments. <br />
                Explore, book, and hit the road — hassle-free!
              </p> */}
              {/* <div className="ml-[-125px]">

          <button className="bg-primary text-white py-2 px-4 mt-[20px] rounded-full hover:bg-[#f13939]   shadow-lg">
              Rent-Now
            </button>
          </div> */}
          <div className="ml-[-30px]  md:ml-[-57px] lg:ml-[-57px] absolute md:top-[140px]  lg:top-[140px]">
            <Search/>
          </div>
            </div>
            
            {/* <div className="w-[300px] absolute top-[1px] z-10 left-[-76px]">
            <img className="" src={Bike} width="300px"/>

          </div> */}
            {/* <div className="bg-primary w-[80px] h-[200px] absolute top-[-10px] left-[10px]  z-10 ">

          </div> */}
          
            
{/* 
            <div>
          <img src= {Frame} />
            </div> */}
          </div>

          {/* <h1 className=' font-display font-extrabold text-[100px] mt-[-50px] [text-shadow:_4px_1px_1px_#BBC9DC]'>
more on your</h1> 
 <h1 className='font-display font-extrabold text-[100px] mt-[-50px] [text-shadow:_4px_1px_1px_#BBC9DC]'> Rent on Vehicles?</h1>
 <br/> <p className=' ml-[80px] font-extrabold font-display text-[#FDFAF6] '>Discover RentalX car rental aoptions in India with Rent a Car<br/>
Select from a range of car options and local specials.</p> 
  */}
          {/* <div className="ml-[130px]">
            <button className="bg-[#FF5757] font-display font-extrabold  text-white rounded-full w-[150px] h-[60px] border-blue-500 ml-[200px] mt-[20px] shadow-[4px_7px_0px_-3px_rgba(0,_0,_0,_0.1)]">
              Get Start
            </button>
          </div> */}
        </div>

        <div className=" hidden md:block  md:w-[0%] lg:w-[39%] lg:h-[600px] relative mt-2  bg-[#F5EEDC] rounded-full   lg:grid lg:grid-rows-[200px_280px_90px] ">
          <div className=" animate-slide-left-right">
            <img
              className="lg:ml-[190px] lg:mt-[-30px]  "
              src={Lamp}
              width="105px"
            />

            <div className="w-[300px] h-[400px] absolute z-50 lg:top-[74px] lg:left-[90px]  ">
              <img src={Light}  />
            </div>
          </div>
          <div className="absolute top-[410px] left-[70px] ">
            <img className=" blur-3xl h-[200px]" src={Black} width="420px " />
          </div>
          <div className="absolute top-[225px] left-[-80px] w-[600px] ">
            <img src={ImgOne}/>
          </div>
          <div className="w-[]">
              <img className="ml-[0px] absolute top-[100px]   left-[-120px] z- 10" src={Man} width="250px" />
            </div>
        </div>


        <div className="absolute z-2 top-[110px]">
          {/* <img src={Svg}  width="900px"/> */}
        </div>
        {/* <div className='sm:hidden md:flex lg:flex   bg-[#eaeaea] w-[50%]  flex'>

  <div className='w-[350px] bg-[#ec4d4d] h-[550] mt-[67px] rounded-l-full '>
    
  </div> 
 

  <div className='w-[350px] bg-[#d2d4d6] h-[500px] mt-[70px] '>
    
  </div>
 

  <div className='w-[350px] bg-[#ec4d4d] h-[550px] rounded-r-full mt-[20px] '>
    
  </div>
 
</div> */}

        {/* <div className=' absolute left-[200px]] top-[-135px]'><img className='ml-[450px]' src={HeroImg}/></div> */}
      </div>
      {/* <div className=" absolute top-[70px] left-[-110px]  " >
        <img src={Gear} width="500px"/>
      </div> */}
    </>
  );
};

export default Hero;
