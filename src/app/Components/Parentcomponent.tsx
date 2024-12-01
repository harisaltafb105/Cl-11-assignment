import React from 'react';
import Childcomponent from './Childcomponent';
import Image from 'next/image';


const Parentcomponent = () => {
 interface Cars{
    carimage:any,
    carname:string,
    carprice:string,
    carreviews:string,
}
/* Array of objects */
const cars: Cars[] =[
    {carimage: "/Hondacity2.jpg" ,carname: 'Honda City',carprice: '6,000,000', carreviews: '621 reviews'  },
    {carimage: "/Hondacivic1.jpg" ,carname: 'Honda Civic',carprice: '8,000,000', carreviews: '221 reviews' },
    {carimage: "/Suzukialto.jpg" ,carname: 'Suzuki Alto',carprice: '3,000,000', carreviews: '300 reviews' },
    {carimage:"/toyotacorolla.jpg" ,carname: 'Toyota Corolla',carprice: '6,000,000', carreviews: '423 reviews' }
]
return(
    <div className='min-h-screen w-full bg-slate-100'>
<h1 className='text-center p-7 text-4xl font-extrabold text-red-900'> Featured cars</h1>


<div className= 'flex flex-col items-center md:flex md:flex-row md:justify-center md:p-16 md:gap-2 md:min-w-full'>
{
cars.map((car,index)=>{
    return(<div key={index}>
        <Childcomponent carImage={car.carimage} carName={car.carname}
    carPrice={car.carprice} carReviews={car.carreviews}/>
    </div>
    )
}
    )

}

</div>

    </div>

)
}

export default Parentcomponent;