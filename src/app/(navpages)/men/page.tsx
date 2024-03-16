import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/products'
import Productcard from '@/app/component/Productcard'
function men() {
  return (
    
    <div className='grid grid-cols-3 justify-items-center mt-14 mb-5 pb-6' >
    {products.map((item) => (
        <Productcard key={item.id} id={item.id}  image={item.image} price={item.price} description={item.description} category={item.category} />
    ))}
  </div>
   
  )
}

export default men