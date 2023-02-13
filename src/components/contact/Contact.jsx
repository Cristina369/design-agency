import React from 'react'
import Title from '../common/subcomp/Title'
import ContactDesc from './ContactDesc'
import Form from './Form'

const Contact = () => {
  return (
    <>
      <section className='contact-background bg-fourth px-28 py-32 mobile:p-3 desktop:px-28 py32'>
        <div className=' px-44 py-12 mobile:px-2 mobile:py-2 desktop:px-44 desktop:py-12'>
            <Title title={'LOOK AROUND YOU EVERYTHING IS CHANGING.'} subtitle={'Design Agency'}/>
            <p className='text-primary font-medium text-xl mobile:text-base desktop:text-xl'>What if the time has come for you to change? Starting a collaboration is easy! Order a free consultation or call back. We are always in touch and happy to cooperate with you</p>
        </div>
      </section>
      <section className='bg-fourth pr-52 pl-24 flex flex-row mobile:flex-col mobile:p-3 desktop:flex-row'>
        <div className='w-7/12 mx-28 my-10 mobile:w-full mobile:m-0 mobile:p-3 desktop:w-7/12 desktop:mx-28 desktop:my10'>
            <h1 className='text-secondary text-center mb-20'>CONTACT US</h1>
            <Form/>
        </div>
        <div className='w-5/12 bg-primary py-28 -my-8 border-2 border-fourth flex justify-center z-10 mobile:w-full mobile:m-0 mobile:p-2 desktop:w-5/12 desktop:-my-8 desktop:border-2'>
            <ContactDesc/>
        </div>
      </section>
      <section>
        <div className='w-full h-full'>
            <iframe className='w-full h-72 z-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110341.28169312171!2d-85.67344685987558!3d30.20383629944428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889381562ac66341%3A0xbf585ed52c4701f3!2sPanama%20City%2C%20FL%2C%20USA!5e0!3m2!1sen!2sro!4v1675631070802!5m2!1sen!2sro" title='Address'></iframe>
        </div>
      </section>
    </>
  )
}

export default Contact
