import React from 'react'
import logo from '../e.png'


const Navbar = () => {
  return (
    <div className='sticky'>
    <div className='flex justify-around items-center p-5 text-white bg-[#b38859] '>
      <h1 className='text-[35px] cursor-pointer '><img src={logo} className='w-[100px]' /></h1>
      <ul className='flex gap-10 cursor-pointer uppercase'>
        <li><a href="#main">Book now</a></li>
        <li><a href="#about">About me</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar
