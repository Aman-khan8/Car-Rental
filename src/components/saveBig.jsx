import React from 'react'

function saveBig() {
  return (
    <>
    <div className='w-full '> 
    <div className='w-full bg-black h-[30%]  flex flex-col  justify-center items-center gap-y-4 '>
        <h1 className='text-white text-2xl '>Save <span className='text-red-500'>big</span> with our car rental service</h1>
        <p className='text-white'>Top Airports. Local Suppliers. <span className='text-red-500'>24/7</span> support</p>
    </div>
    <div className='w-[100%] flex justify-center items-center '>
        <img src="https://images.cars.com/in/v2/stock_photos/77aeca88-d0af-4824-bbfd-d84ce2538524/1af0ca3f-5236-47a5-a487-32b49ec94f27.png?w=1000" alt="pic" className='sm:w-[50%] w-full '/>
    </div>
    </div>
    </>
  )
}

export default saveBig