import React from 'react'
import { contact } from '../constant/data'
import Button from './Button'
import { useRef } from 'react'
import emailjs, { send } from '@emailjs/browser';


const Contact = () => {
const form = useRef()

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_ot12ovc', 'template_4mp60hp', form.current, {
      publicKey: 'OVR1GkxwwxGWmQL0A',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  form.current.reset();
};



  return (
     <section className=' w-full p-3 mt-9 flex flex-col items-center justify-center' id='contact'>
      <h5 className=' text-sm'>Get in touch</h5>
      <h2 className=' text-2xl font-semibold text-blue-300 mb-6'>Contact me</h2>
      <div className=' w-full flex flex-col-reverse md:flex-row items-center justify-start gap-3'>
        <div className=' flex-1 md:max-w-[30%] flex flex-row flex-wrap items-center justify-center gap-3'>
          {
            contact.map((item, index) => {
              const Icon = item.icon
              return (
                <div className=' flex items-center justify-start flex-col gap-2 p-6 rounded-xl shadow-md shadow-black bg-blue-950 hover:bg-transparent transition duration-300 border border-blue-200' key={index}>
                  <Icon className=' text-3xl text-blue-100' />
                  <h4 className=' text-lg font-semibold text-blue-200'>{item.title}</h4>
                  <a className=' text-sm text-blue-300 capitalize hover:text-white' href={item.link}>send a message</a>
                </div>
              )
            })
          }
        
        </div>
        <form className=' w-full md:max-w-[70%] flex flex-col items-start justify-start gap-3 mb-6 md:mb-0 border border-blue-200 p-2 rounded-xl' onSubmit={sendEmail} ref={form}>
          <input className=' w-full bg-blue-200 p-3 text-blue-950 placeholder:text-blue-950 placeholder:text-xs rounded-xl outline-none placeholder:capitalize' type="text" name="name" placeholder='Your Name and Surname' id="" required />
          <input className=' w-full p-3 bg-blue-200 text-blue-950 placeholder:text-xs placeholder:text-blue-950 rounded-xl outline-none placeholder:capitalize' type="email" name='email' placeholder='your email' required />
          <input className=' w-full bg-blue-200 p-3 text-blue-950 placeholder:text-blue-950 placeholder:text-xs rounded-xl outline-none placeholder:capitalize' type="text" name="subject" placeholder='Your Subject' id="" required />
          <textarea className=' bg-blue-50 p-5 text-blue-950 rounded-lg w-full placeholder:text-blue-950 placeholder:text-xs resize-none placeholder:capitalize' name="message" id="" placeholder='Your Message' required></textarea>
          <button type='submit' onSubmit={sendEmail} className=' p-3 bg-blue-300 text-blue-950 rounded-xl capitalize'>send</button>

        </form>
      </div>
     </section>
  )
}

export default Contact


// emailjs 