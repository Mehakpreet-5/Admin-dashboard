

import React from 'react';
import { LineChart, SatisfactionPieChart, BarChart, GenderChart, GenderDonutChart } from './chartt-A';
import Saless from './adi-saless';

import { FaShoePrints, FaCircle } from "react-icons/fa";
function Board() {
  return (
    <div className="flex flex-col space-x-24 mt-1 ml-72">
      <div className='ml-24'>< Saless /></div>

      <div className='flex flex-row space-x-6 mt-8  pr-10'>
        <div className='h-72 w-7/12  bg-slate-800 rounded-2xl shadow-lg '>
       <BarChart /></div>
        <div className='w-5/12 h-72 bg-slate-800 rounded-2xl shadow-lg pt-5'>

          <SatisfactionPieChart />
        </div>
      </div>
      <div className='flex flex-row space-x-4 mt-5  pr-10'>
       
        <div className="flex flex-col w-3/6  h-56 bg-slate-800 rounded-2xl shadow-lg text-white">
          <div className="flex flex-col gap-3 p-4 pl-7 pr-5">
            {/* Title with Icon */}
            <div className="flex items-center space-x-2">
              <FaShoePrints className="text-blue-400 text-2xl" />
              <h3 className="text-lg font-medium text-gray-300">Top Selling Shoes</h3>
            </div>

            {/* Shoe Sales List */}
            <ul className="text-lg font-semibold space-y-2 mt-2">
              <li className="flex justify-between items-center">
                <span className="flex items-center space-x-2">
                  <FaCircle className="text-yellow-400 text-sm" />
                  <span>Nike Air Max</span>
                </span>
                <span className="text-green-400 text-base font-medium">25,340 Sold</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center space-x-2">
                  <FaCircle className="text-yellow-400 text-sm" />
                  <span>Adidas Ultraboost</span>
                </span>
                <span className="text-green-400 text-base font-medium">18,920 Sold</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center space-x-2">
                  <FaCircle className="text-yellow-400 text-sm" />
                  <span>Puma RS-X</span>
                </span>
                <span className="text-green-400 text-base font-medium">14,760 Sold</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex flex-row w-7/12 bg-slate-800 rounded-2xl shadow-lg '>
          <div><GenderChart /></div>
          <div className='mt-16'>
            <GenderDonutChart /></div>
        </div>
      </div>
    </div>
  );
}


export default Board;
