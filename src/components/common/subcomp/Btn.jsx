import React from 'react'
import {MdArrowForwardIos} from 'react-icons/md'

const Btn = ({title, link}) => {
  // const cat= 'tel:' + subtitle;
  return (
    <>
      <section>
        <button type='submit' value="Send">
          <div className='group w-fit flex flex-row justify-center items-center m-16 pr-6 py-0.5 rounded-[30px] border border-fourth bg-primary mobile:m-5 desktop:m-16'>
              <div className='bg-third rounded-full p-2 w-fit mr-4 group-hover:bg-secondary mobile:p-1 tablet:p-2'><i><MdArrowForwardIos size={15} color={'white'}/></i></div>
              <a href={link}>
                <h1 className='text-secondary p-1 text-2xl group-hover:font-extrabold mobile:text-xl tablet:text-2xl'>{title}</h1>
              </a>
            </div>
        </button>
      </section>
    </>
  )
}

export default Btn
