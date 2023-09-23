import React from 'react'

const Main = () => {
  return (
    <div className='height1 bg-[#1E1D1C] flex flex-col items-center justify-center relative -z-30'>
        <div className=" text-white mb-20">
            <p className='text-[25px]'>YOUR OWN STYLE </p>
            <p className='text-[50px]'>
                <span className='bookborder'>BOOK </span>
                 AN APPOINTMENT WITH THE <span className='z-10'>CLIPGURU</span></p>
            <bg className = 'bg-[#b38859] absolute h-20 w-[250px] right-[21.5%] top-[42%] -z-10'></bg>
            <border className = 'bg-[#b38859] absolute h-20 w-[250px] right-[20.5%] top-[38%] bg-transparent border -z-20'></border>
          
        </div>
        <div className="text-white ">
            <button className='bg-[#b38859] px-20 py-2 '>BOOK NOW</button>
        </div>
    </div>
  )
}

export default Main
