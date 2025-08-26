import React from 'react'
import { Link } from 'react-scroll'
import Logo from './CarRentalLogo.png'
import { Menu, X } from "lucide-react";
import Button from './Button';
import { useState } from 'react';

function Navbar() {
  const navItems = [
    { path: 'home', Children: 'Home' },
    { path: 'about', Children: 'About' },
    { path: 'models', Children: 'Vehicle Models' },
    { path: 'testimonials', Children: 'Testimonials' },
    { path: 'contact', Children: 'Contact' }
  ];
  const [isOpen,setIsOpen]=useState(false);

  return (
    <> 
      <div className=" flex justify-between w-full h-[10vh] p-8 md:p-3 bg-white lg:px-40 sticky top-0 shadow-md items-center ">
        
        <div className="w-14 h-14">
          <img src={Logo} alt="logo" className="w-full h-full object-contain" />
        </div>
        <div className="hidden sm:flex gap-4 text-base font-medium">
          {navItems.map((item) => (
            <div key={item.Children}>
              <Link 
                to={item.path} 
                smooth={true} 
                duration={500} 
                className="cursor-pointer hover:text-red-500 transition"
              >
                {item.Children}
              </Link>
            </div>
          ))}
        </div>
<div className="sm:hidden">
  <button onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? <X size={28} /> : <Menu size={28} />}
  </button>
</div>


     <div className='sm:flex hidden items-center'>
        <Button className='font-base cursor-pointer' bgColor='bg-white' textColor='text-black'>Sign Up </Button>
        <Button className='cursor-pointer '>Register</Button>
     </div>
        {isOpen&& 
<div className='sm:hidden absolute top-[10vh] left-0 w-full h-[100vh] bg-black flex flex-col text-white space-y-6 p-6 z-50'> 

     {navItems.map((item) => (
            <div key={item.Children}>
              <Link 
                to={item.path} 
                smooth={true} 
                duration={500} 
                className="cursor-pointer hover:text-red-500 transition"
                onClick={()=>setIsOpen(false)}
              >
                {item.Children}
              </Link>
            </div>
          ))}
          
                  <Button className='font-base cursor-pointer w-full justify-center' bgColor='bg-white' textColor='text-black'>Sign Up </Button>
        <Button className='cursor-pointer w-full justify-center '>Register</Button>
     </div>
}
      </div>
      

    </>
  )
}

export default Navbar
