import React from 'react'
import logo from '../e.png'
import { useEffect } from 'react'

const Navbar = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
        if (entry.isIntersecting) {
          observer.unobserve(entry.target); // Corrected this line
        }
      });
    });
  
  
  
    const hideElements = document.querySelectorAll('.hide')
    hideElements.forEach((element) =>{
      observer.observe(element)
    })


    return () => {
      // Cleanup when the component unmounts
      observer.disconnect();
    };
  }, [])

  return (
    <div className='sticky top-0'>
    <div className='flex justify-around items-center p-5 text-white bg-[#b38859] '>
      <h1 className='text-[35px] cursor-pointer '><img src={logo} className='w-[100px] hide' /></h1>
      <ul className='flex gap-10 cursor-pointer uppercase hide'>
        <li><a href="#main">Book now</a></li>
        <li><a href="#about">About me</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar
