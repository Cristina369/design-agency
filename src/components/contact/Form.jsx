import React from 'react'
import Btn from '../common/subcomp/Btn'

const Form = () => {
  return (
    <>
        <form>
        <div className="flex flex-row text-secondary">
            <div className="relative w-6/12 m-2">
                <input type="text" name="user_fname" value={name} onChange={handleChangeName} id="first_name" className="block py-2 px-0 w-full text-sm text-secondary bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="First name" required />
                <label for="first_name" className="peer-focus:font-medium absolute text-sm text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
            </div>
            <div className="relative w-6/12 m-2">
                <input type="text" name="user_lname" value={lname} onChange={handleChangeLName} id="last_name" className="block py-2 px-0 w-full text-sm text-secondary bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Last name " required />
                <label for="last_name" className="peer-focus:font-medium absolute text-sm text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
            </div>
        </div>
        <div className="relative m-2">
            <input type="email" name="user_email" value={email} onChange={handleChangeEmail} id="email" className="block py-2 px-0 w-full text-sm text-secondary bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Email address " required />
            <label for="email" className="peer-focus:font-medium absolute text-sm text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        <div>
            <div className="relative m-2">
                <input type="text" name="message" value={message} onChange={handleChangeMessage} id="message" className="block py-2 px-0 w-full h-20 text-sm text-secondary bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Message " required />
                <label for="message" className="peer-focus:font-medium absolute text-sm text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
            </div>
        </div>
        <div className='flex justify-end'>
            <Btn title={"Submit"}/>
        </div>
        </form>
    </>
  )
}

export default Form
