import React from 'react'
import input from '@/components/input'
import { Button } from '@/components/ui/button'
function Newsletter() {
  return (
    <div className='flex flex-col justify-center items-center pt-12'>
        <div className='font-extrabold text-4xl'>Subscribe Our Newsletter</div>
        <div>Get the latest information and promo offers directly</div>
        <div className='flex flex-row'><input placeholder='Input email address' className='border border-gray-600 rounded-sm'/><Button className='text-xl ml-3 rounded-none'>Get Started</Button></div>
    </div>
  )
}

export default Newsletter