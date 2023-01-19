import React from 'react'
import Delivery from '../Images/delivery.png'

const HomeContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
     
      <div className='py-2 flex-1 flex flex-col items-start md:items-start justify-start gap-4'>
        <div className='flex items-center gap-2 justify-center drop-shadow-md bg-red-100 rounded-full px-2 py-1'>
          <p className='text-base text-red-400'>Bike Delivery</p>
          <div className='w-7 h-7 bg-white rounded-full overflow-hidden drop-shadow-md'>
            <img 
              src={Delivery} 
              className='w-full h-full object-contain border-full border-red-500'
              alt="delivery" 
            />
          </div>
        </div>

        <p className='text-[2.5rem] lg:text-[3.5rem] md:w-[90%] font-bold tracking-wide text-headingColor'>
          The Fastest Delivery in <span className='text-[3rem] lg:text-[4rem] text-red-600'>Lagos City</span>
        </p>
        <p className='text-base md:w-[90%] text-textColor text-center md:text-left'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis ut esse ab quas quam. 
          Maiores deserunt consequuntur, soluta non eos quasi nobis aut quae laboriosam dignissimos architecto nemo sunt.
        </p>
        <button 
          type='button'
          className='px-4 py-2 md:w-[35%] bg-red-500 w-full text-white rounded-md hover:shadow-lg 
          transition-all ease-in-out duration-100'
          >
            Order Now
        </button>
      </div>


      <div className='py-2 bg-red-400 flex-1'>

      </div>


    </div>
  )
}

export default HomeContainer