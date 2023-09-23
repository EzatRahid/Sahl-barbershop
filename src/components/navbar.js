import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky'>
    <div className='flex justify-around items-center p-5 text-white bg-[#b38859] '>
      <h1 className='text-[35px] cursor-pointer'>SahlCutz</h1>
      <ul className='flex gap-10 cursor-pointer'>
        <li>Book now</li>
        <li>About me</li>
        <li>Contact</li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar
