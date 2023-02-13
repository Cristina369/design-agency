import React from 'react'
import { contact } from '../../data'


const ContactDesc = () => {
  return (
    <>
      <section className='bg-primary w-full flex flex-col justify-center z-20'>
        {contact.map((val, index) => 
        <div className='flex flex-col p-4 justify-center items-start pl-4 -mt-6' key={index}>
            <div className='flex flex-row justify-center items-center'>
                <i className=''>{val.icon}</i>
                <h1 className='text-secondary font-bold text-xl'>{val.title}</h1>
            </div>
            <p className='text-secondary font-medium text-lg pl-11'><a href={val.link}>{val.desc}</a></p>
        </div>
        )}
      </section>
    </>
  )
}

export default ContactDesc
