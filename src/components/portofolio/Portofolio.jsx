import React from 'react'
import { portofolio } from '../../data'

const Portofolio = () => {
  return (
     <>
      <section className='my-20 mobile:my-10 desktop:my-20'>
        {portofolio.map((val, index, attribute) =>(
          index % 2 ?(
            <div className='bg-primary flex flex-row-reverse items-center py-10 px-48 mobile:m-4 mobile:border-2 mobile:border-fourth mobile:flex-col mobile:p-3 desktop:py-10 desktop:px-48 desktop:m-0 desktop:border-0 desktop:flex-row-reverse' key={index}>
                <div className='w-6/12 p-10 border-2 border-l-black border-r-0 border-y-0 m-4 flex justify-center mobile:m-0 mobile:w-full mobile:p-2 mobile:border-0 desktop:m-4 desktop:w-6/12 desktop:p-10 desktop:border-2 desktop:border-l-black desktop:border-r-0 desktop:border-y-0'>
                    <img className='h-[600px] mobile:h-[400px] desktop:h-[600px]' src={val.image} alt="Design Agency"/>
                </div>
                <div className='w-6/12 p-16 border-2 border-r-black mobile:w-full mobile:p-2 mobile:border-0 desktop:w-6/12 desktop:p-16 desktop:border-2 desktop:border-r-black'>
                    <h1 className=' text-secondary font-semibold text-5xl tablet:text-center desktop:text-start'>{val.title}</h1>
                    <p className=' text-gray-500 font-medium text-1xl'>{val.desc}</p>
                </div>
            </div>):(
               <div className='bg-primary flex flex-row items-center py-10 px-48 mobile:m-4 mobile:border-2 mobile:border-fourth mobile:flex-col mobile:p-3 desktop:py-10 desktop:px-48 desktop:m-0 desktop:border-0 desktop:flex-row' key={index}>
                <div className='w-6/12 p-12 border-2 border-r-black border-l-0 border-y-0 m-4 flex justify-center mobile:m-0 mobile:w-full mobile:p-2 mobile:border-0 desktop:m-4 desktop:w-6/12 desktop:p-10 desktop:border-2 desktop:border-r-black desktop:border-l-0 desktop:border-y-0'>
                    <img className='h-[600px] mobile:h-[400px] desktop:h-[600px]' src={val.image} alt="Design Agency"/>
                </div>
                <div className='w-6/12 p-16 border-2 border-l-black mobile:w-full mobile:p-2 mobile:border-0 desktop:w-6/12 desktop:p-16 desktop:border-2 desktop:border-l-black'>
                    <h1 className=' text-secondary font-semibold text-5xl tablet:text-center desktop:text-start'>{val.title}</h1>
                    <p className=' text-gray-500 font-medium text-1xl'>{val.desc}</p>
                </div>
            </div>
            )
        ))
        }
      </section>
    </>
  )
}

export default Portofolio
