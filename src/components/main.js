import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";


const Main = () => {
  return (
    <div className="height1 bg-[#1E1D1C] flex flex-col items-center justify-center relative z-50" id="main">
      <div className=" text-white mb-20">
        <p className="text-[25px]">YOUR OWN STYLE </p>
        <p className="text-[50px]">
          <span className="bookborder">BOOK </span>
          AN APPOINTMENT WITH THE <span className="z-50">CLIPPERGURU</span>
        </p>
        <bg className="bg-[#b38859] absolute h-20 w-[300px] right-[20%] top-[33.5%] -z-10"></bg>
        <border className="bg-[#b38859] absolute h-20 w-[300px] right-[19%] top-[31%] bg-transparent border -z-20"></border>
      </div>

      <button type="button" className="bg-[#b38859] px-40 py-4 text-white cursor-pointer text-[25px]">BOOK NOW</button>

      <div className="flex gap-5 mt-10 text-[#b38859] text-[40px]">
        <a
          href="https://www.instagram.com/theclipperguru/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer  "
        >
          <AiOutlineInstagram />
        </a>
        <a
          href="https://www.instagram.com/theclipperguru/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer "
        >
          <BiLogoFacebook />
        </a>
      </div>
    </div>
  );
};

export default Main;
