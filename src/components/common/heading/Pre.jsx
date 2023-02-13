import React from 'react'
import { Link } from 'react-router-dom'

const Pre = () => {
  return (
    <>
      <section className='bg-primary border-b border-fourth mx-6 mobile:m-0 desktop:mx-6'>
        <div className='flex flex-wrap justify-between items-center mx-auto px-4 mobile:px-2 mobile:text-xl mobile:m-0 tablet:px-6 tablet:text-3xl'>
            <Link to='/' className='flex items-center'><h1 className=' text-secondary mobile:text-xl tablet:text-3xl'>Design Agency</h1></Link>
            <div className='flex items-center'>
                <a href='tel:+07817382623' className='text-sm font-medium text-secondary p-5'><p>+078 173 826 23</p></a>
            </div>
        </div>
      </section>
    </>
  )
}

export default Pre
