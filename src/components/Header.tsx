import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaCaretDown, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "./Sidebar";
import profileImg from "../assets/profile.jpeg";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex">
      <div
        className={`fixed md:static top-0 left-0 h-full z-20 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <Sidebar />
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <div className="navbar flex justify-between items-center pr-4 py-2 w-full bg-white h-16 shadow relative z-30">
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <FaTimes size={20} className="text-gray-700" />
            ) : (
              <FaBars size={20} className="text-gray-700" />
            )}
          </button>

          <div className="relative pl-2">
            <input
              type="text"
              placeholder="Search anything here"
              className="w-full md:w-80 px-10 py-2 rounded bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaSearch size={18} />
            </div>
          </div>
        </div>

        <div className="right flex items-center gap-4">
          <IoIosNotificationsOutline size={25} color="black" className=" transform transition-transform duration-200 hover:scale-110 cursor-pointer"/>
          <span className="border-l-2 border-gray-300 h-6"></span>
          <img
            className="profile-pic rounded-full w-10 h-10  transform transition-transform duration-200 hover:scale-110 cursor-pointer"
            src={profileImg}
            alt="Profile"
          />
          <p className="text-black text-sm font-semibold">Dhoni</p>
          <FaCaretDown size={18} color="gray" className=" transform transition-transform duration-200 hover:scale-80 cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
