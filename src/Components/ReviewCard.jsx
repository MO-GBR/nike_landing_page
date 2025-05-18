import React from 'react'
import { star } from '../../public/icons'
import { motion } from 'framer-motion'
motion

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex justify-center items-center flex-col max-lg:border-2 max-lg:border-slate-200 max-lg:shadow-lg max-lg:rounded-2xl max-lg:p-8'>
        <motion.img
            src={imgURL}
            width={24}
            alt='customer'
            className='rounded-full h-30 w-30 object-cover'
            initial={{scale: 1.5}}
            whileInView={{scale: 1}}
            transition={{duration: 1}}
        />
        <p className='mt-6 max-w-sm text-center text-slate-700'>{feedback}</p>
        <div className='mt-6 flex justify-center items-center gap-2.5'>
            <img
                src={star}
                width={24}
                height={24}
                alt='rating star'
                className='object-contain m-0'
            />
            <p className='fontMontserrat text-xl text-slate-700'>({rating})</p>
        </div>
        <h3 className='fontPalanquin mt-1 text-3xl text-center font-bold'>
            {customerName}
        </h3>
    </div>
  )
}

export default ReviewCard