import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FiDownload } from "react-icons/fi";

const Dashboard = () => {
  const [selected, setSelected] = useState("Week");

  const options = ["Week", "Month", "Year"];

  return (
    <>
      <div className="flex w-full">
        <div className="sidebar hidden md:block ">
          <Sidebar />
        </div>
        <div className=" md:w-9/12 ">
          <div className="flex w-full flex-col md:flex-row ml-6 my-8 justify-between">
            <div className="flex flex-col ">
              <h1 className="text-3xl font-medium">Statistics</h1>
              <p className="text-sm text-gray-400 font-medium">
                This is data statistics for the last 7 days
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <div className="relative inline-block">
                <select
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  className="block h-12 w-40 px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm
             hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-300
             transition-colors duration-200 cursor-pointer"
                >
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className="flex items-center h-12 w-40 justify-between gap-2 px-4 py-2 bg-[#2E8075] text-white text-sm font-medium rounded-md
                shadow-sm cursor-pointer transition-transform duration-200 ease-in-out hover:scale-95"
              >
                <FiDownload className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
