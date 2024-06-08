import React from 'react'
import Socials from './Socials'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  // get current year and month
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  // put all one variable
  const currentDate = `${year}/${month}/${day}`;

  return (
    <footer className=' w-full py-20 px-3 mt-9 flex flex-col-reverse sm:flex-row flex-wrap items-center justify-start bg-blue-950 gap-2 rounded-t-3xl' id='footer'>
      <div className=' flex-1 flex flex-col items-center justify-center'>
        <p className=' text-blue-200 text-center'>&copy; {currentDate} | All rights reserved.</p>
        <small className=' text-blue-300 text-xs text-center'>Developed by Ahmad sadin</small>
      </div>
      <ul className=' flex-1 flex flex-row flex-wrap items-center justify-center gap-2 text-blue-200'>
        <li className=' hover:text-white capitalize'><a href='#'>Home</a></li>
        <li className='hover:text-white capitalize'><a href='#about'>About</a></li>
        <li className='hover:text-white capitalize'><a href='#experience'>experience</a></li>
        <li className='hover:text-white capitalize'><a href='#portfolio'>Projects</a></li>
        <li className='hover:text-white capitalize'><a href='#contact'>Contact</a></li>
      </ul>
      <div className=' flex-1 flex items-center justify-center gap-5'>
      <a href="https://www.linkedin.com/in/ahmadsadin33/">
            <FaLinkedinIn className=" text-4xl text-blue-400 hover:text-blue-200 transition duration-300" />
        </a>
        <a href="https://github.com/Ahmadsadin36">
            <FaGithub className="text-4xl text-blue-400 hover:text-blue-200 transition duration-300" />
        </a>
      </div>
      
    </footer>
  )
}

export default Footer
