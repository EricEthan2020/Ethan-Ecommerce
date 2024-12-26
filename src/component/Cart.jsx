import React, { useEffect, useState } from 'react';
const Cart = ({ Cart }) => {
  return (
  <div className='mb-5 grid grid-cols-12 text-cente justify-center border border-black rounded-lg p-3'>
<div className=' col-span-3 p-2'>
    <img className='w-20' src={Cart.product.image} alt="" />
</div>
<div className=' col-span-3 text-lg flex justify-center items-center'>
      <p className=' line-clamp-2'>{Cart.product.title}</p>
</div>
<div className='col-span-3 flex flex-col justify-center items-center'>
  <p className='flex justify-center items-center mt-3'>Quantity</p>
  <div className='flex gap-2 m-3'>
    <button className=' py-1 px-4 border text-white border-slate-600 bg-blue-500 rounded-md hover:bg-blue-300 '>
      +
    </button>
  <p className=' text-center justify-center items-center flex'>
    {Cart.quantity}
  </p>
  <button className=' py-1 px-4 border text-white border-slate-600 bg-blue-500 rounded-md hover:bg-blue-300 '>
    -
  </button>
  </div>
</div>
<div className=' col-span-3 justify-center flex flex-col gap-4 items-center'>
    <p>Total</p>
    <p>{Cart.product.price * Cart.quantity}</p>
</div>
  </div>
  );
};

export default Cart;
