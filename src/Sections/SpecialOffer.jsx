import React from 'react'
import { offer } from '../../public/images';
import { arrowRight } from '../../public/icons';
import Button from '../Components/Button';
import { motion } from "framer-motion"

const SpecialOffer = () => {
  return (
    <section className='max-container flex justify-center items-center gap-10'>
        <motion.div initial={{transform: "translateX(-300px)"}} whileInView={{transform: "translateX(0px)"}} className='flex-1'>
            <img
                src={offer}
                alt='Shoe Promotion'
                width={773}
                height={687}
                className='object-contain w-full'
            />
        </motion.div>
        <motion.div initial={{transform: "translateX(300px)"}} whileInView={{transform: "translateX(0px)"}} className='flex flex-1 flex-col border-2 border-slate-300 p-10 rounded-bl-4xl border-r-0 shadow-lg'>
            <h2 className='fontPalanquin font-bold text-4xl'>
                <span className='text-red-800'>Special</span> Offer
            </h2>
            <p className='mt-4 text-slate-600'>
               Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
            </p>
            <p className='mt-6 text-slate-600'>
               Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
            </p>
            <div className='mt-11 flex flex-wrap gap-4'>
                <Button
                    backgroundColor="bg-white"
                    borderColor="text-slate-100"
                    textColor="text-slate-600"
                    label="Learn More"
                />
            </div>
        </motion.div>
    </section>
  )
}

export default SpecialOffer