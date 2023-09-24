import React from 'react'
import sahl from '../sahl.png'

const About = () => {
  return (
    <div className='h-screen bg-[#1E1D1C] px-[150px] py-[30px] relative -z-50' id='about'>
        <div className='h-[95%] aboutBorder p-[50px] flex text-white gap-56 '>
            <div className="">
                <img src={sahl} className='h-[100%] w-[1250px] z-50 shadow-xl'/>
            </div>
            
            <div className="flex flex-col">
                <div className="mb-[50px]">
                <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Vitae quidem voluptatibus obcaecati autem voluptas, commodi ducimus nam magni quibusdam enim aperiam 
                    asperiores cumque quaerat, fugiat placeat repellat. Blanditiis, temporibus porro.</h2>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Harum magni architecto illo sit consequuntur accusamus autem quos, ex atque aliquam?</h2>
                </div>
                <div className="mb-[50px]">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam earum vero eius explicabo. Voluptate
                        s deserunt quam fugiat, cupiditate, repudiandae doloribus quis maiores quidem, necessitatibus aut sunt architecto facere? Ab, 
                        debitis odit placeat magnam ducimus in ipsa libero consequuntur at magni officia obcaecati velit rerum! Voluptatum doloremque 
                        natus cum labore.

                    </h2>
                </div>
                <div className="">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam earum vero eius explicabo. Voluptate
                        s deserunt quam fugiat, cupiditate, repudiandae doloribus quis maiores quidem, necessitatibus aut sunt architecto facere? Ab, 
                        debitis odit placeat magnam ducimus in ipsa libero consequuntur at magni officia obcaecati velit rerum! Voluptatum doloremque 
                        natus cum labore.

                    </h2>
                </div>
            </div>
            
        </div>
        <bg className="bg-[#b38859] absolute h-[77%] w-[550px] left-[12%] top-[13%] -z-10"></bg>
        <border className="bg-[#b38859] absolute h-[60%] w-[500px] left-[9.5%] top-[7%] -z-20"></border>
        <border className="bg-[#b38859] absolute h-[20%] w-[700px] left-[9.5%] top-[69%] bg-transparent border -z-20"></border>
    </div>
  )
}

export default About
