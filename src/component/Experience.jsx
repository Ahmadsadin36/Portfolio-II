import React from 'react'
import { database, languages, softSkills, webSkills } from '../constant/data'
import { BsFillPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section className=' w-full flex flex-col items-center justify-center mt-9 p-3 gap-3' id='experience'>
    <div className=' w-full'>
    <h5 className='text-sm w-full text-center'>What skills do I possess?</h5>
    <h2 className=' w-full text-center text-2xl font-semibold text-blue-300'>Skills</h2>
    </div> 
    <div className=' w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 gap-2'>
      <div className='flex flex-col items-center justify-start gap-3 bg-blue-950 rounded-xl p-3 border border-blue-300 hover:bg-transparent  transition duration-300'>
        <h2 className=' text-blue-200'>Frontend Development</h2>
        <div className=' flex flex-row flex-wrap gap-3 justify-center items-start'>
          {
            webSkills.map((skill, index) => {
              const { title, level } = skill
              return (
                <div key={index} className=' w-[80px] flex flex-row items-start justify-start gap-2'>
                  <BsFillPatchCheckFill className=' w-[16px] text-xl text-blue-200' />
                  <div className=' w-[56px] flex-col flex justify-start items-start'>
                  <h3 className=' text-sm text-blue-50 '>{title}</h3>
                  <small className=' text-xs text-blue-300'>{level}</small>
                  </div>
                </div>
              )
            })

          }
        </div>
      </div>
      <div className=' w-full flex flex-col items-center justify-start gap-3 bg-blue-950 rounded-xl p-3 border border-blue-300 hover:bg-transparent  transition duration-300'>
        <h2 className=' text-blue-200 w-full text-center'>Backend Development</h2>
        <div className=' w-full flex flex-row flex-wrap gap-3 items-star justify-center '>
          {
            database.map((skill, index) => {
              const { title, level } = skill
              return (
                <div key={index} className=' w-[80px] flex flex-row items-start justify-start gap-2'>
                  <BsFillPatchCheckFill className=' w-[16px] text-xl text-blue-200' />
                  <div className=' w-[56px] flex-col flex justify-start items-start'>
                  <h3 className=' text-sm text-blue-50 '>{title}</h3>
                  <small className=' text-xs text-blue-300'>{level}</small>
                  </div>
                </div>
              )
            
          }
          )
          }
        </div>
        <div className=' w-full h-[2px] bg-white'></div>
        <h2 className=' w-full text-center text-blue-200'>Soft Skills</h2>
        <div className=' flex flex-row flex-wrap gap-3 justify-center items-start'>
          {
            softSkills.map((skill, index) => {
              const { title, level } = skill
              return (
                <div key={index} className=' w-[80px] flex flex-row items-start justify-start gap-2'>
                  <BsFillPatchCheckFill className=' w-[16px] text-xl text-blue-200' />
                  <div className=' w-[56px] flex-col flex justify-start items-start'>
                  <h3 className=' text-sm text-blue-50 '>{title}</h3>
                  <small className=' text-xs text-blue-300'>{level}</small>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className=' w-full flex flex-col items-center justify-start bg-blue-950 rounded-xl border border-blue-300 p-3 gap-3 hover:bg-transparent  transition duration-300'>
        <h2 className=' w-full text-center text-blue-200'>Language Skills</h2>
        <div className=' flex items-start justify-center flex-row flex-wrap gap-3 w-full'>
          {
            languages.map((skill, index) => {
              const { title, level } = skill
              return (
                <div key={index} className=' flex flex-row items-start justify-start gap-2'>
                  <BsFillPatchCheckFill className='text-xl text-blue-200' />
                  <div className='flex-col flex justify-start items-start'>
                  <h3 className=' text-sm text-blue-50 '>{title}</h3>
                  <small className=' text-xs text-blue-300'>{level}</small>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>

    </section>
  )
}

export default Experience