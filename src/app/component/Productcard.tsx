import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Productcard({image,price,description,category,id}:{image:string,price?:number,description:string,category:string,id:number}) {
  return (
    <div>
      <Link href={`/productdetail/${id}`}>
      <Image
            src={image}
            alt='Product'
            width={380}
            height={400}
            />
             <h1 className='text-lg font-bold peer-hover:before'>{description}</h1>
            <h1 className='text-lg font-bold'>${price}</h1>
            
      </Link>
    </div>
  )
}

export default Productcard