import React from 'react'
import { Phone, LucideMail } from 'lucide-react'
import Button from './Button'

function Contact() {
  return (
    <>
      <div className="sm:w-[90%] w-full mx-auto flex flex-col gap-y-10 sm:flex-row sm:justify-between sm:items-start">
        <div className="flex flex-col text-center sm:text-left  max-w-sm">
          <h1 className="text-xl flex justify-center">
            <span className="font-bold">Car</span> Rental
          </h1>
          <p className="font-light ml-20 sm:ml-0 w-50 text-center">
            Reliable car rentals with safety, style, customer care, and trust.
          </p>

          <div className="flex flex-col justify-center font-bold mt-6 sm:pl-0 w-full sm:items-start items-center">
            <p className="flex items-center text-sm">
              <Phone size={14} strokeWidth={3} className="mr-2" /> 
              +92 123456789
            </p>
            <p className="flex items-center text-sm font-bold mt-2">
              <LucideMail size={14} strokeWidth={4} className="mr-2"/> 
              CarRental@gmail.com
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 text-center sm:text-left">
          <h1 className="text-xl font-bold">Company</h1>
          <div className="space-y-1">
            <p className="text-sm">Lahore</p>
            <p className="text-sm">Karachi</p>
            <p className="text-sm">Islamabad</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 text-center sm:text-left">
          <h1 className="text-xl font-bold">Working Hours</h1>
          <div className="space-y-1">
            <p className="text-sm">Mon-Thurs 9:00AM to 5:00PM</p>
            <p className="text-sm">Fri 9:00AM to 3:00PM</p>
            <p className="text-sm">Sat-Sun Closed</p>
          </div>
        </div>

        <div className="flex flex-col gap-y-3 text-center max-w-sm w-full">
  <h1 className="text-xl font-bold">Subscribe</h1>
  <p>Subscribe your email address for latest news & updates</p>
  
  <input 
    type="email" 
    className="px-4 py-2 text-center outline-0 w-full bg-white text-black rounded-md" 
    placeholder="Enter Your Email" 
  />
  
  <Button className="w-full justify-center bg-red-500 hover:bg-red-600 text-white rounded-md">
    Subscribe
  </Button>
</div>


      </div>
    </>
  )
}

export default Contact
