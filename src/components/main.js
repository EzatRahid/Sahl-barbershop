import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'


const Main = () => {
  return (
    <div className='height1 bg-[#1E1D1C] flex flex-col items-center justify-center relative -z-30'>
        <div className=" text-white mb-20">
            <p className='text-[25px]'>YOUR OWN STYLE </p>
            <p className='text-[50px]'>
                <span className='bookborder'>BOOK </span>
                 AN APPOINTMENT WITH THE <span className='z-10'>CLIPGURU</span></p>
            <bg className = 'bg-[#b38859] absolute h-20 w-[250px] right-[20.5%] top-[37.5%] -z-10'></bg>
            <border className = 'bg-[#b38859] absolute h-20 w-[250px] right-[19.5%] top-[35%] bg-transparent border -z-20'></border>
          
        </div>
        <div className="text-white ">
            <button className='bg-[#b38859] px-20 py-2 '>BOOK NOW</button>
        </div>
        <div className=" flex gap-2 mt-10 text-[#b38859] text-[30px]">
            <AiOutlineInstagram/>
        </div>
    </div>
  )
}

export default Main
