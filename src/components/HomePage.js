import React from 'react'
import { FamousProduct, Navbar, Footer } from './'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { GiSmartphone } from 'react-icons/gi'
import { TfiEmail } from 'react-icons/tfi'

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
        <div className='w-full flex items-center justify-center text-xl pt-8'>
          Chào mừng bạn đến với Perfume Bar
        </div>
      </div>
      <Navbar />
      {/* San pham */}
      <FamousProduct />
      {/* Dia chi */}
      <div className='w-full'>
        <p className='text-4xl font-light flex items-center justify-center mb-7'>
          perfume store
        </p>
        <div className='flex items-center justify-center mb-4'>
          <FaMapMarkerAlt size={34} className='mr-5' />
          <p className='text-lg font-light'>
            Số 153 Đống Đa, Hà Nội | 186/52 Ngô Văn Sở, P1, Q5, TP. Hồ Chí Minh
          </p>
        </div>
        <div className='flex items-center justify-center mb-4'>
          <div className='flex items-center justify-center mr-8'>
            <GiSmartphone size={34} className='mr-3' />
            <p className='text-lg font-light'>0902 570 583 | 0993 257 243</p>
          </div>
          <div className='flex items-center justify-center'>
            <TfiEmail size={34} className='mr-3' />
            <p className='text-lg font-light'>huy1234@gmail.com</p>
          </div>
        </div>
        <div className='flex items-center justify-center mb-9'>
          <p className='text-lg font-light'>
            Giờ mở cửa: Các ngày trong tuần từ 9:00 - 21:00
          </p>
        </div>
      </div>
      <Footer />
      <div className='flex items-center justify-center py-[30px] text-xl font-light tracking-wider'>
        <p>store 2021 | all right reserved</p>
      </div>
    </div>
  )
}

export default HomePage
