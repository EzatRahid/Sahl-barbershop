import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { useEffect } from "react";


const Main = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('show1', entry.isIntersecting);
        if (entry.isIntersecting) {
          observer.unobserve(entry.target); // Corrected this line
        }
      });
    });
  
  
  
    const hideElements = document.querySelectorAll('.hide1')
    hideElements.forEach((element) =>{
      observer.observe(element)
    })


    return () => {
      // Cleanup when the component unmounts
      observer.disconnect();
    };
  }, [])



  return (

    <div className="height1 bg-[#1E1D1C] flex flex-col items-center justify-center relative z-50" id="main">
      <div className=" text-white mb-20 hide1 delay">
        <p className="text-[25px]">YOUR OWN STYLE </p>
        <p className="text-[50px]">
          <span className="bookborder">BOOK </span>
          AN APPOINTMENT WITH THE <span className="z-50">CLIPPERGURU</span>
        </p>
        <bg className="bg-[#b38859] absolute h-20 w-[300px] right-[1%] top-[34.5%] -z-10"></bg>
        <border className="bg-[#b38859] absolute h-20 w-[300px] right-[-2%] top-[21%] bg-transparent border -z-20"></border>
      </div>

      <button type="button" className="bg-[#b38859] px-40 py-4 text-white cursor-pointer text-[25px] hide1">BOOK NOW</button>

      <div className="flex gap-5 mt-10 text-[#b38859] text-[40px]">
        <a
          href="https://www.instagram.com/theclipperguru/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hide1 "
        >
          <AiOutlineInstagram />
        </a>
        <a
          href="https://www.instagram.com/theclipperguru/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hide1"
        >
          <BiLogoFacebook />
        </a>
      </div>
    </div>
  );
};

export default Main;
