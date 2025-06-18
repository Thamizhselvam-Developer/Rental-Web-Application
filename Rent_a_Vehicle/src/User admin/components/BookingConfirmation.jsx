import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import axios from "axios";

const BookingConfirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const UserId = Cookies.get("id");
  const bookingData = state?.bookingData || JSON.parse(localStorage.getItem("bookingData") || "{}");
  const paymentData = state?.paymentData || JSON.parse(localStorage.getItem("paymentData") || "{}");
  
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const app = import.meta.env.VITE_API_REACT_APP_BackendApi;

  const fetchUserData = async (id) => {
    try {
      const response = await axios.get(`${app}userGet/${id}`);
      const data = response.data;
      setUserData(data[0] || {});
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (UserId) {
      fetchUserData(UserId);
    } else {
      setLoading(false);
    }
  }, []);

  // Generate booking reference number
  const generateBookingRef = () => {
    return `BK${Date.now().toString().slice(-8)}${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
  };

  const bookingRef = generateBookingRef();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!bookingData.vehicle) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <p className="text-xl font-semibold text-gray-800 mb-4">No booking data found</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const { vehicle, dates, pricing, selectedAddOns, addOnDetails } = bookingData;

  return (
    <>
      <UserNavbar />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Booking Confirmed!</h1>
            <p className="text-gray-600">Thank you for choosing our service. Your reservation is confirmed.</p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header with Booking Reference */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Booking Confirmation</h2>
                  <p className="text-blue-100">Booking Reference: <span className="font-mono font-bold">{bookingRef}</span></p>
                </div>
                <div className="text-right">
                  <p className="text-blue-100 text-sm">Confirmation Date</p>
                  <p className="font-semibold">{new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-8">
              {/* Customer Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Customer Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-medium">{userData.name || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium">{userData.email || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone:</span>
                      <span className="font-medium">{userData.phoneNo || 'N/A'}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    Payment Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment Method:</span>
                      <span className="font-medium">{paymentData.paymentMethod || 'Card Payment'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Card Number:</span>
                      <span className="font-medium font-mono">
                        ****-****-****-{paymentData.cardNumber?.slice(-4) || '****'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transaction ID:</span>
                      <span className="font-medium font-mono">
                        {paymentData.transactionId || `TXN${Date.now().toString().slice(-10)}`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vehicle Information */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0zM12 9v2.25m0 4.5h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  Vehicle & Rental Details
                </h3>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Vehicle</p>
                      <p className="font-semibold text-lg">{vehicle.vehicle_name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-semibold">{dates.duration} day(s)</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Pick-Up</p>
                      <p className="font-medium">{new Date(dates.startDate).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Drop-Off</p>
                      <p className="font-medium">{new Date(dates.endDate).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Summary */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Pricing Summary
                </h3>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Base Price:</span>
                      <span className="font-medium">₹{pricing.basePrice}</span>
                    </div>
                    
                    {/* Add-ons */}
                    {selectedAddOns?.insurance && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Insurance:</span>
                        <span className="font-medium">₹{addOnDetails.insurance}</span>
                      </div>
                    )}
                    {selectedAddOns?.additionalDriver && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Additional Driver:</span>
                        <span className="font-medium">₹{addOnDetails.additionalDriver}</span>
                      </div>
                    )}
                    {selectedAddOns?.childSeat && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Child Seat:</span>
                        <span className="font-medium">₹{addOnDetails.childSeat}</span>
                      </div>
                    )}
                    
                    <div className="border-t pt-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal:</span>
                        <span className="font-medium">₹{pricing.subTotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax:</span>
                        <span className="font-medium">₹{pricing.tax}</span>
                      </div>
                      <div className="flex justify-between text-xl font-bold text-green-600 mt-2 pt-2 border-t">
                        <span>Total Paid:</span>
                        <span>₹{pricing.totalPayable}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Information */}
              <div className="border-t pt-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Information</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Please bring a valid driving license and ID proof at the time of pickup</li>
                    <li>• Arrive 15 minutes early for vehicle inspection</li>
                    <li>• Contact us at least 2 hours before pickup for any changes</li>
                    <li>• Keep this confirmation for your records</li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="border-t pt-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => window.print()}
                    className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    Print Confirmation
                  </button>
                  <button
                    onClick={() => navigate("/bookings")}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0zM12 9v2.25m0 4.5h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    View My Bookings
                  </button>
                  <button
                    onClick={() => navigate("/")}
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Back to Home
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center mt-8 text-gray-600">
            <p>Need help? Contact our support team at <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingConfirmation;