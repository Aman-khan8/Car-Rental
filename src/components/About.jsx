import React from 'react'
import { Headphones,Car,ShieldCheck } from "lucide-react";

function About() {
  return (
  
    <>
    <div className='sm:w-[80%] '>
        <div className='flex flex-col  space-y-10'>
         <div className=" flex flex-col items-center text-center gap-2 p-6 ">
        <h4 className="text-xl">Plan your trip with us</h4>
        <h1 className="text-2xl font-bold">Quick & easy rental car</h1>
     
      </div>
            <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
               <div className="flex flex-col items-center space-y-2 ">
    <Headphones className="w-12 h-12 text-red-600" strokeWidth={2} />
    <h3 className="font-bold sm:text-lg text-sm ">24/7 Customer Support</h3>
    <p className="text-sm text-gray-600">We’re here to help anytime, anywhere.</p>
    
  </div>

  <div className="flex flex-col items-center space-y-2">
    <Car className="w-12 h-12 text-red-600" strokeWidth={2} />
    <h3 className="font-bold text-lg">Choose Your Ride</h3>
    <p className="text-sm text-gray-600">From economy to luxury, we’ve got it all.</p>
  </div>

  <div className="flex flex-col items-center space-y-2">
    <ShieldCheck className="w-12 h-12 text-red-600" strokeWidth={2} />
    <h3 className="font-bold text-lg">Safe & Reliable</h3>
    <p className="text-sm text-gray-600">Your journey is protected with us.</p>
  </div>
           
            </div>
        </div>
    </div>
    </>
  )
}

export default About