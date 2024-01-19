import React, { useEffect, useState } from 'react'
import { callApis } from '../utils/callApis'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Link } from 'react-router-dom'
import { VN_CURRENCY } from '../utils/constants'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const RelatedProduct = () => {
  const [product, setProduct] = useState([])

  const getProduct = () => {
    callApis(`data/products.json`).then((productResults) => {
      setProduct(productResults.data)
      // console.log(productResults)
    })
    callApis(`data/products.json`).catch((err) => console.log('Loading product'))
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    product && (
      <Swiper
        modules={[Pagination]}
        loop={true}
        spaceBetween={30}
        slidesPerView={5}
        pagination={{ dynamicBullets: true }}
        className='mySwiper'
      >
        <section>
          <div className=' m-auto mt-[80px]'>
            {/* <span className='text-4xl font-light flex items-center justify-center w-full h-full'>
              Sản phẩm liên quan
            </span> */}

            <div className='m-auto pb-[200px] flex gap-4'>
              {Object.values(product)
                .slice(1, 6)
                .map((card) => {
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
            </div>
          </div>
        </section>
      </Swiper>
    )
  )
}

export default RelatedProduct
