import React from 'react';
import Image from 'next/image';

export const Childcomponent = (props:any) => {
  return (
    <div>
        
        <div className='border-2 shadow-lg border-l-fuchsia-950 mb-7 w-72 h-56 bg-white'>
          <Image src={props.carImage} alt={props.carName} width={300} height={300}></Image>
          </div>
        
        
        <div className='flex flex-col items-center '>
          <h2 className='underline text-xl text-red-500'>{props.carName}</h2>
          <p className='underline text-lg text-red-500'>Price: {props.carPrice}</p>
          <p className='underline text-lg text-red-500'>{props.carReviews}</p>
    </div>
    </div>
  )
}
export default Childcomponent;