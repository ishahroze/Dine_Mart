import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Promotions() {
  return (
    <div>
      <div className="flex justify-center font-sans mt-9 text-blue-600 font-bold text-xl">
        Promotions
      </div>
      <span className="font-bold sm:text-4xl text-2xl font-sans text-black flex justify-center mt-7">
      
        Our Promotions Events
      </span>
      <div className=" grid sm:grid-cols-3 gap-4 w-auto h-auto grid-cols-1
  col-auto ">
  <div className="bg-gray-200 ">
  <div className="grid grid-rows-1  bg-gray-300 grid-cols-2 text-center col-span-10">
    <div className="pt-7"><h3 className="font-sans text-3xl font-bold flex flex-col">Get upto <br/> 60 %
           <p className="font-normal ">For the Summer <br/>Season </p>
           </h3> </div>
           <div className="text-xl justify-self-end">
        <Image
        src={"/event1.webp"}
        alt="event1"
        width={282}
        height={218}

/>
         </div>
           </div>
    <div className="bg-black text-center mt-3 mb-0 justify-items-center ">
      <p className="text-4xl text-white font-extrabold font-sans justify-items-center pt-5 pb-5 ">
    GET 30% Off</p>
    <p className="text-base text-white">USE PROMO CODE</p>
    <Button className="">DINEWEEKENDSALE</Button>
    </div>
  </div>
  <div className="bg-yellow-100 p-4 text-base font-sans font-normal "><p>Flext Sweatshirt</p>
  <p className="text-base font-normal">$100.00 <span className="font-semibold text-lg">$75.00</span></p>
  <div className="text-xl flex items-center justify-items-center">
    <Image
    src={"/event2.webp"}
    alt="event 2"
    width={282}
    height={362}
    />
  </div>
  </div>
  <div className="bg-gray-300 p-4 "><p>Flex Push Button Bomber</p>
  <p className="text-base font-normal">$225.00 <span className="font-semibold text-lg">$190.00</span></p>
  <div className="text-xl">
    <Image
    src={"/event3.webp"}
    alt="event 2"
    width={282}
    height={362}
    />
  </div>
  </div>
</div>

    </div>
  );
}

export default Promotions;
