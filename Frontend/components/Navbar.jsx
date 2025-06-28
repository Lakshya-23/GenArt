import React, { useState } from "react";
import { MdStars } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { assets } from "../src/assets/assets";
import { Link } from "react-router-dom";
import useAppStore from "../store/useAppStore";
function Navbar() {
  const isLoggedIn = useAppStore((state) => state.isLoggedIn);
  const authUser = useAppStore((state) => state.authUser);
  const setshowsignin = useAppStore((state) => state.setshowsignin);
  const logout = useAppStore((state) => state.logout);

  console.log(authUser);
  return (
    <nav className="flex pt-4 justify-between ">
      <Link to={"/"}>
        <div className="flex items-center ">
          <img
            src={assets.logo}
            alt="logo"
            className="w-5 sm:w-6 md:w-8 lg:w-11"
          />
          <span className=" text-lg sm:text-xl md:text-2xl lg:text-3xl pl-2 text-shadow-sm ">
            GenArt
          </span>
        </div>
      </Link>

      {isLoggedIn ? (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-blue-200 px-4 py-2.5 rounded-full hover:scale-105 duration-400 transition-all ">
            <MdStars className="text-blue-600 text-2xl" />
            <span>Credit Balance : {authUser?.creditBalance}</span>
          </div>
          <span>Hi, {authUser?.name}</span>
          <div className="relative group inline-block pb-1">
            <div className="bg-white shadow-xl rounded-full p-2 ">
              <FaUser className="text-lg" />
            </div>
            <div>
              <button
                onClick={logout}
                className="absolute top-9 -right-4.5 z-10 mt-1 text-md hidden group-hover:block bg-white px-3 py-1 shadow cursor-pointer rounded "
              >
                Logout
              </button>
              <Link to={'/buy'}><button className="absolute top-18 mt-0.5 -right-4.5 z-10  text-md hidden group-hover:block bg-white px-3 py-1 shadow cursor-pointer rounded">Pricing</button></Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Link to={"/buy"} className="mr-7 cursor-pointer font-medium">
            Pricing
          </Link>
          <button
            className="bg-black  cursor-pointer text-white  rounded-full px-10 py-1.5"
            onClick={() => setshowsignin(true)}
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
