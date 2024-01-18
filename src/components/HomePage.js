import React from 'react'
import { FamousProduct, Navbar } from './'

const HomePage = () => {
  return (
    <div className=''>
      <img
        src='../images/layout.jpg'
        alt=''
        className='relative w-full h-[400px] object-cover'
      />
      <div className='absolute top-0 flex-col items-center justify-center w-full h-[400px] bg-black/53 text-[60px] text-white font-sans font-light'>
        <p className='flex items-center justify-center pb-8 pt-10'>Perfume Bar</p>
        <div className='w-full flex items-center justify-center mt-5 mb-10'>
          <button className='bg-gray-rgba h-[50px] align-middle uppercase text-xl text-black px-4 cursor-pointer leading-[53px]'>
            follow me
          </button>
        </div>
        <div className='w-full flex items-center justify-center text-xl pt-8'>Chào mừng bạn đến với Perfume Bar</div>
      </div>
      <Navbar />
      <FamousProduct />
    </div>
  )
}

export default HomePage
