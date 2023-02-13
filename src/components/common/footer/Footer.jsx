import React from 'react'
import { Link } from 'react-router-dom'
import Social from '../social/Social'

const Footer = () => {
  return (
        <> 
        <section className='bg-fourth text-secondary'>
            <div className='flex flex-col justify-center items-center pt-16'>
                <h1 className='text-secondary text-4xl text-center p-14 mobile:p-4 mobile:text-2xl desktop:p-14 desktop:text-4xl'>
                    LET'S BUILD SOMETHING AMAZING TOGETHER
                </h1>
            </div>
            <div className='flex flex-row justify-around items-start px-24 border-t border-secondary pt-16 mobile:flex-col-reverse mobile:items-center mobile:pl-6 mobile:pr-6 desktop:items-start desktop:flex-row desktop:px-24'>
                <div className='flex justify-center flex-col mobile:items-center mobile:w-initial'>
                    <Link to='/' ><h1 className='text-secondary font-bold -mb-24 p-0 mobile:text-2xl mobile:pt-4 mobile:m-0 desktop:-mb-24 tablet:text-5xl desktop:pt-2'>Design Agency</h1></Link>
                    <Social/>
                </div>
                <div className='mobile:disNone desktop:disActive'>
                    <h1 className='text-3xl font-extrabold p-0 mb-10 text-secondary'>Working hours</h1>
                    <ul className='font-bold'>
                        <li className='pb-1'><span className='font-bold'>Monday: </span>08:00 - 17:00</li>
                        <li className='pb-1'><span className='font-bold'>Tuesday: </span>08:00 - 17:00</li>
                        <li className='pb-1'><span className='font-bold'>Wednesday: </span>08:00 - 17:00</li>
                        <li className='pb-1'><span className='font-bold'>Thursday: </span>08:00 - 17:00</li>
                        <li className='pb-1'><span className='font-bold'>Friday: </span>08:00 - 16:00</li>
                    </ul>
                </div>
                <div className='mobile:flex mobile:flex-col mobile:items-center'>
                    <h1 className='text-3xl font-extrabold p-0 mb-10 text-secondary mobile:m-0 mobile:pb-4 desktop:mb-10 desktop:pb-0'>Contact</h1>
                    <ul className='mobile:flex mobile:flex-col mobile:items-center desktop:inline'>
                        <li className='pb-1'><Link to='/'><span className='font-bold'>Phone: </span>+078 173 826 23</Link></li>
                        <li className='pb-1'><Link to='/about'><span className='font-bold'>Phone: </span>+078 001 826 53</Link></li>
                        <li className='pb-1'><Link to='/services'><span className='font-bold'>Email: </span>design.agency@gmail.com</Link></li>
                        <li className='pb-1'><Link to='/portofolio'><span className='font-bold'>Office: </span>Panama City, 3009 Drainer Avenue</Link></li>
                    </ul>
                </div>
            </div>
        </section>
        <section>
            <div className='bg-primary w-full px-20 py-4 mobile:p-2 tablet:px-20 tablet:py-4'>
                <p className='text-secondary text-center text-base mobile:text-sm tablet:text-base'>
                Copyright ©2022 | This template is made by Curzac Cristina
                </p>
            </div>
        </section>
        </>
  )
}

export default Footer