import React from 'react'
import Button from './Button'
import { useState } from 'react'
import model1 from "../assets/model1.jpg"
function Model() {
   
    
const  cars=[{
        name:'Suzuki Alto',
        engine:'658 cc R06A I3',
        fuelEconomy:'18 KM/L city,22 KM/L highway',
        capacity:'4',
        transmission:'Manual / AGS Auto',
        rent: '25$',
        path: model1
     
         
    },
    {
        name:'Suzuki Cultus',
        engine:'996 cc K10B',
        fuelEconomy:'12 KM/L city,18 KM/L highway',
        capacity:'5',
        rent: '28$',
        path:'https://suzukifortmotors.com/wp-content/uploads/2020/12/Suzuki-Cultus-White.jpg',
        transmission:'Manual / AGS Auto',
          
    },
    {
        name:'Honda City',
        engine:'118 hp',
        fuelEconomy:'14 KM/L city,21 KM/L highway',
        capacity:'5',
        rent: '32$',
        transmission:'Manual / AGS Auto',
        path:'https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg?1651424945'
                 
    },
     {
        name:'Toyota Yaris',
        engine:'1.5L ~106 hp',
        fuelEconomy:'15 KM/L city,21 KM/L highway',
        capacity:'5',
        rent: '38$',
        transmission:'CVT / MT',
        path:'https://media.toyota.com.ar/5019492b-2618-458b-91ee-6cefd1ca98a0.png'
         
    },
     {
        name:'Changan Alsvin',
        engine:'1.3L 1370 cc',
        fuelEconomy:'16 KM/L city,19 KM/L highway',
        capacity:'5',
        rent: '38$',
        transmission:'MT / 5-speed DCT',
        path:'https://changansouth.com/wp-content/uploads/2024/07/Changan-Alsvin-black-edition.jpg'
    },
     {
        name:'KIA Sportage',
        engine:'1999 cc, 155 hp @ 6200 rpm, 196 Nm @ 4000 rpmc',
        fuelEconomy:'10 KM/L city, 12 KM/L highway',
        capacity:'7',
        rent: '45$',
        transmission:'Automatic',
         path:'https://rently.pk/content/vehicles/1730196203333-Kia%20Sportage%20crpt.jpg'
    },    

]
 const [activeCar,setActiveCar]=useState(cars[0]);
  const [activeCarName,setActiveCarName]=useState(cars[0].name);
  return (
   <>
   <div className='w-[80%]'> 
        <div className=" flex flex-col items-center text-center gap-2 p-6 sm:pl-0 pl-20 ">
        <h4 className="text-xl">Vehicle Models</h4>
        <h1 className="text-2xl font-bold">Our rental fleets</h1>
        <p>Choose from our variety of vehicle to rent for your next trip</p>
     
      </div>
   <div className="sm:flex w-full ">
  <div className="w-1/3 flex sm:flex-col items-start">
    {cars.map((car) => (
      <Button
        key={car.name}
        bgColor={car.name === activeCarName ? "bg-red-500" : "bg-white"}
        textColor={car.name === activeCarName ? "text-white" : "text-black"}
        className="hover:bg-red-500 hover:text-white mb-4"
        onClick={() => {
          setActiveCarName(car.name);
          setActiveCar(car);
        }}
      >
        {car.name}
      </Button>
    ))}
  </div>

  
  <div className="sm:w-2/3 sm:flex items-center justify-between space-y-10">
  <div className='w-full flex justify-center items-center ml-20 sm:ml-0'> 
    <img src={activeCar.path} alt={activeCar.name} className='sm:w-[60%] w-full'/>

    </div>
    <div className='px-1 sm:w-[40%] w-full space-y-4 sm:pl-0 pl-20 '>
  <table className=" min-w-full border border-gray-300 shadow-md rounded-lg overflow-hidden">
    <thead className='bg-red-500 text-white'>
      <tr>
        <th colSpan={2} className="px-4 py-2 text-left">
          {activeCar.rent} <span className='text-xs font-normal'>/ per day</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-2 py-1 font-semibold">Engine</td>
        <td className="px-2 py-1 text-sm">{activeCar.engine}</td>
              
        <td></td>
      </tr>
      <tr>
         <td className="px-2 py-1 font-semibold">Fuel Economy</td>
        <td className="px-2 py-1 text-sm">{activeCar.fuelEconomy}</td>
               
      </tr>
      <tr>
        <td className="px-2 py-1 font-semibold">Capacity</td>
        <td className="px-2 py-1 text-sm">{activeCar.capacity}</td>
      </tr>
       <tr>
        <td className="px-2 py-1 font-semibold">Transmission</td>
        <td className="px-2 py-1 text-sm">{activeCar.transmission}</td>
      </tr>

      
    </tbody>
  </table>
  <Button className='w-full justify-center' to='book' >Resverse Now</Button>
</div>
  </div>
</div>

</div>
   </>
  )
}

export default Model