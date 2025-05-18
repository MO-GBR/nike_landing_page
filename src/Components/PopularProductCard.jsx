import React from 'react'
import {star} from "../../public/icons";
import { motion } from "framer-motion"

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <motion.div
      whileHover={{scale: 1.1}} 
      className='flex flex-1 flex-col w-full m-5 border-2 border-slate-50 rounded-2xl p-4 items-center shadow-2xl cursor-pointer'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
        <img className='w-[282px] h-[282px]' src={imgURL} alt={name} />
        <div className='mt-8 flex justify-start gap-2.5'>
            <img src={star} alt='rating icon' width={24} height={24} />
            <p className='fontMontserrat text-xl leading-normal text-slate-700'>
                (4.5)
            </p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold fontPalanquin'>
            {name}
        </h3>
        <p className='mt-2 font-semibold text-red-800 leading-normal text-2xl fontMontserrat'>
            {price}
        </p>
    </motion.div>
  )
}

export default PopularProductCard