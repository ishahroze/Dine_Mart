import React from 'react'
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import Link from 'next/link';

function Cover() {
  return (
   
    <div className='grid grid-cols-2'>
      <div>
    <span><Badge className=' bg-blue-100 rounded-md text-3xl  text-blue-900 font-sans'>Sale 70%</Badge></span>
    <h1 className=' text-6xl font-bold pt-5 pb-5'>An Industrial Take on<br/> Streetwear</h1>
    <p className='font-sans opacity-80'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
    <Button variant="outline" className='bg-black text-white text-1xl rounded-none w-44 h-16 font-semibold'>
    <ShoppingCart className='size-6 text-white mt-2 mr-2   '/>Start <br/>Shopping</Button>
<span className='flex flex-row justify-between mt-4'>
  <Image
  src={"/1.png"}
  alt='first image'
  width={100}
  height={100}
  />
   <Image
  src={"/2.png"}
  alt='first image'
  width={100}
  height={100}
  />
   <Image
  src={"/3.png"}
  alt='first image'
  width={100}
  height={100}
  />
   <Image
  src={"/4.png"}
  alt='first image'
  width={100}
  height={100}
  />
</span>
</div>
<div className=''>
<Image
src={"/Cover.webp"}
alt='hello'
width={600}
height={600}
className=' pl-24'
/>
</div >

</div>
  
  )
}

export default Cover