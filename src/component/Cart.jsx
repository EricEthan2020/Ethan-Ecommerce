import React from 'react'

const Cart = ({ Cart }) => {
  return (
    <div className='p-5 border border-black grid grid-cols-6 text-left items-center gap-5'>
      <div className=' col-span-1'>
        <img src={Cart.product.image} className="h-16" alt={Cart.product.title} />
      </div>
      <div className=' col-span-3'>
        <p className=' mb-2 text-sm'>{Cart.product.title}</p>
        <p className='text-sm text-gray-500'>Price : {Cart.product.price}</p>
      </div>
      <div className='colspan-1'>
        {Cart.quantity}
      </div>
      <div className='colspan-1 text-end lg:text-2xl sm:text-sm text-md font-bold text-yellow-300'>
        <p>{Cart.cost}</p>
      </div>
    </div>
  )
}

export default Cart