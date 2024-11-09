import React, { useState } from "react";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { GiSoccerField } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function UserAsideBar({ userMenuOpen, setUserMenuOpen, setShowLogOutModal }) {
  const navigate = useNavigate();

  const handleLogOut = () => {
    setShowLogOutModal(true);
  };

  return (
    <div
      className={`p-2 sm:p-4 overflow-hidden flex flex-col lg:shadow-lg rounded-r-2xl sm:rounded-2xl fixed top-[66px] left-0 sm:left-4 bg-white border-[2px] border-neutral-300
      ${
        userMenuOpen
          ? "w-full max-w-[400px] sm:w-[400px] items-start"
          : "items-center w-[80px]"
      }`}
    >
      <div
        className="absolute top-2 right-2 flex items-center justify-center text-[1.75rem] cursor-pointer"
        onClick={() => setUserMenuOpen(!userMenuOpen)}
      >
        {userMenuOpen ? <TiChevronLeft /> : <TiChevronRight />}
      </div>
      <div
        className="flex mt-8 w-fit cursor-pointer gap-2"
        onClick={() => navigate("/userdashboard/1/")}
      >
        <div className="w-[36px] h-[36px] hover:scale-110 transition-all duration-150 ease-out rounded-full flex items-center justify-center border-2 border-black font-semibold bg-blue-500 text-white">
          F
        </div>
        <div
          className={`w-fit flex-col ${
            userMenuOpen ? "flex hover:underline" : "hidden"
          } `}
        >
          <h2 className="font-semibold my-0 leading-none">Francisco Perez</h2>
          <p className="text-sm">fperezfrancisco4@gmail.com</p>
        </div>
      </div>
      <div className="w-full h-[2px] my-4 bg-neutral-200"></div>
      <ul className=" w-fit my-4 flex flex-col items-start gap-4">
        <li
          tabIndex={0}
          className="flex justify-start items-center cursor-pointer hover:underline hover:text-blue-500 gap-2"
          onClick={() => navigate("/userdashboard/1/myaccount")}
        >
          <div className="">
            <FaUser className="text-[1.5rem]" />
          </div>
          <p className={`${userMenuOpen ? "inline-block" : "hidden"}`}>
            My Account
          </p>
        </li>
        <li
          tabIndex={0}
          className="flex justify-start items-center cursor-pointer hover:underline hover:text-blue-500 gap-2"
          onClick={() => navigate("/userdashboard/1/myplayers")}
        >
          <div className="">
            <FaUserGroup className="text-[1.5rem]" />
          </div>
          <p className={`${userMenuOpen ? "inline-block" : "hidden"}`}>
            My Players
          </p>
        </li>
        <li
          tabIndex={0}
          className="flex justify-start items-center cursor-pointer hover:underline hover:text-blue-500 gap-2"
          onClick={() => navigate("/userdashboard/1/mysessions")}
        >
          <div className="">
            <GiSoccerField className="text-[1.75rem]" />
          </div>
          <p className={`${userMenuOpen ? "inline-block" : "hidden"}`}>
            My Sessions
          </p>
        </li>
      </ul>
      <div className="w-full h-[2px] my-4 bg-neutral-200"></div>
      <div
        className="flex items-center justify-start cursor-pointer gap-2 py-6"
        onClick={handleLogOut}
      >
        <div className="">
          <BiLogOut className="text-[1.5rem]" />
        </div>
        <p
          className={`${
            userMenuOpen ? "inline-block text-red-500 font-bold" : "hidden"
          }`}
        >
          Log out
        </p>
      </div>
    </div>
  );
}

export default UserAsideBar;
