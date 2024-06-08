import React from 'react'

const Button = ({classname, title, hr}) => {
  return (
    <button className= {` py-2 px-3 flex items-center justify-center bg-blue-500 text-white border border-blue-200 rounded-lg ${classname}`}>
        <a href={hr} className=' w-full h-full text-center'>{title}</a>
    </button>
  )
}

export default Button