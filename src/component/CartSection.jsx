import React, { useState } from 'react';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import useCartStore from '../store/useCartStore';
import useProductStore from "../store/useProductStore";

const CartSection = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();
  const total = carts.reduce((pv, cv )=>{
  const price = products.find(({ id }) => id === cv.productId).price;
  const cost = price * cv.quantity;
  return pv + cost;
}, 0);
const tax = total * 0.05;
const netTotal = total + tax;
return (
  <>
    <div className='flex flex-col gap-2'>
      {carts.map((cart) => (
        <Cart
          key={cart.id}
          cart={cart}
        />
      ))}
    </div>
    <div className='p-5 flex justify-end gap-3'>
      <div className='flex flex-col gap-1 text-start'>
        <p className='flex justify-between gap-5'>
          Total Cost : <span>{total.toFixed(2)}</span>
        </p>
        <p className='flex justify-between gap-5'>
          Tax (10%) : <span className=" text-red-500">{tax.toFixed(2)}</span>
        </p>
        <p>
          Net Total : <span className=" text-green-500 font-bold ml-5 items-center text-center">{netTotal.toFixed(2)}</span>
        </p>
      </div>
    </div>
    <div className='flex justify-end'>
      <Link to="/Checkout" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Checkout
      </Link>
    </div>
  </>
);
};

export default CartSection;
