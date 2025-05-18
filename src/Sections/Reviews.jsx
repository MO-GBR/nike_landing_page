import React from 'react'
import { reviews } from '../Constants'
import ReviewCard from '../Components/ReviewCard'

const Reviews = () => {
  return (
    <section className='max-container p-16'>
        <h3 className='fontPalanquin text-center font-bold text-4xl'>
            What Our
            <span className='text-red-800'> Customers </span>
            Say?
        </h3>
        <p className='m-auto mt-4 max-w-lg text-center text-slate-500'>
            Hear genuine stories from our satisfied customers about their exceptional experiences with us.
        </p>
        <div className='mt-24 flex flex-1 justify-evenly items-center gap-14 max-lg:flex-col'>
            {
                reviews.map((review, index) => (
                    <ReviewCard key={index} {...review}/>
                ))
            }
        </div>
    </section>
  )
}

export default Reviews