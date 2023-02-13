import React from 'react'
import { experience } from '../../data'
import Title from '../common/subcomp/Title'

const Experience = () => {
  return (
    <>
      <section className='bg-fourth w-full p-16 flex flex-row-reverse mobile:flex-col mobile:p-4 desktop:p-16 desktop:flex-row-reverse'>
        <div className='w-6/12 p-20 mobile:w-full mobile:p-6 desktop:w-6/12 desktop:p-20'>
            <Title subtitle={'Design Agency'} title={'Our experince'}/>
            <p className='text-lg mobile:text-base desktop:text-lg'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta laborum assumenda neque in fugit similique ratione iusto, architecto eius aliquid, quas, cum itaque dolorem! Laborum similique fugit autem voluptatum sed!
            </p>
            <div className='text-secondary flex flex-row mt-4 mobile:disNone desktop:disActive'>
                <h1 className='text-8xl text-secondary font-extrabold'>12</h1>
                <h2 className='text-3xl font-extrabold pt-16 text-primary'>YEARS OF EXPERIENCE</h2>
            </div>
        </div>
        <div className='w-6/12 bg-primary py-24 px-10 mr-20 -mb-24 -mt-24 border border-gray-200 mobile:p-3 mobile:py-4 mobile:m-0 mobile:w-full desktop:py-24 desktop:px-10 desktop:mr-20 desktop:-mb-24 desktop:-mt-24 desktop:w-6/12'>
            <Title subtitle={'MILESTONES THAT WE PROUDLY'}/>
            <div className='px-10 mobile:px-4 desktop:px-10'>
                {experience.map((val, index) =>(
                    <div className='flex flex-row justify-center items-center my-4 mobile:flex-col desktop:flex-row'>
                        <div className='w-2/12 mr-8 mobile:mr-0 mobile:w-full desktop:mr-8 desktop:w-2/12'>
                            <h1 className='text-secondary border border-r-fourth border-t-0 border-l-0 border-b-0'>{val.number}</h1>
                        </div>
                        <div className='w-10/12 mobile:full desktop:10/12'>
                            <h2 className='text-xl font-bold mb-1'>{val.title}</h2>
                            <p>{val.desc}</p>
                        </div>
                    </div>
                ))   
                }
            </div>
        </div>
      </section>
    </>
  )
}

export default Experience
