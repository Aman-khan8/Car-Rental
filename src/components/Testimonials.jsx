import React from 'react'
import Button from './Button'
import Reviewcards from './Reviewcards'
function testimonials() {
   
    
return(
  <>
  <div className='sm:w-[80%] w-full sm:mt-20 flex flex-col'> 
        <div className=" flex flex-col items-center text-center gap-2 p-6 ">
        <h4 className="text-xl font-bold">Review's by People</h4>
        <h1 className="text-4xl font-bold">Client's Testimonials</h1>
        <p className='text-center w-100 font-light'>Our clients love the seamless car rental experience, excellent customer care, top-notch safety measures, and reliable, stylish vehicles every time</p>
     
      </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10'>
              <div className=' w-full '>
                      <Reviewcards name={'Sarah Johnson'} passion='Frequent Traveler' review={'This is by far the best car rental company I’ve ever used. The staff were extremely polite and professional, and they made sure I got the exact car I needed. The vehicle was spotless, fuel-efficient, and handled perfectly throughout my trip. The clear safety measures and hassle-free return process truly made it a premium experience at an affordable price.'} rating={5} url='https://static.vecteezy.com/system/resources/previews/005/131/823/non_2x/beautiful-confident-woman-portrait-in-studio-free-photo.jpg' />
                      
                        </div>
                        <div className=' w-full'> 
                       <Reviewcards name={'John Cena'} passion='First Time User' review={'This is by far the best car rental company I’ve ever used. The staff were extremely polite and professional, and they made sure I got the exact car I needed. The vehicle was spotless, fuel-efficient, and handled perfectly throughout my trip. I also appreciated the clear safety measures and hassle-free return process. It truly felt like a premium experience at an affordable price. I’m looking forward to renting again very soon'} rating={4} url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGaOHr5qOwpKDQnnx3CtOikyklmxsm8kE7g&s' />

             
                   </div>
        </div>
      </div>
  
  </>
)
  
}

export default testimonials