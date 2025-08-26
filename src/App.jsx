import { useState } from 'react'
import { Link } from 'react-scroll'
import Navbar from './components/Navbar'
import About from'./components/About'
import Home from './components/Home'
import Book from './components/Book'
import Testimonials from './components/testimonials'
import Model from './components/Model'
import Contact from './components/Contact'
import SaveBig from './components/saveBig'

function App() {


  return (
    <>

  <Navbar/>

  <section id='home' className='w-full relative h-[90vh] flex justify-center items-center'>

   <Home/>
  </section>

  <section id='book' className='w-full  h-[60vh] sm:flex justify-center  '>
   <Book/>
  </section>
   
   <section id='about' className='w-full  sm:h-[60vh] h-[100vh] mt-20 md:mt-0 flex  justify-center items-center'>
      <About/>
   </section>
     <section id='models' className='w-full h-[100vh] sm:flex justify-center items-center '>
     <Model/>
   </section>
    <section id='saveBig' className='w-full sm:h-[100vh] sm:flex justify-center '>
<SaveBig/>     
   </section>
   <section id='testimonials' className='w-full  min-h-full sm:flex justify-center items-center '>
    <Testimonials/>
   </section>
      <section id='contact' className='w-full  min-h-full sm:h-[50vh]  bg-gray-100 sm:mt-10 sm:flex justify-center items-center'>
    <Contact/>
   </section>
    </>
  )
}

export default App
