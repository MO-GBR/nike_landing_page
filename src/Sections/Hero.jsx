import React, {useState} from 'react';
import {bigShoe1} from "../../public/images";
import {arrowRight} from "../../public/icons"
import Button from '../Components/Button';
import { shoes, statistics } from '../Constants/index';
import ShoeCard from '../Components/ShoeCard';
import { motion } from "framer-motion"

const Hero = () => {
    const [ bigShoeImg, setBigShoeImg ] = useState(bigShoe1);
  return (
    <section id='home' className='w-full flex flex-row justify-center gap-10 max-container p-10 max-lg:flex-col'>
        <div className=' relative flex flex-col justify-center items-start pt-28 w-xl max-lg:w-lg max-lg:pt-6'>
            <p className=' text-4xl text-red-600 m-10 font-bold max-lg:text-xl max-lg:m-4 max-lg:mt-18'>Our Summer collections</p>
            <motion.p initial = {{transform: "translateX(300px)"}} animate = {{transform: "translateX(0)"}} className='font1 mt-10 text-8xl font-bold max-lg:text-3xl'>
                <span className='relative z-10 pr-10'>
                    The New Arrival
                </span>
                <br />
                <span className='inline-block mt-3 text-red-900'>NIKE</span> Shoe
            </motion.p>
            <p className='text-lg text-slate-700 leading-8 mt-6 mb-14 max-lg:w-2xs'>Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.</p>
            <Button label="Shop Now" iconURL={arrowRight} />
            <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
                {
                    statistics.map((val, index) => (
                        <div key={index}>
                            <p className='text-4xl font-bold max-lg:text-xl'>{val.value}</p>
                            <p className='leading-7 text-slate-700'>{val.label}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        <motion.div
            className='flex-1 flex-col mt-28 border-red-200 border-2 rounded-2xl shadow m-10 flex justify-center items-center relative bg-center bg-cover bgHero max-lg:m-0 max-lg:p-8'
            initial={{
                transform: "translateX(300px)"
            }}
            whileInView={{
                transform: "translateX(0)"
            }}
            transition={{
                duration: 0.5
            }}
        >
            <img
                alt='shoe colletion'
                width={610}
                height={502}
                className='z-10 object-contain relative'
                src={bigShoeImg}
            />
            <div className='flex gap-4 absolute -bottom-10'>
                {
                    shoes.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                transform: "translateX(300px)"
                            }}
                            animate={{
                                transform: "translateX(0)"
                            }}
                            transition={{
                                duration: 1
                            }}
                        >
                            <ShoeCard
                                imgURL={img}
                                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                                bigShoeImg={bigShoeImg}
                            />
                        </motion.div>
                    ))
                }
            </div>
        </motion.div>
    </section>
  )
}

export default Hero