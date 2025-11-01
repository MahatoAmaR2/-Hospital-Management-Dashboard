import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { MdOutlineAssignment } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { SiGoogleanalytics } from "react-icons/si";
import ProgressBar from "./ProgressBar";
const data = [
  { name: "Doctors", value: 500 },
  { name: "Nurse", value: 700 },
  { name: "Dietitians", value: 800 },
  { name: "Vlounteers", value: 699 },
  { name: "Pharmacists", value: 200 },
  { name: "Other Staff", value: 300 },
];

const COLORS = [
  "#DEA550",
  "#4763EB",
  "#B69B2E",
  "#298CD6",
  "#21B6A3",
  "#92D528",
];

const Department = () => {
  return (
    <>
      <div className="flex flex-col w-full md:w-[40%]">
        <div className="w-full mx-5 h-70 my-5 p-5 pr-10 md:pr-5  bg-white rounded-lg shadow-md">
          <div className="justify-between flex items-center mb-4">
            <div className="flex gap-2 items-center">
              <MdOutlineAssignment color="#2E8075" />
              <h2 className="text-sm text-gray-500 font-semibold flex items-center gap-2 ">
                Total Department
              </h2>
            </div>
            <BsThreeDots className="text-gray-500 cursor-pointer hover:text-gray-700" />
          </div>
          <div className="w-full h-50 flex justify-between items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={50}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div>
              <div className="flex gap-2 items-center">
                <span className="w-2 h-2 rounded-full bg-[#DEA550]"></span>
                <p>Doctors</p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="w-2 h-2 rounded-full bg-[#4763EB]"></span>
                <p>Nurse</p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="w-2 h-2 rounded-full bg-[#B69B2E]"></span>
                <p>Dietitians</p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="w-2 h-2 rounded-full bg-[#298CD6]"></span>
                <p>Vlounteers</p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="w-2 h-2 rounded-full bg-[#21B6A3]"></span>
                <p>Pharmacists</p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="w-2 h-2 rounded-full bg-[#92D528]"></span>
                <p>Other Staff</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-5 mt-1 mb-2 rounded-lg shadow-md p-5 pr-10 md:pr-5  w-full">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 ">
              <SiGoogleanalytics color="#2E8075" />
              <p className="text-gray-500 text-sm font-medium">
                Hospital Analytics Sessions
              </p>
            </div>
            <BsThreeDots className="text-gray-500 cursor-pointer hover:text-gray-700" />
          </div>
          <div className="my-5">
            <div className="flex justify-between text-gray-900 text-base font-medium mb-2">
              <p>OPD</p>
              <p>25%</p>
            </div>
            <ProgressBar progress={25} />
          </div>
          <div>
            <div className="flex justify-between text-gray-900 text-base font-medium mb-2">
              <p>Laboratory Test</p>
              <p>50%</p>
            </div>
            <ProgressBar progress={50} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Department;
