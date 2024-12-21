import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import Cart from './Cart';
import products from '../data/Products';

const CartSection = () => {
  const carts = [
    {
      id: 1,
      product: products[1],
      quantity:3,
      cost: 66.9,
    },
    {
      id: 2,
      product: products[2],
      quantity:1,
      cost: 55.99,
    }
  ]
  return (
    <>
    <div className='flex flex-col gap-3'>
    {carts.map((cart) => (
        <Cart key={cart.id} Cart={cart} />
      ))}
    </div>
    </>
  );
}

export default CartSection;
