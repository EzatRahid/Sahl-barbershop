import React from 'react'
import sahl from '../sahl.png'

const About = () => {
  return (
    <div className='h-screen bg-[#1E1D1C] px-[150px] py-[30px] relative  flex flex-col items-center gap-20 z-50' id='about'>
        <h1 className='text-white text-[40px] font-bold'><span className='bookborder'>ABOUT</span> THE GOAT</h1>

        <div className="flex gap-10">

        <div className="aboutBorder h-[55%] w-[700px]">
           <img src={sahl} className='h-[100%] w-[100%]' />
        </div>
        <div className="aboutBorder h-[55%] w-[700px] text-white p-5 text-[20px]">
            <h2>
                <span className='border-b-2 border-[#b38859]'>Sahl Quraishi</span> AKA the ClipperGuru 

            </h2>
        </div>
        </div>
            
        
        <bg className="bg-[#b38859] absolute h-[73%] w-[650px] left-[10.8%] top-[20%] -z-10"></bg>
        <border className="bg-[#b38859] absolute h-[50px] w-[150px] left-[52%] top-[4%] -z-20"></border>
        <border className="bg-[#b38859] absolute h-[25px] w-[100px] right-[30%] top-[21%] -z-20"></border>
        <border className="bg-[#b38859] absolute h-[30%] w-[500px] right-[6%] top-[68%] bg-transparent border -z-20"></border>
    </div>
  )
}

export default About
