'use client'
// import { useState } from 'react'
// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { ShoppingCart } from 'lucide-react';
// import { Search } from 'lucide-react';
// import { Inter } from "next/font/google";
// import { XCircle } from 'lucide-react';
// import { Menu } from 'lucide-react';

// function Header() {
//   const [nav,setnav]=useState(false);
//     const handleclick=()=> setnav(!nav);
//   return (
//    <div className=" flex mt-3 justify-between items-end
//     py-0.5 pt-1 px-1 bg-white text-black text-2xl text-bold">

//       <Link href="/" className="font-bold"  >
//         <Image
//         src={"/Logo.webp"}
//         alt="logo"
//         width={200}
//         height={200}
//       /></Link> 
//       <div className='hidden  md:flex lg:flex space-x-4'>
//     <a href="/category/male" className='font-sans'>Male</a>
//     <a href="/category/female" className='font-sans'>Female</a>
//     <a href="#" className='font-sans'>Kids</a>
//     <a href="#" className='font-sans'>All products</a>
//     <a href="#" className="flex items-center border rounded-md border-black border-opacity-10 ">
//   <Search className='h-5' />
//   <input className="ml-2 flex items-end text-1xl h-5 "
//          type="text"
//          placeholder="What are you looking for"
//   />
// </a>

     
//      <div className='bg-slate-200 rounded-full ml-3  size-12 flex justify-center relative items-center'> 
     
//         <div className=' w-4 h-4 text-xs justify-center  flex items-center bg-red-700 rounded-full pr-0 absolute right-2  top-0'><p className='text-white '>0</p></div>
//      <a href="#"><ShoppingCart className='size-7'/>
// </a>
// </div>  
// <div onClick={handleclick} className='md:hidden z-10'>
//             {!nav? <Menu className='text-white'/> :<XCircle /> }
//         </div>
//         <div >
//             {/* <ul className={!nav
//             ? 'hidden'
//             : 'absolute top-0 left-0 w-full h-screen text-white bg-[#0a192f] md:hidden flex flex-col justify-center items-center'
//         }>
//             <li className='py-6 text-4xl'>Home</li>
//             <li className='py-6 text-4xl'>Skills</li>
//             <li className='py-6 text-4xl'>About</li>
//             <li className='py-6 text-4xl'>Work</li>
//             <li className='py-6 text-4xl'>Contact</li></ul> */}
//             <ul className={!nav
//             ? 'hidden'
//             : 'absolute top-0 left-0 w-full h-screen text-white bg-[#0a192f] md:hidden flex flex-col justify-center items-center'
//         }>
//            <li className='py-6 text-4xl'><a href="/category/male" className='font-sans'>Male</a></li>
//             <li className='py-6 text-4xl'> <a href="/category/female" className='font-sans'>Female</a></li>
//             <li className='py-6 text-4xl'><a href="#" className='font-sans'>Kids</a></li>
//             <li className='py-6 text-4xl'><a href="#" className='font-sans'>All products</a></li>
           
             
   
    
//     </ul>
//         </div> 
    
//    </div>
//   )
// }

// export default Header
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Search, XCircle, Menu } from 'lucide-react';

function Header() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="flex mt-3 justify-between items-end py-1 px-2 bg-white text-black text-2xl text-bold">
            <div className="md:flex items-center">
                <div onClick={handleClick} className="md:hidden mr-4 cursor-pointer"><Menu className="text-3xl" /></div>
                <Link href="/" className="font-bold">
                    <Image
                        src={"/Logo.webp"}
                        alt="logo"
                        width={200}
                        height={200}
                    />
                </Link>
            </div>
            <div className="hidden md:flex md:space-x-4 md:items-center md:ml-auto">
                <Link href="/category/male" className='font-sans'>Male</Link>
                <Link href="/category/female" className='font-sans'>Female</Link>
                <Link href="#" className='font-sans'>Kids</Link>
                <Link href="#" className='font-sans'>All products</Link>
                <a href="#" className="flex items-center border rounded-md border-black border-opacity-10 ">
                    <Search className='h-5' />
                    <input className="ml-2 flex items-end text-1xl h-5"
                        type="text"
                        placeholder="What are you looking for"
                    />
                </a>
                <div className='bg-slate-200 rounded-full ml-3 size-12 flex justify-center relative items-center'>
                    <div className='w-4 h-4 text-xs justify-center flex items-center bg-red-700 rounded-full pr-0 absolute right-2 top-0'><p className='text-white'>0</p></div>
                    <a href="#"><ShoppingCart className='size-7 text-black' /></a>
                </div>
            </div>
            {nav &&
                <div className="md:hidden">
                    <div className="absolute top-0 left-0 w-full h-screen text-white bg-[#0a192f] flex flex-col justify-center items-center">
                        <div onClick={handleClick} className="absolute top-4 right-4 cursor-pointer"><XCircle className="text-3xl" /></div>
                        <ul className="flex flex-col items-center mt-10 space-y-4">
                            <li className='text-4xl'><Link href="/category/male" className='font-sans'>Male</Link></li>
                            <li className='text-4xl'><Link href="/category/female" className='font-sans'>Female</Link></li>
                            <li className='text-4xl'><Link href="#" className='font-sans'>Kids</Link></li>
                            <li className='text-4xl'><Link href="#" className='font-sans'>All products</Link></li>
                        </ul>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-25" onClick={handleClick}></div>
                </div>
            }
        </div>
    )
}

export default Header

