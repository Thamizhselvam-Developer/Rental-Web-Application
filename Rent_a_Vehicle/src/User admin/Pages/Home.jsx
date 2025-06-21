
import UserNavbar from "../components/UserNavbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Works from "../components/Works";
import Event from "../components/Events";
import Trendings from "../components/Trendings";
import Footer from "../components/Footer";

import LatestVehicle from "../components/LatestVehicle";
import LuxuryVehicles from "../components/LuxuryVehicles"

import Customer from "../components/Customer" 
import WhytoChoose from "../components/WhytoChoose"


const Home = () => {
  return (
    <div className="container overflow-x-hidden bg-background ">
      <UserNavbar />
      <div  id="Hero">
      <Hero />

      </div>
      <div id = "For_You">
      <Card/>

      </div>
      <div id="Works">
      <Works />

      </div>
      <LatestVehicle/>
      <WhytoChoose/>
      <LuxuryVehicles/>

      <div id= "Events">
      <Event />

        </div>
      <Trendings />
      <div id= "Reviews">
      <Customer/>

      </div>

      
      <Footer />
      <div className="sticky top-0 z-50 bg-white p-4 shadow-md flex justify-end">
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow"
  >
    ⬆ Back to Top
  </button>
</div>

    </div>
  );
};

export default Home;
