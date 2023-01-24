import React from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { RiRefreshFill} from 'react-icons/ri';
import { motion } from 'framer-motion';

const CartContainer = () => {
  return (
    <div className='fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]'>
        <div className='w-full flex items-center justify-between p-4'>
            <motion.div whileTap={{scale:0.75}}>
                <MdOutlineKeyboardBackspace className='text-textColor text-3xl  cursor-pointer'/>
            </motion.div>
            <p className='text-textColor text-lg font-semibold'>Cart</p>
            <motion.p whileTap={{scale:0.75}} className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 
                rounded-md hover:shadow-md cursor-pointer text-textColor text-base'>
                Clear <RiRefreshFill/>
            </motion.p>
        </div>

        <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col'>
            <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
                {/* cart item */}
                <div className='w-full p-1 px-2 rounded-lg bg-cardItem flex items-center gap-2'>
                    <img 
                        src="https://firebasestorage.googleapis.com/v0/b/food-a…=media&token=c587e992-b569-4acd-8499-9b475f32bc34" 
                        alt="" 
                        className='w-20 h-20 max-w-[60px] rounded-full object-contain'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartContainer