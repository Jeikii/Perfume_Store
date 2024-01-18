import React, { useEffect, useState } from 'react'
import { callApis } from './../utils/callApis'
import { CardProduct } from './'

const FamousProduct = () => {
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
      <section>
        <div className='w-full m-auto mt-[80px]'>
          <span className='text-4xl font-light flex items-center justify-center h-full'>
            Sản phẩm nổi bật
          </span>
          <div className='w-full m-auto pb-[400px]'>
            <CardProduct allCards={product} />
          </div>
        </div>
      </section>
    )
  )
}

export default FamousProduct
