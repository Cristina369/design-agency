import React from 'react'
import Btn from '../common/subcomp/Btn'
import Title from '../common/subcomp/Title'
import Image1 from "./../../images/image_1.jpg"
import Image2 from "./../../images/image_2.jpg"

const AboutDesc = () => {
  return (
    <>
      <section className='w-full bg-fourth pt-48 pb-48 pl-20 pr-20 flex flex-row justify-center mobile:flex-col mobile:py-10 mobile:p-0 desktop:flex-row desktop:pt-48 desktop:pb-48 desktop:pl-20 desktop:pr-20'>
        <div className='w-7/12 pl-36 pr-14 mobile:p-6 mobile:w-full desktop:pl-36 desktop:pr-14 desktop:w-7/12'>
            <Title subtitle={'WELCOME! WE ARE'} title={'ARCHITECTURE STUDIO'}/>
            <p className='w-10/12 pb-9 mobile:p-1 mobile:w-full desktop:w-10/12 desktop:pb-9'>Founded in 2000, Dsn Grid has become one of the best Digital Agency in ThemeForest. Blue money going forward, but deploy to production.
                The world needs innovators and problem solvers who turn challenges into greater opportunities. We have an insatiable curiosity about transformative .
                CALL US ANYTIME</p>
            <div className='mobile:disNone desktop:disActive'>
              <Btn title={'Call us'} link='tel:+07817382623'/>
            </div>
        </div>
        <div className='w-5/12 flex flex-row justify-center items-center mobile:flex-col mobile:w-full desktop:w-5/12 desktop:flex-row'>
            <img className='w-96 z-10 -mb-28 mobile:m-0 mobile:p-4 desktop:p-0 desktop:-mb-28' src={Image1} alt="Design Agency"/>
            <img className='w-96 -ml-32 mobile:disNone desktop:disActive' src={Image2} alt="Design Agency"/>
        </div>
      </section>
    </>
  )
}

export default AboutDesc
