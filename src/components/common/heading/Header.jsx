import React from 'react'
import Pre from './Pre'
import { Link } from 'react-router-dom'
import Search from '../subcomp/Search'

const Header = () => {
  return (
    <>
    <Pre/>
    <section className='bg-primary text-secondary font-semibold'>
        <header>
            <nav className='flex items-center mobile:flex-col desktop:flex-row'>
                <div className='w-7/12 p-3 mobile:w-full tablet:w-7/12 '>
                    <ul className='flex flex-row items-center justify-center'>
                        <li className='nav-list'><Link to='/'>Home</Link></li>
                        <li className='nav-list'><Link to='/about'>About</Link></li>
                        <li className='nav-list'><Link to='/services'>Services</Link></li>
                        <li className='nav-list'><Link to='/portofolio'>Portofolio</Link></li>
                        <li className='nav-list'><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className='flex justify-center w-5/12 mobile:p-0 mobile:m-0 tablet:w-5/12 mobile:disNone desktop:disActive desktop:px-52'>
                    <Search/>
                </div>
            </nav>
        </header>
    </section>
    </>
  )
}

export default Header
