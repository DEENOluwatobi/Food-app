import React from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { RiRefreshFill } from 'react-icons/ri';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const CartContainer = () => {
    
    const [{cartShow}, dispatch] = useStateValue();

    const showCart = () => {
        dispatch({
            type : actionType.SET_CART_SHOW,
            cartShow : !cartShow,
        })
    }

  return (
    <div className='fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]'>
        <div className='w-full flex items-center justify-between p-4'>
            <motion.div whileTap={{scale:0.75}}>
                <MdOutlineKeyboardBackspace className='text-textColor text-3xl  cursor-pointer' onClick={showCart}/>
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
                <div className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2'>
                    <img 
                        src="https://firebasestorage.googleapis.com/v0/b/food-app-4a5b8.appspot.com/o/Images%2F1674351874114-f2.png?alt=media&token=59fb2ff5-4803-437b-8fdd-3ab642a444ac" 
                        alt="" 
                        className='w-20 h-20 max-w-[60px] rounded-full object-contain'
                    />
                    {/* Name & price */}
                    <div className='flex flex-col gap-2'>
                        <p className='text-sm text-gray-50'>Pineapple</p>
                        <p className='text-sm block text-gray-300 font-semibold'><span>$</span>5.50</p>
                    </div>
                    {/* button section */}
                    <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
                        <motion.div 
                        whileTap={{ scale : 0.75 }}>
                            <BiMinus className='text-gray-50'/>
                        </motion.div>
                        <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'>
                            1
                        </p>
                        <motion.div 
                        whileTap={{ scale : 0.75 }}>
                            <BiPlus className='text-gray-50'/>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Total section */}
            <div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2'>
                <div className='w-full flex items-center justify-between'>
                    <p className='text-gray-400 text-lg'>Sub Total</p>
                    <p className='text-gray-400 text-lg'><span>$</span>5.50</p>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <p className='text-gray-400 text-lg'>Delivery</p>
                    <p className='text-gray-400 text-lg'><span>$</span>1.50</p>
                </div>

                <div className='w-full border-b border-gray-500 my-2'></div>

                <div className='w-full flex items-center justify-between'>
                    <p className='text-gray-200 text-xl font-semibold'>Total</p>
                    <p className='text-gray-200 text-xl font-semibold'><span>$</span>7.00</p>
                </div>

                <motion.button 
                    whileTap={{ scale : 0.8 }}
                    type='button'
                    className='w-full p-2 rounded-full bg-red-600 text-white text-lg my-2 hover:shadow-lg duration-150 transition-all ease-in-out'
                >
                    Check Out
                </motion.button>
            </div>
        </div>
    </div>
  )
}

export default CartContainer