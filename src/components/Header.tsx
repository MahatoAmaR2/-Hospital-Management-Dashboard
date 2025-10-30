import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaCaretDown, FaSearch } from "react-icons/fa";
import Sidebar from "./Sidebar";
import profileImg from '../assets/profile.jpeg'

const Header = () => {
  return (
    <>
      <div className="flex">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="navbar flex justify-between items-center pr-4 py-2 w-full bg-white h-16 shadow">
          <div className="left">
            <div className="relative pl-2">
              <input
                type="text"
                placeholder="Search anything here"
                className="w-full px-10 py-2 rounded bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaSearch size={20} />
              </div>
            </div>
          </div>
          <div className="right flex items-center gap-4">
            <IoIosNotificationsOutline size={25} color="black" />
            <span className="border-l-2 border-gray-400 h-10 "></span>
            <img className="profile-pic rounded-full w-10 h-10" src={profileImg} alt="Profile" />
            <p className="text-black text-sm font-semibold">Dhoni</p>
            <FaCaretDown size={15} color="gray" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
