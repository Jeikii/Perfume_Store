import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white h-[500px]'>
      <div className='grid grid-cols-3 items-center justify-center h-[500px]'>
        <div className='text-4xl font-light m-auto'>
          <p className='mb-3 flex items-center justify-center'>perfume store</p> 
          <ul className='text-xl mb-2 flex items-center justify-center'>ưu đãi thành viên</ul>
          <ul className='text-xl mb-2 flex items-center justify-center'>tài khoản</ul>
          <ul className='text-xl mb-2 flex items-center justify-center'>tuyển dụng</ul>
        </div>
        <div className='text-4xl font-light m-auto'>
          <p className='mb-3 flex items-center justify-center'>chính sách bán hàng</p>
          <ul className='text-xl mb-2 flex items-center justify-center'>phương thức vận chuyển</ul>
          <ul className='text-xl mb-2 flex items-center justify-center'>câu hỏi thường gặp</ul>
          <ul className='text-xl mb-2 flex items-center justify-center'>điều khoản và điều kiện sử dụng</ul>
          <ul className='text-xl mb-2 flex items-center justify-center'>điều khoản và điều kiện bán hàng</ul>
          <ul className='text-xl mb-2 flex items-center justify-center'>thông báo pháp lý</ul>
        </div>
        <div className='text-4xl font-light m-auto'>
          <p className='mb-3 flex items-center justify-center'>thông tin chung</p>
          <ul className='text-xl mb-2 flex items-center justify-center'>giới thiệu</ul>
          <ul className='text-xl mb-2 flex items-center justify-center'>liên hệ</ul>
          <ul className='text-xl mb-2 flex items-center justify-center'>sản phẩm</ul>
        </div>
      </div>
    </div>
  )
}

export default Footer