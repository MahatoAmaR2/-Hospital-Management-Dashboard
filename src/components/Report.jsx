import { RiHospitalFill } from "react-icons/ri";
import Chart from "./Chart";

const Report = () => {
  return (
    <div className="w-full bg-white rounded-md shadow-md">
      <div className="flex gap-2 mb-4 px-5">
        <RiHospitalFill className="w-6 h-6 text-[#2E8075]" />
        <p className="text-sm font-semibold mb-4 text-gray-500">
          Hospital Report
        </p>
      </div>
      <div className="flex gap-4 md:gap-10 px-5 font-semibold mb-8">
        <div className="">
          <p className="text-gray-600 text-sm">Assign Doctor</p>
          <p className="text-2xl">221</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Admit Patient</p>
          <p className="text-2xl">320</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Other Staff</p>
          <p className="text-2xl">88</p>
        </div>
      </div>
      <div className="h-80">
        <Chart />
      </div>
    </div>
  );
};

export default Report;
