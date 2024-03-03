// 'use client'
// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { useState } from 'react'
// import { Button } from '@/components/ui/button'
// import { ShoppingCart } from 'lucide-react';
// import { products } from '@/lib/products';
// import Productcard from '@/app/component/Productcard'
// import image from 'next/image'
// function Productcard2({image,price,description,category,id}:{image:string,price:number,description:string,category:string,id:number}) {
//   const[quantity,setquantity]=useState(1)
//   const increment=()=>{
//       setquantity(quantity+1)
//         }
//         const decrement=()=>{
//           setquantity(quantity-1)
//           if (quantity<=1) {
//             setquantity(1)
//           }
//   return (
//     <div>
    
//     <div className='grid  grid-cols-[auto,1fr,1fr] gap-0 ml-0 mt-10'>
//     <div className='mr-4' >
//       <Image
//       src={image}
//       alt='hello'
//       width={100}
//       height={100}
      
//       />  
//     </div>
//     <div className='w-full h-full mr-4 mb-36'>
//     <Image
//       src={image}
//       alt='hello'
//       width={1000}
//       height={1000}
     
//       />  
//     </div>
//     <div className=' w-96 ml-16 mt-24 mb-10'>
//       <h1 className='text-3xl	font-normal font-sans'>Brushed Raglan Sweatshirt</h1>
//       <span className='font-semibold text-xl opacity-40 font-sans'>Sweater</span>
      
//      <p className='text-3xl font-bold mt-7'>Select Size</p>
//     <ul className='flex font-sans justify-between text-base font-bold mt-3  '>
//       <li className=' hover:bg-slate-500 flex items-center  justify-center rounded-full w-10 h-10 justify-items-center '>XS</li>
//       <li className=' hover:bg-slate-500 flex items-center justify-center rounded-full w-10 h-10 justify-items-center '>S</li>
//       <li className= 'hover:bg-slate-500 flex items-center justify-center rounded-full w-10 h-10 justify-items-center '>L</li>
//       <li className=' hover:bg-slate-500 flex items-center justify-center rounded-full w-10 h-10 justify-items-center '>XL</li>
//       <li className=' hover:bg-slate-500 flex items-center justify-center rounded-full w-10 h-10 justify-items-center' >M</li>
//     </ul>
//     <p className='flex justify-between items-end mt-5'>
//      <h2 className='font-bold text-3xl font-sans'>Quantity:</h2>
//      <button onClick={decrement} className='flex items-center text-3xl bg-slate-400 justify-center rounded-full w-10 h-10 justify-items-center '>-</button>
//      <span className='text-3xl'>{quantity}</span>
//      <button onClick={increment} className='flex items-center text-3xl bg-slate-400 justify-center rounded-full w-10 h-10 justify-items-center '>+</button>
//      </p>
//      <p className='flex flex-row h-24 items-end mt-0'>
//      <Button variant="outline" className='flex items-end  bg-black text-white text-1xl rounded-none w-44 h-12 justify-items-center font-semibold'>
//      <ShoppingCart className='size-6 text-white mt-2 mr-2   '/>Add to Cart</Button>
//      <h2 className='font-bold text-3xl font-sans pl-3'>$195.00</h2></p>
//     </div>
// </div>
// <h1 className='text-2xl font-bold font-sans ml-16 mb-10'>Product Information</h1>
// <div className='text-xl border-t-4 mb-96'>
// <div className=' flex mb-9 mt-10'>
// <h1 className='text-2xl font-bold text-slate-600 flex-none font-sans ml-16 mb-10 mr-64'>Product Details</h1>
// <p className='font-normal text-xl font-sans space-x-2 ml-0 pl-0'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
// labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
// laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
// in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
// non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
// </div>
// <div className='flex '>
// <h1 className='text-2xl  font-bold text-slate-600 flex-none font-sans ml-16 mb-10 mr-72'>Product Care</h1>
// <ul className='list-disc font-extrabold'>
// <li>Hand wash using cold water</li>
// <li>Do not using bleach.</li>
// <li>Hang it to dry.</li>
// <li>Iron on low temperature.</li>
// </ul>
// </div>
// </div>
            
      
//     </div>
//   )
// }}
// export default Productcard2