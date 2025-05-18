import React from 'react'
import { products } from '../Constants'
import PopularProductCard from '../Components/PopularProductCard'

const PopularProducts = () => {
  return (
    <section id='products' className='max-container p-10'>
        <div className='flex justify-start flex-col gap-5 mt-20'>
            <h2 className='fontPalanquin text-4xl font-bold'>
                Our <span className='text-red-800'>Popular </span>Products
            </h2>
            <p className='mt-2 text-slate-700 fontMontserrat'>
               Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value
            </p>
        </div>
        <div className='mt-16 flex justify-center items-center max-lg:flex-col'>
            {/* grid gap-14 lg:grid-cols-4 grid-cols-1 */}
            {
                products.map((item, index) => (
                    <PopularProductCard key={index} {...item} />
                ))
            }
        </div>
    </section>
  )
}

export default PopularProducts