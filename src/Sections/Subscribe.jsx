import React from 'react'
import Button from '../Components/Button'

const Subscribe = () => {
  return (
    <section id='contact-us' className='flex justify-between items-center gap-10 border-2 border-slate-200 rounded-xl p-10 m-12 shadow-xl bgAbout max-lg:flex-col'>
        <h3 className='fontPalanquin text-4xl leading-16 font-bold max-lg:text-xl max-lg:leading-8'>
           Sign Up for
           <span className='text-red-800'> Updates </span>& Newsletter
        </h3>
        <div className='flex items-center bg-white w-[60%] pl-8 p-8 gap-5 rounded-full max-lg:w-xs max-lg:border-2 max-lg:border-red-400 max-lg:p-0 max-lg:pl-2'>
            <input
                type='text'
                placeholder='youremail@email.com'
                className='text-base w-[70%] p-2 rounded-3xl leading-normal text-slate-700 pl-5 outline-none border border-slate-300'
            />
            <div className='flex items-center'>
                <Button fullWidth label="Sign Up" />
            </div>
        </div>
    </section>
  )
}

export default Subscribe