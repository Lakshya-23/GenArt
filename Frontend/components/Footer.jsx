import React from "react";
import { assets } from "../src/assets/assets";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
  return (
    <div className=" flex justify-between items-center">
      <div className="flex items-center">
        <img
          src={assets.logo}
          alt="logo"
          className="w-5 sm:w-6 md:w-8 lg:w-11"
        />
        <span className=" text-lg sm:text-xl md:text-2xl lg:text-3xl pl-2 text-shadow-sm ">
          GenArt
        </span>

        <p className="border-l ml-5 pl-5">
          All right reserved. Copyright @GenArt
        </p>
      </div>
      <div className="flex text-3xl gap-2">
        <FaLinkedin/>
        <FaSquareGithub/>
      </div>
    </div>
  );
}

export default Footer;
