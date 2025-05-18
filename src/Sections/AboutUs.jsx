import React from 'react'
import {shoe8} from '../../public/images';
import Button from '../Components/Button';

const AboutUs = () => {
  return (
    <section id='about-us' className='max-container flex justify-between items-center gap-10 w-full p-10 bgAbout max-lg:flex-col'>
        <div className='flex-1 flex flex-col'>
            <h2 className='fontPalanquin text-4xl capitalize font-bold max-lg:p-6'>
                We Provide You
                <span className='text-red-800'> Super </span>
                <span className='text-red-800'>Quality </span> Shoes
            </h2>
            <p className='mt-4 text-slate-500 text-lg max-lg:p-6'>
               Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience<br />Providing you with unmatched quality, innovation, and a touch of elegance.
            </p>
            <div className='border-2 border-slate-100 m-4 p-4 w-fit rounded-2xl shadow-lg bg-white max-lg:w-xs'>
                <p className='mt-6 text-slate-600 border-2 border-slate-100 shadow m-4 p-4 w-fit rounded-2xl'>Our dedication to detail and excellence ensures your satisfaction</p>
                <div className='mt-11'>
                    <Button label="View Details" />
                </div>
            </div>
        </div>
        <div className='flex-1 flex justify-center items-center'>
            <img
                src={shoe8}
                alt='product detail'
                width={570}
                height={522}
                className='object-contain'
            />
        </div>
    </section>
  )
}

export default AboutUs