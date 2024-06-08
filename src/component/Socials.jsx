import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Socials = ({className}) => {
  return (
    <div className= {` ${className} flex flex-col items-center justify-center gap-2`}>
        <a href="https://www.linkedin.com/in/ahmadsadin33/">
            <FaLinkedinIn className="text-2xl text-blue-400 hover:text-blue-200 transition duration-300" />
        </a>
        <a href="https://github.com/Ahmadsadin36">
            <FaGithub className="text-2xl text-blue-400 hover:text-blue-200 transition duration-300" />
        </a>
    </div>
  )
}

export default Socials