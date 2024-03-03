import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function men() {
  return (
    
    <div className='flex  gap-3 mt-14 mb-80' >
        <div className="text-xl flex items-end mr-10 w-60 bg-slate-500 justify-items-center">
    <Image
    src={"/men2.png"}
    alt="event 2"
    width={250}
    height={266}
   
    />
  </div>
  
  <div className="text-xl flex items-end w-60 bg-slate-500 justify-items-center">
    <Image
    src={"/men1.png"}
    alt="event 2"
    width={250}
    height={266}
   
    />
  </div>
  </div>
   
  )
}

export default men