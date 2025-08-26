import React from 'react'
import { Car, MapPin,LucideUserRoundSearch ,Calendar } from "lucide-react";
import Button from './Button';

function Book() {
  return (
    <>
    
     <div className='sm:w-[80%] w-full sm:mt-20 space-y-5 sm:pl-20 pl-10'>
      <div className='flex '> 
       <h1 className='text-2xl font-bold'>Book a car</h1>
      </div>
         
         <div className='sm:flex gap-x-40 flex-wrap space-y-10 grid grid-cols-1  '>
          <div className=' flex flex-col sm:w-[20%] p space-y-3'> 
  <label htmlFor="car" className='flex text-xl font-bold gap-x-2 items-center'><Car className="w-6 h-6 text-red-600" strokeWidth={3}/>Select a car:</label>

  <input list="cars" id="car" name="car" className="outline-none px-2 py-0.5 rounded border-none" placeholder='Select your car ' />

  <datalist id="cars">
    <option value="Volvo" />
    <option value="Audi" />
    <option value="BMW" />
    <option value="Mercedes" />
     </datalist>

     </div>
        <div className=' flex flex-col  space-y-3'> 
  <label htmlFor="Pick-up" className='flex text-xl font-bold gap-x-2 items-center'><MapPin className="w-6 h-6 text-red-600" strokeWidth={3}/>Pick-Up</label>

  <input list="Pick-up" id="Pickup" name="Pick-up" className="outline-none px-3 py-0.5 rounded border-none" placeholder='Select pick-up location ' />

  <datalist id="Pick-up">
    <option value="Islamabad" />
    <option value="Lahore" />
    <option value="Karachi" />
    <option value="Peshawar" />
     </datalist>

     </div>

        <div className=' flex flex-col space-y-3'> 
  <label htmlFor="Pick-up" className='flex text-xl font-bold gap-x-2 items-center'><Calendar className="w-6 h-6 text-red-600" strokeWidth={3}/>Pick-Up Date</label>

  <input type='date' id="Pickup" name="Pick-up" className="outline-none px-3 py-0.5 font-light rounded border-none"   />

     </div>

        <div className=' flex flex-col  space-y-3'> 
  <label htmlFor="Dropof" className='flex text-xl font-bold gap-x-2 items-center'><MapPin className="w-6 h-6 text-red-600" strokeWidth={3}/>Drop-of</label>

  <input list="Drop-of" id="Dropof" name="Dropof" className="outline-none px-3 py-0.5 rounded border-none" placeholder='Select drop of location ' />

  <datalist id="Drop-of">
    <option value="Islamabad" />
    <option value="Lahore" />
    <option value="Karachi" />
    <option value="Peshawar" />
     </datalist>

     </div>
<div>
    <div className=' flex flex-col md:space-y-3'> 
     <label htmlFor="dropof" className='flex text-xl font-bold gap-x-2 items-center'><Calendar className="w-6 h-6 text-red-600" strokeWidth={3}/>Drop of Date</label>

  <input type='date' id="dropof" name="dropof" className="outline-none sm:mt-2 px-3 py-0.5 font-light rounded border-none" />
</div>
     </div>
     <div className='flex  justify-center items-center'> 
     <Button className=' px-20  py-3 cursor-pointer '> Search <LucideUserRoundSearch/> </Button>
     </div>
         </div>
       
    </div>
    
    </>
  )
}

export default Book