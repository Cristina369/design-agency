import React from 'react'
import Image from './../../images/image_1.jpg'
import Image1 from './../../images/image_3.jpg'

const OurVision = () => {
  return (
    <>
        <section className='flex flex-row-reverse p-20 mobile:flex-col mobile:p-4 desktop:flex-row-reverse desktop:p-20'>
            <div className='w-4/12 pr-10 mobile:w-full mobile:p-4 desktop:w-4/12 desktop:pr-10'>
                <img className='h-fit mobile:h-[300px] mobile:content-end mobile:ml-auto desktop:m-0 desktop:h-fit' src={Image1} alt='Design Agency'/>
            </div>
            <div className='w-8/12 pl-28 pr-16 pt-24 mobile:w-full mobile:p-4 desktop:w-8/12 desktop:pr-16 desktop:pl-28 desktop:pt-24'>
                <h1 className=' relative  z-20 text-secondary font-extrabold text-6xl text-end p-16 ml-40 w-full bg-primary mobile:p-2 mobile:m-0 mobile:text-2xl'>PROJECTS SINCE 2005</h1>
               <p className=' text-secondary text-lg font-medium p-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi esse itaque doloremque. Obcaecati iusto porro eius cupiditate magnam ea fuga, architecto non praesentium, soluta laboriosam temporibus reiciendis, adipisci sed?</p>
               <p className=' text-secondary text-lg font-medium pb-28 p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi esse itaque doloremque. Obcaecati iusto porro eius cupiditate magnam ea fuga, architecto non praesentium, soluta laboriosam temporibus reiciendis, adipisci sed?</p> 
               <div className='flex flex-row-reverse mobile:flex-col-reverse desktop:flex-row-reverse'>
                    <div className='flex flex-col w-7/12 pl-10 mobile:w-full desktop:w-7/12'>
                        <h2 className='text-secondary font-extrabold text-3xl pb-10 mobile:pt-4 desktop:pt-0'>Our vision</h2>
                        <p className=' text-secondary text-lg font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quis maxime voluptas voluptatem exercitationem similique mollitia sunt error perspiciatis odit sint, est totam reiciendis in ad quisquam cum accusantium aperiam.</p>
                    </div>
                    <div className='w-5/12 mobile:w-full desktop:w-5/12'>
                        <img className='w-96' src={Image} alt='Design Agency'/>
                    </div>
                </div> 
            </div>
        </section>
    </>
  )
}

export default OurVision