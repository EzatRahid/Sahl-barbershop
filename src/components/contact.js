import React from 'react'

const Contact = () => {
  return (
    <div className='h-[100vh] bg-[#1E1D1C] z-50 relative' id='contact'>
      <h1 className='text-white text-[40px] text-center'>Contact</h1>
        <div className="p-[100px] flex items-center justify-around">
            <div className="">
                <h2 className="mb-7 text-[30px] text-white"><span className='text-[#b38859] text-[35px] mr-4 '>01/</span>PHONE NUMBER</h2>
                <h2 className="mb-7 text-[30px] text-white"><span className='text-[#b38859] text-[35px] mr-4 b '>02/</span>
                <span className='bookborder'>EMAIL</span></h2>
                <h2 className="mb-7 text-[30px] text-white"><span className='text-[#b38859] text-[35px] mr-4 '>03/</span>@CutsbyAsuq</h2>
       
            </div>
      <form className="flex flex-col  items-center justify-center gap-5">
        <input type="email" placeholder='your email here...' id="" className='w-[750px] px-2 py-2'/>
        <textarea placeholder='your message here...' id="" cols="10" rows="10" className='w-[750px] px-2 pt-2'></textarea>
        <button className='text-white text-[25px] bg-[#b38859] w-[100%] py-2'>SEND</button>
      </form>





        </div>
      <border className="bg-[#b38859] absolute h-[45px] w-[150px] right-[45.5%] top-[1%] -z-20"></border>
      <border className="bg-[#b38859] absolute h-[45px] w-[150px] left-[20.5%] top-[25%] -z-20"></border>
      <border className="bg-[#b38859] absolute h-[45px] w-[150px] left-[20.5%] top-[25%] -z-20"></border>
      <border className="bg-[#b38859] absolute h-[45px] w-[150px] left-[20.5%] top-[25%] -z-20"></border>
  
      
    </div>
  )
}

export default Contact
