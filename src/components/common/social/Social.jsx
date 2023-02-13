import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import {FiFacebook} from 'react-icons/fi'
import {AiFillLinkedin} from 'react-icons/ai'



const Social = () => {
  return (
    <>
      <div className='w-full'>
        <ul className='z-10 p-2 h-80 flex justify-center flex-row items-center gap-3 mobile:h-auto mobile:m-3 desktop:h-80 desktop:m-0'>
            <li className='list'><i><BsInstagram size={20}/></i></li>
            <li className='list'><i><BsTwitter size={20}/></i></li>
            <li className='list'><i><FiFacebook size={20}/></i></li>
            <li className='list'><i><AiFillLinkedin size={20}/></i></li>
        </ul>
      </div>
    </>
  )
}

export default Social
