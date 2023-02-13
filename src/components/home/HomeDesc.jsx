import React from 'react'

const HomeDesc = () => {
  return (
    <>
    <section>
      <section className='bg-primary w-full h-60 mobile:h-20 tablet:h-44 desktop:h-60'>
      </section>
      <section className='text-primary bg-fourth flex justify-center items-center h-[30rem]'>
        <div className="max-w-7xl home-background h-[35rem] -mt-72 p-32 flex flex-col justify-center items-center mobile:m-0 mobile:p-0 tablet:-mt-72 tablet:p-16 desktop:p-32">
            <h1 className='txt font-extrabold bg-transparent text-[80px] p-2 align-text-top opacity-100 mobile:text-2xl mobile:font-extrabold tablet:text-[50px] desktop:text-[80]'>MODERN CITY BUILDINGS</h1>
            <h3 className='txt font-semibold bg-transparent text-2xl px-44 pt-20 pb-10 opacity-100 text-center mobile:m-0 mobile:p-10 mobile:font-medium tablet:p-16 desktop:px-44 dexktop:font-semibold desktop:pt-20 desktop:pb-10'>We’ve taken care of all the digital boring details, so you can take care of your online business grow and clients satisfaction.</h3>
        </div>
      </section>
    </section>
    </>
  )
}

export default HomeDesc
