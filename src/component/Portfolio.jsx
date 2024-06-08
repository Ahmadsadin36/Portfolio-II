import React from 'react'
import { projects } from '../constant/data'
import Button from './Button'

const Portfolio = () => {
  return (
    <section className=' w-full flex flex-col p-3 justify-center items-center mt-9' id='portfolio'> 
      <h5 className='text-sm w-full text-center'>This My Portfolio</h5>
      <h2 className='w-full text-center text-2xl font-semibold text-blue-300'>Projects</h2>
    <div className='w-full flex flex-row flex-wrap justify-center items-start gap-1'>
      {
        projects.map((project, index) => (
          <div key={index} className=' max-w-[80%] md:max-w-[30%] p-3'>
            <div className=' w-full h-full bg-blue-950 rounded-lg shadow-lg p-5 border border-blue-200 flex flex-col transition duration-300 hover:-translate-y-2  '>
              <img src={project.image} alt={project.title} className='w-full h-40 object-cover rounded-lg' />
              <h3 className=' text-blue-200 text-xl font-semibold my-2'>{project.title}</h3>
              <p className=' text-blue-300 text-sm'>{project.description}</p>
              <div className=' w-full flex flex-row items-center justify-start mt-6'>
                <Button title='View Project' classname= " text-sm transition duration-300 hover:bg-blue-200 hover:text-blue-950" hr={project.github} />
              </div>
            </div>
          </div>
        ))
      }
      </div>
    </section>
  )
}

export default Portfolio