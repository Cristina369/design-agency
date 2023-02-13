import React from 'react'

const Title = ({title, subtitle}) => {
  return (
    <>
    <section>
        <div className='p-2 max-w-full mobile:w-full desktop:max-w-full'>
            <h2 className='text-3xl font-medium text-secondary mobile:text-lg tablet:text-3xl'>{subtitle}</h2>
            <h1 className='text-7xl font-extrabold text-secondary pl-0 mobile:text-base tablet:text-7xl'>{title}</h1>
        </div>
    </section>
    </>
  )
}

export default Title
