import React from 'react'
import ahmad from '../assets/ahmad.jpg'
import Button from './Button'
import { littleCardsData } from '../constant/data'

const About = () => {
  return (
    <section className=' w-full mt-9 flex flex-col items-center justify-center p-3' id='about'>
      <div className=' flex-1 flex flex-col items-center justify-center w-full md:mb-9'>
        <h5 className=' text-sm'>Get To Know</h5>
        <h2 className=' text-2xl font-semibold text-blue-300'>About Me</h2>
      </div>
      <div className=' flex-auto w-full grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-3'>
       <div className=' flex justify-center items-center md:justify-start '>
       <div className=' flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 w-[55%] h-[55%]  md:w-2/3 md:h-2/3 '>
          <img className=' w-full h-full rounded-xl transition duration-300 rotate-12 hover:rotate-0 object-cover' src={ahmad} alt="" />
        </div>
       </div>
        <div className=' flex flex-col items-start justify-start md:items-start md:justify-center gap-2'>
        <div className=' grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-2'>
           {littleCardsData.map((card, index) => {
            const Icon = card.icon
            return (
                <article key={index} className=' bg-blue-950 border border-blue-50 flex items-center justify-start flex-col rounded-xl gap-1 p-2 transition duration-300 hover:bg-blue-100 hover:text-blue-950 hover:shadow-sm hover:shadow-blue-300 hover:border-blue-950'>
                <Icon className=' text-xl text-blue-300' />
                <h6>{card.title}</h6>
                <p className=' text-xs text-center'>{card.description}</p>
                </article>    
            )
           }
            )}
            </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt voluptate iusto fuga ab? Molestiae eligendi doloremque ratione amet accusantium similique, alias pariatur earum enim et! Harum repudiandae facilis cum porro!</p>
          <Button title= "Lets Talk" hr="#contact" classname= " hover:text-blue-500 hover:bg-blue-100 transition duration-300" />
        </div>
      </div>
    </section>
  )
}

export default About