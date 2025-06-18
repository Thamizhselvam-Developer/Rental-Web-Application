import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { enIN } from "date-fns/locale";

const DateTimeRangePicker = () => {
  const [location, setLocation] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="p-4 bg-white shadow-lg rounded-xl w-full max-w-screen-lg mx-auto mt-7">
      {/* Responsive Layout */}
      <div className="sm:flex-col md:flex-row lg:flex-row items-center justify-center gap-4">
        
        {/* Location Input */}
        <div className="flex items-center space-x-2 w-full sm:w-full md:w-[23%] lg:w-[23%]">
          <label className="text-primary font-semibold whitespace-nowrap">Where:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-1.5 focus:ring-primary w-full"
            placeholder="Enter location"
          />
        </div>

        {/* Vehicle Type Dropdown */}
        <div className="flex items-center space-x-2 w-full sm:w-full md:w-[23%] lg:w-[23%]">
          <label className="text-primary font-semibold whitespace-nowrap">Vehicle:</label>
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-primary"
          >
            <option value="" disabled>Select</option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            <option value="Van">Caravan</option>
            <option value="Truck">Luxury Car</option>
          </select>
        </div>

        {/* Start Date */}
        <div className="flex items-center space-x-2 w-full sm:w-full md:w-[23%] lg:w-[23%]">
          <label className="text-primary font-semibold whitespace-nowrap">From:</label>
          <div className="w-full">  {/* Ensuring full width for DatePicker */}
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              dateFormat="dd/MM/yyyy h:mm aa"
              locale={enIN}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              className="border border-gray-300 rounded-lg px-3 py-1.5 w-full" // Forcing full width
              wrapperClassName="w-full" // Fixing internal styling issue
            />
          </div>
        </div>

        {/* End Date */}
        <div className="flex items-center space-x-2 w-full sm:w-full md:w-[23%] lg:w-[23%]">
          <label className="text-primary font-semibold whitespace-nowrap">Until:</label>
          <div className="w-full">  {/* Ensuring full width for DatePicker */}
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              showTimeSelect
              dateFormat="dd/MM/yyyy h:mm aa"
              locale={enIN}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              className="border border-gray-300 rounded-lg px-3 py-1.5 w-full" // Forcing full width
              wrapperClassName="w-full" // Fixing internal styling issue
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default DateTimeRangePicker;
