import { Link } from 'react-router-dom'
import { VN_CURRENCY } from '../utils/constants'
// import Slider from 'react-slick'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const CardProduct = (props) => {
  const { allCards } = props

  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      spaceBetween={30}
      slidesPerView={5}
      pagination={{dynamicBullets: true}}
      className='mySwiper'

    >
      <section className='flex gap-4'>
        {Object.values(allCards).map((card) => {
          return (
            <SwiperSlide
              key={card.id}
              className='border border-gray-300 shadow-md hover:-translate-y-[2px] hover:shadow-xl cursor-pointer rounded-3xl mt-[100px] h-[500px]'
            >
              <Link to={`/product/${card.id}`}>
                <img
                  src={card.image}
                  alt=''
                  className='w-[300px] h-[300px] translate-y-[-40px] m-auto'
                />
              {/* </Link> */}
              <div className='m-auto mt-8 mb-[9px] flex items-center justify-center text-[#814E3A] font-light text-[21px]'>
                {card.brand}
              </div>
              <div className='border border-black w-[25%] m-auto mb-2'></div>
              <div className='m-auto mt-3 flex items-center justify-center text-[21px] font-light mb-2'>
                {card.title}
              </div>
              <div className='m-auto flex items-center justify-center text-[21px] font-light mt-4 mb-6'>
                {VN_CURRENCY.format(card.price)}
              </div>
              </Link>
            </SwiperSlide>
          )
        })}
      </section>
    </Swiper>
  )
}

export default CardProduct
