import React, {useState} from 'react'
import {headerLogo} from '../../public/images'
import { navLinks } from '../Constants'
import { hamburger } from '../../public/icons'

const Header = () => {
  let screenWidth = screen.width;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='py-8 z-20 w-full h-fit p-4 border-b-1 border-slate-200 shadow fixed bg-red-100 max-lg:pt-[-10px]'>
        <nav className='flex justify-between items-center max-container max-lg:flex-col'>
            <div className='flex max-lg:justify-between'>
              <a>
                <img src={headerLogo} width={129} height={29} alt='logo' className='m-0 w-[129px] h-[29px]' />
              </a>
              <img
                src={hamburger}
                className='hidden max-lg:block max-lg:ml-20'
                height={25}
                width={25}
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
            <ul className={
              isOpen
               ? `flex justify-center items-center gap-16 max-lg:flex-col max-lg:mt-4`
               : "max-lg:hidden flex flex-row justify-around"
            }>
              {navLinks.map((item, index) =>(
                <li key={index}>
                  <a href={item.href} className='fontMontserrat m-16 leading-normal text-lg text-slate-900 hover:text-slate-400 hover:text-xl'>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className='fontMontserrat flex gap-2 text-lg leading-normal font-medium max-lg:hidden'>
              <a href='/'>
                Sign In
              </a>
              <span>/</span>
              <a href='/'>Explore More</a>
            </div>
        </nav>
    </header>
  )
}

export default Header