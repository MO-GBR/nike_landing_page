import React from 'react'

import { copyrightSign } from "../../public/icons";
import { footerLogo } from "../../public/images";
import { footerLinks, socialMedia } from "../Constants";

const Footer = () => {
  return (
    <footer className='max-container bg-slate-500 p-10'>
        <div className='flex justify-between items-start gap-20 flex-wrap'>
            <div className='flex flex-col items-start p-10'>
                <a href='/'>
                    <img
                        alt='logo'
                        src={footerLogo}
                        width={150}
                        height={46}
                        className='m-0'
                    />
                </a>
                <p className='mt-6 text-base leading-7 text-white'>
                    Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
                </p>
                <div className='flex items-center gap-5 mt-8'>
                    {
                        socialMedia.map((icon, index) => (
                            <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full' key={index}>
                                <img src={icon.src} alt={icon.alt} width={24} height={24} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='flex flex-1 justify-between gap-20 flex-wrap'>
                {
                    footerLinks.map((section, index) => (
                        <div key={index}>
                            <h4 className='fontMontserrat text-2xl leading-normal font-medium mb-6 text-white'>
                                {section.title}
                            </h4>
                            <ul>
                                {
                                    section.links.map((link, index) => (
                                        <li key={index} className='fontMontserrat mt-3 text-base leading-normal text-white hover:text-slate-400'>
                                            <a href={link.link}>{link.name}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='flex justify-between text-white mt-24'>
            <div className='flex-1 flex items-center justify-start gap-2 cursor-pointer fontMontserrat'>
                <img
                    src={copyrightSign}
                    alt='copyright sign'
                    width={20}
                    height={20}
                    className='rounded-full m-0'
                />
                <p>Copyright. All rights reserved.</p>
            </div>
            <p className='fontMontserrat cursor-pointer'>Terms & Conditions</p>
        </div>
    </footer>
  )
}

export default Footer