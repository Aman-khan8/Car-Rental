import React from 'react'
import heroPic from '../components/HeroPic.png'
import { CheckCircle,ArrowRight } from 'lucide-react'
import Button from './Button'
function Home() {
  return (
 
    <>
     <div className='sm:w-[80%] w-[100%] h-full flex justify-center items-center gap-x-5'>
          <div className='w-[90%] flex '>
            <div className='sm:mt-30 space-y-3'> 
              <h4 className='sm:text-base text-xl font-bold'>Plan your trip now</h4>
              <h1 className='sm:text-4xl text-5xl font-bold'>
                Save  <span className='text-red-500'>big</span> with our car rental
              </h1>
              <p className='sm:text-xs text-sm'>Drive Freedom, Rent with Confidence</p>
             <div className='flex gap-x-4'> 
             <Button className='py-2 px-4 font-bold' to='book' > Book Now <CheckCircle sm:size={12} size={20} strokeWidth={4}/></Button>
            <Button className='py-2 px-4 font-bold' to='about' bgColor=' bg-black'> Learn More <ArrowRight size={12} strokeWidth={4}/></Button>
            </div>
            </div>
                  <div className='sm:w-[70%] hidden sm:flex'>
                    <img src={heroPic} alt="Hero Pic" />
                  </div>
            
          </div>
    </div>
    </>
  )
}

export default Home