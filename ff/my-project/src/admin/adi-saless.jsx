
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaShoppingCart, FaDollarSign, FaGlobe, FaCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Saless() {
  const [salesData, setSalesData] = useState(null);


    const [isTransitioning, setIsTransitioning] = useState(false);
  
    const handleClick = (e) => {
      e.preventDefault(); // Prevent default navigation
  
      setIsTransitioning(true);
  
      setTimeout(() => {
        // Programmatically navigate after transition
        // window.location.href = "/"; // Navigate to the link
      }, 500); // Adjust the duration for the transition
    };
  // Fetch sales data from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/saless") // Ensure the correct backend URL
      .then((response) => {
        console.log("Fetched Sales Data:", response.data);
        setSalesData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sales data:", error);
      });
  }, []);

  
  return (
    <div className="flex flex-row space-x-16 mt-10">
      {/* Total Sales Card */}
      <div className="flex flex-col w-[390px] h-48 bg-slate-800 rounded-2xl text-white shadow-[0_0_20px_7px_rgba(147,112,219,0.8)] hover:scale-105 transition transform  hover:shadow-[0_0_15px_5px_rgba(147,112,219,0.8)]">
        <div className="flex flex-col gap-2 p-4 pl-7">
          <div className="flex items-center space-x-2">
            <FaDollarSign className="text-green-400 text-xl" />
            <h3 className="text-lg font-medium text-gray-300">Total Sales</h3>
          </div>
          <h1 className="text-4xl font-bold">
            ${salesData ? salesData.totalSales.toLocaleString() : "Loading..."}
          </h1>
          <h4 className="text-sm text-green-400 font-medium">▲ 12% + 10,204 Today</h4>
        </div>
      
       
        <Link
      to="/sales"
      // onClick={handleClick} // Custom click handler
      className={`text-lg  mt-3 font-semibold text-gray-300 cursor-pointer transition transform ${
        isTransitioning ? "opacity-70 scale-98" : "hover:text-white"
      }`}
    >   <div className="border-t border-gray-500 p-2 pl-4 ">
      View Sales → </div>
    </Link>
        </div>


      {/* Total Orders Card */}
      <div className="flex flex-col w-[390px] h-48 bg-slate-800 rounded-2xl text-white shadow-[0_0_20px_7px_rgba(147,112,219,0.8)] hover:scale-105 transition transform  hover:shadow-[0_0_15px_5px_rgba(147,112,219,0.8)]">
        <div className="flex flex-col gap-2 p-4 pl-7">
          <div className="flex items-center space-x-2">
            <FaShoppingCart className="text-blue-400 text-xl" />
            <h3 className="text-lg font-medium text-gray-300">Total Orders</h3>
          </div>
          <h1 className="text-4xl font-bold">
            {salesData ? salesData.totalOrders.toLocaleString() : "Loading..."}
          </h1>
          <h4 className="text-sm text-green-400 font-medium">▲ 09.08% + 1,204 Today</h4>
        </div>
      
        <Link
      to="/orders"
      // onClick={handleClick} // Custom click handler
      className={`text-lg mt-3 font-semibold text-gray-300 cursor-pointer transition transform  ${
        isTransitioning ? "opacity-70 scale-98" : "hover:text-white"
      }`}
    >   <div className="border-t border-gray-500 p-2 pl-4 ">
      View Order → </div>
    </Link>
        </div>
     

      {/* Total Countries Card */}
      <div className="flex flex-col w-[370px] h-48 bg-gray-800 rounded-2xl text-white shadow-[0_0_20px_7px_rgba(147,112,219,0.8)] hover:scale-105 transition transform  hover:shadow-[0_0_15px_5px_rgba(147,112,219,0.8)]">
        <div className="flex flex-col gap-2 p-4">
          <div className="flex items-center space-x-2">
            <FaGlobe className="text-yellow-400 text-xl" />
            <h3 className="text-lg font-medium text-gray-300">Total Countries</h3>
          </div>
          <ul className="text-xl font-semibold space-y-2 mt-2">
            {salesData ? (
              salesData.countries.map((country, index) => (
                <li key={index} className="flex items-center space-x-2 ">
                  {/* <img src={country.flag} alt={country.name} className="w-6 h-4 rounded" /> */}
                  <span className=" flex ml-2">   <FaCircle className="text-yellow-300 text-sm mr-3 mt-2" />{country.name}</span>
                </li>
              ))
            ) : (
              <li className="text-gray-400">Loading...</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Saless;
