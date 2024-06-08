import React from 'react'
import { IoHome } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { RiContactsBook3Fill } from "react-icons/ri";
import { useState } from 'react';

const Nav = () => {
  const [active, setActive] = useState("#")

  return (
    <div className='w-full fixed bottom-8 left-0 flex justify-center items-center z-50'>
    <nav className=' bg-blue-200/30 w-[50%] sm:w-[40%] md:w-[30%] flex flex-row items-center justify-center rounded-xl p-2 gap-2'>
      <a onClick={
        () => setActive("#")
      } href="#" className=' inline-block p-1 '><IoHome className={` text-blue-300 transition hover:text-blue-50 text-lg md:text-lg ${active === "#" ? " text-blue-50" : "text-blue-300"}`} /></a>
      <a onClick={
        () => setActive("#about")} className=' inline-block p-1 ' href="#about"><FaUserTie className={` text-blue-300 transition hover:text-blue-50 text-lg md:text-lg ${active === "#about" ? " text-blue-50" : "text-blue-300"}`} /></a>
      <a onClick={
        () => setActive("#experience")
      } className=' inline-block p-1 ' href="#experience"><FaBookOpen className={` text-blue-300 transition hover:text-blue-50 text-lg md:text-lg ${active === "#experience" ? " text-blue-50" : "text-blue-300"}`}/></a>
      <a onClick={
        () => setActive("#portfolio")
      
      } className=' inline-block p-1' href="#portfolio"><GrServices className={` text-blue-300 transition hover:text-blue-50 text-lg md:text-lg ${active === "#portfolio" ? " text-blue-50" : "text-blue-300"}`} /></a>
      <a onClick={
        () => setActive("#contact")
      
      } className=' inline-block p-1' href="#contact"><RiContactsBook3Fill className={` text-blue-300 transition hover:text-blue-50 text-lg md:text-lg ${active === "#contact" ? " text-blue-50" : "text-blue-300"}`} /></a>
    </nav>
    </div>
  )
}

export default Nav