import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CardDetailsdb } from "../../Db/CardDetails";
import seats from "../../assets/card_details/Vector.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { enIN } from "date-fns/locale";
import LatestVehicle from "./LatestVehicle";
import Footer from "./Footer";
import UserNavbar from "./UserNavbar";
import { MdOutlineEventSeat } from "react-icons/md";
import { GiSpeedometer } from "react-icons/gi";
import { GiSchoolBag } from "react-icons/gi";
import { BsFuelPump } from "react-icons/bs";
import { TbAutomaticGearbox } from "react-icons/tb";
import { TiStopwatch } from "react-icons/ti";
import { MdOutlineSpeed } from "react-icons/md";
import axios from "axios";
import { useEffect } from "react";

const CardDetails = () => {
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi;
  const navigate = useNavigate(); // Add this for navigation

  const [CardDetailsdata, setCardDetaildata] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [ImageData, setImageData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      BookingDetails(id);
    }
  }, [id]);

  const BookingDetails = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(`${app}BookingDetails/${id}`);
      console.log(response.data.CardData);
      
      setCardDetaildata(response.data.CardData || {});
      setImageData(response.data.ImgData || []);
    } catch (error) {
      console.error("Error fetching booking details:", error);
    } finally {
      setLoading(false);
    }
  };

  // State for add-ons
  const [addOns, setAddOns] = useState({
    insurance: false,
    additionalDriver: false,
    childSeat: false
  });

  // Add-on prices
  const addOnPrices = {
    insurance: 500,
    additionalDriver: 300,
    childSeat: 200
  };

  const taxAmount = 100; // Fixed tax amount

  // Handle checkbox changes
  const handleAddOnChange = (addOnType) => {
    setAddOns(prev => ({
      ...prev,
      [addOnType]: !prev[addOnType]
    }));
  };

  // Calculate totals
  const calculateAddOnTotal = () => {
    let total = 0;
    if (addOns.insurance) total += addOnPrices.insurance;
    if (addOns.additionalDriver) total += addOnPrices.additionalDriver;
    if (addOns.childSeat) total += addOnPrices.childSeat;
    return total;
  };

  // Use dynamicprice if available, otherwise fallback to price
  const basePrice = CardDetailsdata.dynamicprice || CardDetailsdata.dynamicPrice || 0;
  const subTotal = basePrice + calculateAddOnTotal();
  const totalPayable = subTotal + taxAmount;

  // Handle booking confirmation
  const handleBookNow = () => {
    const bookingData = {
      vehicleId: id,
      vehicle: CardDetailsdata,
      selectedAddOns: addOns,
      dates: {
        startDate: startDate,
        endDate: endDate,
        duration: Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) || 1
      },
      pricing: {
        basePrice: basePrice,
        addOnTotal: calculateAddOnTotal(),
        subTotal: subTotal,
        tax: taxAmount,
        totalPayable: totalPayable
      },
      addOnDetails: {
        insurance: addOns.insurance ? addOnPrices.insurance : 0,
        additionalDriver: addOns.additionalDriver ? addOnPrices.additionalDriver : 0,
        childSeat: addOns.childSeat ? addOnPrices.childSeat : 0
      }
    };

    // Log the booking data for debugging
    console.log("Booking Data:", bookingData);
    
    // Store booking data in localStorage or state management
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
    
    // Navigate to booking confirmation page
    navigate('/booking-confirmation', { state: { bookingData } });
    
    // Alternative: You can also show a confirmation alert
    // alert(`Booking confirmed!\nTotal Amount: ₹${totalPayable}\nRedirecting to confirmation page...`);
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <>
      <div className="">
        <UserNavbar />
      </div>
      <div className="flex-grow">
        {CardDetailsdata && Object.keys(CardDetailsdata).length > 0 && (
          <div className="container" key={id}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end m-4 justify-between items-end sm:m-8">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold tracking-widest">
                {CardDetailsdata.vehicle_name || 'Vehicle Details'}
              </h1>

              <div className="flex gap-2 mt-4 sm:mt-0">
                <button className="flex items-center px-3 sm:px-5 py-1 border border-black rounded-full shadow-lg hover:bg-primary hover:text-white">
                  <i className="fa-solid fa-share-nodes me-2"></i> Share
                </button>
                <button className="flex items-center px-3 sm:px-5 py-1 border border-black rounded-full shadow-lg hover:bg-primary hover:text-white">
                  <i className="fa-regular fa-heart me-2"></i> Wishlist
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
              <div>
                <img
                  className="rounded-xl object-cover w-full lg:h-[390px]"
                  src={`${app}uploads/${CardDetailsdata.image_name}`}
                  alt={CardDetailsdata.vehicle_name || 'Vehicle'}
                />
              </div>

              <div className="grid grid-rows-2 grid-cols-2">
                {ImageData.slice(0, 4).map((items, i) => (
                  <div key={i}>
                    <img
                      className="rounded-3xl m-auto lg:h-[180px]"
                      src={`${app}uploads/${items}`}
                      alt={`Vehicle ${i + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 my-8 gap-3">
              <div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border border-gray-300 p-4 rounded-xl">
                  <button className="rounded-md bg-red-400 flex items-center justify-center m-2 px-2 py-1 h-9">
                    <MdOutlineEventSeat className="size-6" />
                    <span className="ms-1">{CardDetailsdata.seats || 'N/A'} Seats</span>
                  </button>
                  <button className="rounded-md bg-red-400 flex items-center justify-center m-2 h-9">
                    <GiSpeedometer className="size-6" />
                    <span className="ms-1">{CardDetailsdata.mileage || 'N/A'} Kmpl</span>
                  </button>
                  <button className="rounded-md bg-red-400 flex items-center justify-center m-2 h-9">
                    <GiSchoolBag className="size-6" />
                    <span>{CardDetailsdata.bags || 'N/A'} Bags</span>
                  </button>
                  <button className="rounded-md bg-red-400 flex items-center justify-center m-2 h-9">
                    <BsFuelPump className="size-6" />
                    <span className="ms-1">{CardDetailsdata.fuelType || 'Petrol'}</span>
                  </button>
                  <button className="rounded-md bg-red-400 flex items-center justify-center m-2 h-9">
                    <TbAutomaticGearbox className="size-6" />
                    <span className="ms-1">{CardDetailsdata.system || 'Auto'}</span>
                  </button>
                  <button className="rounded-md bg-red-400 flex items-center justify-center m-2 h-9">
                    <TiStopwatch className="size-6" />
                    <span className="ms-1">Kmph</span>
                  </button>
                  <button className="rounded-md bg-red-400 flex items-center justify-center m-2 h-9">
                    <MdOutlineSpeed className="size-6" />
                    <span className="ms-1">{CardDetailsdata.travelled_distance || 0} Km</span>
                  </button>
                </div>

                <div className="border border-gray-300 p-4 rounded-xl mt-4">
                  <div className="flex justify-around border-b-2 border-gray-200 pb-2">
                    <h2 className="border-b-2 border-gray-800 font-bold">Description</h2>
                    <h2>Specification</h2>
                    <h2>Reviews</h2>
                  </div>
                  <p className="p-3">{CardDetailsdata.Description || 'No description available'}</p>
                </div>
              </div>

             <div className="border-[2px] border-gray-300 rounded-xl">
                <div className="bg-gray-100 p-5 tracking-widest  font-extrabold text-xl rounded-t-xl">
                  Rent This Vehicel
                </div>

                <div className="mx-7 mt-3 border-b-2 border-gray-200 pb-5">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                    <label className="font-semibold sm:w-1/3">Pick-Up</label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      dateFormat="dd/MM/yyyy h:mm aa"
                      locale={enIN}
                      className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <label className="font-semibold sm:w-1/3">Drop-Off</label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      showTimeSelect
                      dateFormat="dd/MM/yyyy h:mm aa"
                      locale={enIN}
                      className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                    />
                  </div>
                </div>

                <div className="mx-7 border-b-2 mt-3  border-gray-200 pb-5">
                  <div className="text-[18px] font-main mb-3">
                    Extra Add-ons:
                  </div>
                  <div className="flex items-center rounded-sm dark:border-gray-700 ">
                    <input
                      id="bordered-checkbox-1"
                      type="checkbox"
                      value=""
                      name="bordered-checkbox"
                      className="w-4 h-4  bg-gray-100 border-gray-300 rounded-sm   dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="bordered-checkbox-1"
                      className="w-full py-1 ms-2 tracking-widest text-[15px] text-gray-600  dark:text-gray-300"
                    >
                      Insurance Coverage
                    </label>
                  </div>
                  <div className="flex items-center rounded-sm dark:border-gray-700 ">
                    <input
                      id="bordered-checkbox-1"
                      type="checkbox"
                      value=""
                      name="bordered-checkbox"
                      className="w-4 h-4  bg-gray-100 border-gray-300 rounded-sm   dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="bordered-checkbox-1"
                      className="w-full py-1 ms-2 tracking-widest text-[15px] text-gray-600  dark:text-gray-300"
                    >
                      Additional Driver
                    </label>
                  </div>
                  <div className="flex items-center rounded-sm dark:border-gray-700 ">
                    <input
                      id="bordered-checkbox-1"
                      type="checkbox"
                      value=""
                      name="bordered-checkbox"
                      className="w-4 h-4  bg-gray-100 border-gray-300 rounded-sm   dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="bordered-checkbox-1"
                      className="w-full py-1 ms-2 tracking-widest text-[15px] text-gray-600 dark:text-gray-300"
                    >
                      Child Seat
                    </label>
                  </div>
                </div>

                <div className="py-4 mx-7  pb-5">
                  <div className="flex justify-between mt-1">
                    <p>Sub Total</p>
                    <p>₹XXX</p>
                  </div>
                  <div className="flex justify-between mt-1">
                    <p>Tax</p>
                    <p>₹XXX</p>
                  </div>
                  <div className="flex justify-between font-bold mt-1">
                    <p>Total Payable</p>
                    <p>₹XXX</p>
                  </div>
                  <button className="w-full bg-primary mt-3 p-2 rounded-md">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="">
        <LatestVehicle />
      </div>
      <div className="mt-7">
        <Footer />
      </div>
    </>
  );
};

export default CardDetails;