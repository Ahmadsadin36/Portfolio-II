import React from 'react'
import Button from './Button'
import CV from '../assets/CV.pdf'
import Socials from './Socials'
import ahmad from '../assets/ahmad.jpg'
import { useState } from 'react'


const Header = () => {

  const [marginLeft, setMarginLeft] = useState(0);

  const handleMouseMove = (event) => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - left;
    const newMarginLeft = ((mouseX / width) - 0.5) * 100; // Calculate margin offset (-50% to 50%)
    setMarginLeft(newMarginLeft);
  };





  return (
    <header className=' w-full flex flex-col items-center justify-center p-3'>
      <h5 className=' text-xs text-white'>Hello im </h5>
      <h2 className=' text-2xl text-white'>Ahmad Sadin</h2>
      <h5 className=' text-sm text-blue-300'>Frontend Developer</h5>
      <div className=' w-full flex flex-row items-center justify-center mt-3 gap-2'>
        <Button hr={CV} title= "Download CV" classname={` bg-transparent text-blue-300 border border-blue-300 transition duration-300 hover:bg-blue-200 hover:text-blue-900`} />  
        <Button hr= "#contact" title= "Contact me" classname={` transition duration-300 hover:bg-blue-200 hover:text-blue-900`} />
      </div>
      <div className=' flex flex-row justify-between items-center w-full mt-8'>
        <div className=' w-[10%] flex flex-col items-center justify-start'>
          <Socials />
        </div>
        <div  onMouseMove={handleMouseMove} style={{ overflow: 'hidden' }} className=' w-[80%] flex items-center justify-center '>
        <img  style={{ marginLeft: `${marginLeft}%`, transition: 'margin-left 0.1s', }} className=' w-36 h-36 md:w-40 md:h-40 rounded-full border border-blue-200 shadow-sm shadow-blue-200 object-cover' src={ahmad} alt="" />
        </div>
        <div className=' w-[10%] flex items-center justify-end'>
          <a href='#footer' className=' rotate-90 text-center text-sm md:text-lg text-blue-300'>slide down</a>
        </div>
      </div>

    </header>
  )
}

export default Header