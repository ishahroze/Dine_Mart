import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

function Unique() {
  return (
    <div className=' font-sans'>
<div className='font-extrabold text-5xl pt-16 flex justify-items-end justify-end pb-6 mb-10'>Unique and Authentic Vintage<br/> Designer Jewellery</div>    
    <div className='grid grid-cols-3 gap-10 ml-8 font-sans'>
      <div className='grid grid-cols-2 gap-12'>
       <div>
    <h3 className='font-bold text-lg'>
Using Good Quality Materials
</h3>
      <p className='text-base font-normal'>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
      </div> 
      <div>
      <h3 className='font-bold text-lg'>100% Handmade Products</h3>
      <p className='text-base font-normal'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
      </div>
      <div>
      <h3 className='font-bold text-lg'>Modern Fashion Design</h3>
      <p className='text-base font-normal'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
      </div>
      <div>
      <h3 className='font-bold text-lg'>Discount for Bulk Orders</h3>
      <p className='text-base font-normal'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
      </div>
      </div>
      <div className='pr-0 mr-0 flex items-end justify-center'> <Image
      src={"/unique.webp"}
      alt='unique image'
      width={284}
      height={350}
      /></div>
      <div>
        <p className='font-normal text-lg ml-0 pt-12'>This piece is ethically 
            crafted in our small family-owned workshop in Peru with unmatched attention to detail
             and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
      <Button className=' rounded-none text-base font-semibold w-44 mt-8'>See All Products</Button>
      </div>
      
    </div>
    </div>
  )
}

export default Unique