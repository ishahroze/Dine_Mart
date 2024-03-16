import Products from '@/app/component/Products'
import React from 'react'
import { products } from '@/lib/products';
import Productcard from '@/app/component/Productcard';
function page({ params }: { params: { slug: string } }) {
    const productfilter =
         products.filter((val) => val.category== params.slug)
      
      
  return (
    <div className='grid grid-cols-3 justify-items-center mt-14 mb-5 pb-6'>
{productfilter.map((item)=>(
     <Productcard key={item.id} id={item.id}  image={item.image} price={item.price} description={item.description} category={item.category} /> 
))}

    </div>
  )
}

export default page