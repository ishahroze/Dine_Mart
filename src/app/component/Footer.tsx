import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';
function Footer() {
  return (
    <div className='container grid grid-cols-4 gap-8 justify-evenly mt-10  pb-20'>
    <div className='bg-white flex justify-between flex-col'>
    <Image
        src={"/Logo.webp"}
        alt="logo"
        width={200}
        height={200}
        className='pb-6'
      />  
      <p  className='pb-6'>Small, artisan label that offers a 
        thoughtfully curated collection of high quality everyday essentials made.</p>
        <div className='flex '><Twitter className='mr-3 bg-slate-300 rounded-md w-8 h-9'/> 
        <Facebook className='mr-3  bg-slate-300 rounded-md w-8 h-9' />       <Linkedin
         className=' bg-slate-300 rounded-md w-8 h-9'/></div>
      
    </div>
    <div className='bg-white text-1xl font-sans '><div className='font-bold mb-4 text-3xl'>Company</div>
    <div className='mb-2'>About</div>
    <div className='mb-2'>Terms of Use</div>
    <div className='mb-2'>Privacy Policy</div>
    <div className='mb-2'>How it Works</div>
    <div className='mb-2'>Contact Us</div>
    </div>
    <div className='bg-white text-1xl font-sans'><div className='font-bold mb-4 text-3xl'>Support</div>
    <div className='mb-2'>Support Carrer</div>
    <div className='mb-2'>24h Service</div>
    <div className='mb-2'>Quick Chat</div>
   </div>
   <div>
   <div className='font-bold mb-4 text-3xl font-sans'>Contacts</div>
   <div className='mb-2'>Whatsapp</div>
    <div className='mb-2'>Support 24H</div>
   </div>
   
    </div>
  )
}

export default Footer