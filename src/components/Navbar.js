import { Link } from 'react-router-dom'
import { Search } from './'
import { CiUser, CiShoppingCart } from 'react-icons/ci'

const Navbar = () => {
  return (
    <header className='min-w-[1200px]'>
      <div className='flex h-[60px] justify-between mb-4'>
        <div className='flex font-light items-center px-[60px] py-10'>
          <Link to={`/`}>
            <div className='text-base xl:text-lg px-9 cursor-pointer'>Trang Chủ</div>
          </Link>
          <div className='text-base xl:text-lg px-9 cursor-pointer'>Thương Hiệu</div>
          <div className='text-base xl:text-lg px-9 cursor-pointer'>Sản phẩm</div>
        </div>
        <div className='flex items-center px-[60px] py-10'>
          <Search />
          <div className='text-base xl:text-lg px-7 cursor-pointer'>
            <CiUser size={26} />
          </div>
          <div className='text-base xl:text-lg px-7 cursor-pointer'>
            <CiShoppingCart size={26} />
          </div>
        </div>
      </div>
      <div className='border border-gray-400'></div>
    </header>
  )
}

export default Navbar
