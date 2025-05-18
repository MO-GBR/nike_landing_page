import React from 'react'

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleShoe = () => {
        if(bigShoeImg !== imgURL.bigShoe) changeBigShoeImage(imgURL.bigShoe)
    };
  return (
    <div className={`border-2 cursor-pointer rounded-2xl ${
      bigShoeImg === imgURL.bigShoe
      ? "border-red-200 border-2 shadow-lg"
      : "border-transparent shadow"
    }`} onClick={handleShoe}>
        <div className='bgCard flex justify-center items-center rounded-xl bg-center'>
            <img src={imgURL.thumbnail} width={127} height={103.34} className='object-contain' alt='shoe colletion'/>
        </div>
    </div>
  )
}

export default ShoeCard