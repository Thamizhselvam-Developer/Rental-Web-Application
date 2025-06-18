import UserNavbar from "../components/UserNavbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Works from "../components/Works";
import Event from "../components/Events";
import Trendings from "../components/Trendings";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

import LatestVehicle from "../components/LatestVehicle";
import LuxuryVehicles from "../components/LuxuryVehicles"




const Home = () => {
  return (
    <div className="container overflow-hidden-x">
      <UserNavbar />
      <Hero />
      <Card />
      <Works />
      <LatestVehicle/>
      <LuxuryVehicles/>
      <Event />
      <Trendings />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
