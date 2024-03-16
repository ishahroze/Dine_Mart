'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';
import { Inter } from "next/font/google";


function Header() {
  return (
   <div className=" flex mt-3 justify-between items-end
    py-0.5 pt-1 px-1 bg-white text-black text-2xl text-bold">

      <Link href="/layout" className="font-bold"  >
        <Image
        src={"/Logo.webp"}
        alt="logo"
        width={200}
        height={200}
      /></Link> 
    <a href="/category/male" className='font-sans'>Male</a>
    <a href="/category/female" className='font-sans'>Female</a>
    <a href="#" className='font-sans'>Kids</a>
    <a href="#" className='font-sans'>All products</a>
    <a href="#" className="flex items-center border rounded-md border-black border-opacity-10 ">
  <Search className='h-5' />
  <input className="ml-2 flex items-end text-1xl h-5 "
         type="text"
         placeholder="What are you looking for"
  />
</a> 
     <div className='bg-slate-200 rounded-full ml-3  size-12 flex justify-center relative items-center'> 
     
        <div className=' w-4 h-4 text-xs justify-center  flex items-center bg-red-700 rounded-full pr-0 absolute right-2  top-0'><p className='text-white '>0</p></div>
     <a href="#"><ShoppingCart className='size-7'/>
</a>
</div>   
    
   </div>
  )
}

export default Header