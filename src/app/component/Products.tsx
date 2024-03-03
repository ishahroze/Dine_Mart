import React from 'react'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { products } from '@/lib/products'
import Productcard from './Productcard'
function Products() {
  return (
    <div>
         <div className="flex justify-center font-sans mt-9 text-blue-600 font-bold text-xl">
        Products
      </div>
      <span className="font-bold text-4xl font-sans text-black flex justify-center mt-7">
      
      Our Promotions Events
    </span>
    <div className='grid grid-cols-3 justify-items-center mt-14 mb-5 pb-6'>
    {products.map((item)=>(<Productcard key={item.id} id={item.id}  image={item.image} price={item.price} description={item.description} category={item.category} />))}
    </div>
      
    </div>
  )
}

export default Products
  {/* <div className="flex justify-center font-sans mt-9 text-blue-600 font-bold text-xl">
        Products
      </div>
      <span className="font-bold text-4xl font-sans text-black flex justify-center mt-7">
      
      Our Promotions Events
    </span>
    <div className='grid grid-cols-3 justify-items-center mt-14 mb-5 pb-6'>
        <div>
        <Link href={"/Product1"}>
            <Image
            src={"/p-1.png"}
            alt='Product'
            width={380}
            height={400}
            />
            <h1 className='text-lg font-bold'>Brushed Raglan Sweatshirt</h1>
            <h1 className='text-lg font-bold'>$195</h1>
            </Link>
        </div>
        <div><Link href={"Product2"}> <Image
            src={"/p-2.png"}
            alt='Product'
            width={380}
            height={400}
            />
            <h1 className='text-lg font-bold peer-hover:before'>Brushed Raglan Sweatshirt</h1>
            <h1 className='text-lg font-bold'>$195</h1>
            </Link></div>
        <div><Link href={"Product3"}> <Image
            src={"/p-3.png"}
            alt='Product'
            width={380}
            height={400}
            />
            <h1 className='text-lg font-bold'>Brushed Raglan Sweatshirt</h1>
            <h1 className='text-lg font-bold'>$195</h1>
            </Link></div>

    </div> */}