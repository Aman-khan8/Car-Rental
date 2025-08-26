import React from 'react'
import { Link } from 'react-scroll'

function Button({
  className = '',
  bgColor = 'bg-red-500',
  textColor = 'text-white',
  to='',
  children,
  ...props
}) {
  return (
    <Link to={to}
    smooth={true}
    duration={500}> 
    
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded cursor-pointer ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
    </Link>
  )
}

export default Button
