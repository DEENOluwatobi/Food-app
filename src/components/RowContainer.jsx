import React from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { motion } from 'framer-motion'

const RowContainer = ({flag}) => {
  return (
    <div className={`w-full my-12 ${flag ? 'overflow-x-scroll' : 'overflow-x-hidden'}`}>
        <div className='w-300 md:w-275 h-auto bg-gray-100 rounded-lg px-4 py-2 my-12 backdrop-blur-lg drop-shadow-sm hover:drop-shadow-xl'>
            <div className='w-full flex items-center justify-between'>
                <motion.img whileHover={{scale : 1.1}} 
                    src="https://firebasestorage.googleapis.com/v0/b/food-app-4a5b8.appspot.com/o/Images%2F1674352412208-cu4.png?alt=media&token=086e4fe8-8973-43eb-a12c-a0e78eac8c56" 
                    alt="" 
                    className='w-40 -mt-8'
                />
                <motion.div whileTap={{scale : 0.75}} className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
                    <MdShoppingCart className='text-white'/>
                </motion.div>
            </div> 
            <div className='w-full flex flex-col items-end justify-end'>
                <p className='text-textColor font-semibold text-base md:text-base'>Chicken Soup</p>
                <p className='mt-1 text-sm text-gray-500'>10 Calories</p>
                <div className='flex items-center gap-8'>
                    <p className='text-lg text-headingColor font-semibold'>
                        <span className='text-sm text-red-500'>$</span>
                        5.25
                    </p>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default RowContainer