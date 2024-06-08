import React from 'react'
import { recomandations } from '../constant/data'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';




const Testimonials = () => {
  return (
    <section className=' w-full p-3 mt-9 flex flex-col items-center justify-center'>
      <h5 className=' text-sm'>Grab To see</h5>
      <h2 className='text-2xl font-semibold text-blue-300'>Recomendations</h2>
      <div className=' w-full p-3 mt-9 flex items-center justify-center'>
      <Swiper
       grabCursor={true}
       effect={'creative'}
       creativeEffect={{
         prev: {
           shadow: true,
           translate: [0, 0, -400],
         },
         next: {
           translate: ['100%', 0, 0],
         },
       }}
       modules={[EffectCreative]}
      className='mySwiper md:max-w-[70%] '>
        {recomandations.map((recomandation, index) => {
          const Icon = recomandation.icon
          return (
            <SwiperSlide key={index} className={` flex flex-col items-center justify-center gap-2 p-3 border border-blue-100 rounded-xl ${index % 2 === 0 ? "bg-blue-950": " bg-blue-600"}`}>
              <div className=' p-2 border-2 border-blue-900 rounded-full bg-blue-200'><Icon className=' text-xl text-blue-500' /></div>
              <h6 className=' text-lg font-semibold text-blue-300'>{recomandation.name}</h6>
              <small className=' text-xs text-blue-400'>{recomandation.position}</small>
              <small className=' text-xs text-blue-400'>{recomandation.company}</small>
              <p className=' text-sm text-center'>{recomandation.description}</p>
              <small className=' text-xs text-blue-400'>{recomandation.contact}</small>
            </SwiperSlide>
          )
        }
        )}

      </Swiper>
      </div>
    </section>
  )
}

export default Testimonials


// swipper js