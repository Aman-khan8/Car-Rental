import React from 'react'

function Reviewcards({name,passion='',review,rating=5,url=''}) {
  return (
    <div className="w-full flex justify-center p-4 ">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-6 space-y-4">
        
        {/* Reviewer */}
        <div className="flex items-center space-x-4">
          <img 
            src={url} 
            alt="Reviewer" 
            className="w-16 h-16 rounded-full object-fit shadow-md"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500">{passion}</p>
          </div>
        </div>

        {/* Review Text */}
        <p className="text-gray-700 leading-relaxed">
         {review}
        </p>

        {/* Rating */}
        <div className="flex space-x-1 text-yellow-500">
          {[...Array(rating)].map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reviewcards
