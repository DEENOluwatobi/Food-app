import React from 'react'
import Delivery from '../Images/delivery.png'
import HeroBg from '../Images/heroBg.png'
import { heroData } from '../utils/data'


const HomeContainer = () => {
  return (
    <section id='home' className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-0 w-full'>
     
      <div className='py-2 flex-1 flex flex-col items-start md:items-start justify-start gap-4'>
        <div className='flex items-center gap-2 justify-center drop-shadow-md bg-red-100 rounded-full px-2 py-1'>
          <p className='text-base text-red-400 font-semibold'>Bike Delivery</p>
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
            Satisfy your hunger cravings with the convenience of our food delivery website. Browse through a wide selection 
            of top-rated restaurants and cuisines. Order online with just a few clicks. Enjoy fast, free delivery. 
            Pay online securely. Great food, great service, great convenience - all at your fingertips!
        </p>
        <button 
          type='button'
          className='px-4 py-2 md:w-[35%] bg-red-500 w-full text-white rounded-md hover:shadow-lg 
          transition-all ease-in-out duration-100'
          >
            Order Now
        </button>
      </div>


      <div className='py-2 flex flex-1 items-center lg:mr-4 relative'>
        <img 
            src={HeroBg}
            className='ml-auto h-420 w-full lg:w-auto lg:h-600' 
            alt="hero" 
        />
        <div className='w-full h-full gap-4 flex-wrap absolute top-0 left-0 flex 
        items-center justify-center lg:px-16 py-4'>
            {heroData && heroData.map(n => (
                <div 
                    key={n.id} 
                    className='lg:w-190 min-w-[150px] p-4 bg-cardOverlay backdrop-blur-md 
                    rounded-3xl flex flex-col items-center justify-center drop-shadow-xl'
                >
                    <img 
                        src={n.imageSrc} 
                        className='w-20 -mt-10 lg:w-40 lg:-mt-20'
                        alt="food" 
                    />
                    <p className='text-base lg:text-lg mt-2 font-semibold text-textColor'>{n.name}</p>
                    <p className='text-sm text-lighttextGray font-semibold my-2'>{n.des}</p>
                    <p className='text-sm font-semibold text-headingColor'>
                        <span className='text-xs text-red-600'>$</span>{n.price}
                    </p>
                </div>
            ))}
        </div>
      </div>


    </section>
  )
}

export default HomeContainer