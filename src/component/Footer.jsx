import React from 'react'

const Footer = () => {
  const date = new Date();
  return (
    <div className='p-2 mt-auto'>
      <div className='bg-blue-500 py-4 rounded-md'>
      <p className='text-slate-100 text-center mx-2'>Copyright &copy; {date.getDate()},{date.getUTCMonth()+1},{date.getFullYear()} Ethan Ecommerce</p>
      </div>
    </div>
  )
}

export default Footer
