import React from 'react'
import { motion } from "framer-motion"

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <motion.div whileHover={{rotate: "360deg"}} transition={{duration: 1}} className='flex-1 w-full rounded-2xl px-10 border-2 border-slate-100 m-10 py-16 shadow-xl cursor-pointer'>
        <div className='flex justify-center items-center bg-red-300 rounded-full w-11 h-11'>
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className='fontPalanquin mt-5 leading-normal font-bold text-3xl'>
            {label}
        </h3>
        <p className='mt-3 break-words text-lg leading-normal text-slate-700 fontMontserrat'>
            {subtext}
        </p>
    </motion.div>
  )
}

export default ServiceCard