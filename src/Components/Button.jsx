import React from 'react'
import { motion } from "framer-motion"

const Button = ({label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth
}) => {
  return (
    <motion.button
       className={`flex justify-center items-center gap-2 px-7 py-4 border rounded-full cursor-pointer text-lg leading-none
       ${
          backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-red-400 text-white border-red-200"
       }
       `}
       whileHover={{scale: 1.1, backgroundColor: '#56c24a'}}
    >
       {label}
       {iconURL && (
        <img
            src={iconURL}
            alt='arrow'
            className='ml-2 rounded-full bg-white h-5 w-5'
        />
       )}
    </motion.button>
  )
}

export default Button