import React, { useState } from 'react';
import Breadcrumbs from './Breadcrumbs';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import carts from '../data/Carts';

const CartSection = () => {
  return (
    <>
      <div className='flex flex-col gap-2'>
        {carts.map((cart) => (
          <Cart
            key={cart.id}
            Cart={cart}
          />
        ))}
      </div>
      <div className='p-5 flex justify-end gap-3'>
        <div className='flex flex-col gap-1 text-start'>
          <p className='flex justify-between gap-5'>
            Total Cost : <span>2</span>
          </p>
          <p className='flex justify-between gap-5'>
            Discount (10%) : <span>-2</span>
          </p>
          <p>
            Net Total : <span>2</span>
          </p>
        </div>
      </div>
      <div className='flex justify-end'>
          <Link to="/Checkout" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Checkout</Link>
        </div>
    </>
  );
};

export default CartSection;
