import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { callApis } from '../utils/callApis'
import { Navbar, Footer, RelatedProduct } from './'
import { VN_CURRENCY } from '../utils/constants'

const ProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [quantity, setQuantity] = useState('1')
  const [isShown, setShown] = useState({ id: 'divOne' })

  const getProduct = () => {
    callApis(`data/products.json`).then((productResults) => {
      setProduct(productResults.data[id])
    })
    callApis(`data/products.json`).catch((err) => console.log('Loading product'))
  }

  useEffect(() => {
    getProduct()
  }, [])

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1)
    }
  }

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity((prevCount) => prevCount + 1)
    }
  }

  const handleClick = (e) => {
    setShown({ id: e.target.id })
    // console.log(1)
  }
  // const addQuantityToProduct = () => {
  //   setProduct(product.value = quantity)
  // }

  return (
    <section className='w-full m-auto'>
      <Navbar />
      {/* Product */}
      <section className='flex mt-10 w-[1400px] m-auto mb-10'>
        {/* Left sight */}
        <div>
          <img
            src={product.image}
            alt=''
            className='w-[500px] m-auto p-10 cursor-pointer'
          />
          <div className='text-3xl font-light w-[100%]'>
            mô tả<p className=' text-lg'>{product.description}</p>
          </div>
        </div>

        {/* Right sight */}
        <div className='ml-3 mt-10'>
          <p className='text-xl font-light mb-8'>{product.brand}</p>
          <p className='text-5xl font-light mb-8'>{product.title}</p>
          <p className='text-2xl font-light mb-8'>{VN_CURRENCY.format(product.price)}</p>
          <p className='text-xl font-light mb-8 flex'>
            Dung tích: <p className='ml-3'>{product.capacity}</p>
          </p>
          <div className='flex'>
            <div className='flex border border-black items-center font-light h-[52px] w-[170px]'>
              <div className='text-xl ml-6 mr-[100px]'>{quantity}</div>
              <div className='ml-4 text-xl'>
                <button onClick={handleIncrement}>+</button>
                <br></br>
                <button onClick={handleDecrement} className='pl-[2px]'>
                  -
                </button>
              </div>
            </div>
            <div>
              <button className='uppercase text-lg font-light bg-black text-white w-[420px] h-[52px] ml-[3px]'>
                thêm vào giỏ hàng
              </button>
            </div>
          </div>
          <div className='mt-10'>
            <div className='flex gap-7'>
              <div
                id='divOne'
                onClick={(e) => handleClick(e)}
                className='text-2xl cursor-pointer'
              >
                hương
              </div>
              <div
                id='divTwo'
                onClick={(e) => handleClick(e)}
                className='text-2xl cursor-pointer'
              >
                đặc điểm
              </div>
            </div>
            <div className={isShown.id === 'divOne' ? `divOne` : `hidden`}>
              <div className='text-lg flex gap-4 border-b border-gray-300 leading-[50px]'>
                hương đầu <p className='font-light'>{product.topCent}</p>
              </div>
              <div className='text-lg flex gap-4 border-b border-gray-300 leading-[50px]'>
                hương giữa <p className='font-light'>{product.midCent}</p>
              </div>
              <div className='text-lg flex gap-4 border-b border-gray-300 leading-[50px]'>
                hương cuối <p className='font-light'>{product.lastCent}</p>
              </div>
            </div>
            <div className={isShown.id === 'divTwo' ? `divTwo` : `hidden`}>
              <div className='text-lg flex gap-4 border-b border-gray-300 leading-[50px]'>
                phát hành <p className='font-light'>{product.year}</p>
              </div>
              <div className='text-lg flex gap-4 border-b border-gray-300 leading-[50px]'>
                độ lưu mùi <p className='font-light'>{product.retentionTime}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        <div className='border border-b border-gray-200'></div>

      {/* Related Product */}
      <div className='w-[1400px] m-auto mt-[80px]'>
          <span className='text-4xl font-light flex items-center justify-center h-full'>
            Sản phẩm liên quan
          </span>
          <div className='w-full m-auto pb-[200px]'>
            <RelatedProduct/>
          </div>
        </div>

      <Footer />
      <div className='flex items-center justify-center py-[30px] text-xl font-light tracking-wider'>
        <p>store 2021 | all right reserved</p>
      </div>
    </section>
  )
}

export default ProductPage
