import verify from "../../assets/Works/user.png";
import journey from "../../assets/Works/people.png";

function Works() {
  return (
    <>
      <div className="m-4 lg:mt-14">
        <div className="flex justify-center font-bold font-main text-[40px]">
          <h1>How it Works</h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-4 lg:mt-14 lg:mb-[80px] gap-4">
          <div className="w-full max-w-xs lg:border-r-[2px] border-gray-300">
            <div className="flex justify-center">
              <div className="mt-5 flex justify-center items-center text-[20px] bg-primary w-[50px] h-[50px] rounded-full">
                <i className="fa-solid fa-location-dot"></i>
              </div>
            </div>
            <div className="mt-2 text-center font-bold text-[20px]">
              <span>Choose a Location</span>
            </div>
            <div className="text-center mt-2 mb-5 lg:mx-5">
              <span>Select the ideal destination to begin your journey</span>
            </div>
          </div>

          <div className="w-full max-w-xs lg:border-r-[2px] lg:ml-5 flex-row border-gray-300">
            <div className="flex justify-center">
              <div className="mt-5 flex justify-center items-center text-[20px] bg-primary w-[50px] h-[50px] rounded-full">
                <i className="fa-solid fa-car"></i>
              </div>
            </div>
            <div className="mt-2 text-center font-bold text-[20px]">
              <span>Choose Your Vehicle</span>
            </div>
            <div className="text-center mt-2 mb-5">
              <span>
                Browse our fleet & find the perfect vehicles for your needs
              </span>
            </div>
          </div>

          <div className="w-full max-w-xs lg:border-r-[2px] lg:ml-8 flex-row border-gray-300">
            <div className="flex justify-center">
              <div className="mt-5 flex justify-center items-center bg-primary w-[50px] h-[50px] rounded-full">
                <img src={verify} alt="" width="20px" />
              </div>
            </div>
            <div className="mt-2 text-center font-bold text-[20px]">
              <span>Verification</span>
            </div>
            <div className="text-center mt-2 mb-5 mx-6">
              <span>Review your information & confirm your booking</span>
            </div>
          </div>

          <div className="w-full max-w-xs">
            <div className="flex justify-center">
              <div className="mt-5 flex justify-center items-center bg-primary w-[50px] h-[50px] rounded-full">
                <img src={journey} alt="" width="23px" />
              </div>
            </div>
            <div className="mt-2 text-center font-bold text-[20px]">
              <span>Begin Your Journey</span>
            </div>
            <div className="text-center mt-2 mb-5 mx-6">
              <span>Start your adventure with confidence & ease</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
