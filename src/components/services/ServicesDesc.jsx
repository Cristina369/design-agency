import React, { useState } from "react"
import { services } from "../../data"
import Title from "../common/subcomp/Title"

const ServicesDesc = () => {
  const [click, setClick] = useState(false)

  const toggle = (index) => {
    if (click === index) {
      return setClick(null)
    }
    setClick(index)
  }

  return (
    <>
        <section className="bg-white flex flex-row justify-around p-20 mobile:flex-col mobile:p-5 desktop:flex-row desktop:p-20">
            <div className="w-6/12 pr-20 pt-10 text-end mobile:p-3 mobile:w-full desktop:pr-20 desktop:pt-10 desktop:w-6/12 ">
                <Title title={'SERVICES IN VARIOUS ARCHITECTURE FIELDS.'}/>
            </div>
          <div className="w-6/12 p-14 mobile:p-3 mobile:w-full desktop:p-14 desktop:w-6/12 ">
            {services.map((val, index) => (
              <div className="border border-b-gray-300 p-8 border-t-0 border-l-0 border-r-0 mobile:p-2 desktop:p-8" >
                <button className=" ease-linear duration-1000" onClick={() => toggle(index)} key={index}>
                  <h2>{val.title}
                    <span>{click === index ? <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>}</span>
                  </h2>
                </button>
                {click === index ? (
                  <div>
                    <p className="pt-8 mobile:pt-2 tablet:pt-4 desktop:pt-4">{val.desc}</p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>
    </>
  )
}

export default ServicesDesc