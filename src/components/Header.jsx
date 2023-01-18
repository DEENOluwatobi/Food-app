import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

import Logo from '../Images/logo.png'
import Avatar from '../Images/avatar.png'
import { app } from '../firebase.config'


const Header = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const login = async () => {
        const response = await signInWithPopup(firebaseAuth, provider);
        console.log(response)
    }

  return (
    <header className=' z-50 w-screen p-6 px-16'>
        {/* DESKTOP & TABLET */}
        <div className='hidden md:flex w-full h-full items-center justify-between'>
            <Link to={'/'} className='flex items-center gap-2'>
                <img src={Logo} className='w-8 object-cover' alt="logo" />
                <p className='text-headingColor text-xl font-bold'>DEEN</p>
            </Link>

            <div className='flex items-center gap-8'>
                <ul className='flex items-center gap-8 '>
                    <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100
                    transition-all ease-in-out'>Home</li>
                    <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100
                    transition-all ease-in-out'>Menu</li>
                    <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100
                    transition-all ease-in-out'>About Us</li>
                    <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100
                    transition-all ease-in-out'>Services</li>
                </ul>

                <div className='relative flex items-center justify-center'>
                    <MdShoppingBasket className='text-textColor text-2xl cursor-pointer'/>
                    <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg'>
                        <p className='text-xs flex items-center justify-center text-white font-semibold'>2</p>
                    </div>
                </div>

                <div className='relative'>
                    <motion.img 
                        whileTap={{scale: 0.6}} 
                        src={Avatar} 
                        className='w-10 min-w-[40px] h-10 m-h-[40px] drop-shadow-xl cursor-pointer' 
                        alt="userprofile" 
                        onClick={login}
                    />
                </div>
            </div>
        </div>

        {/* MOBILE */}
        <div className='block md:hidden h-full'></div>
    </header>
  )
}

export default Header