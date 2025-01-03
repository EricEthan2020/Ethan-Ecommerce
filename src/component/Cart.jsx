import React from 'react';
import useProductStore from '../store/useProductStore';

const Cart = ({ cart: { id, productId, quantity } }) => {
  const { products } = useProductStore();
  const product = products.find((el) => el.id === productId);

  // If product is not found, handle gracefully
  if (!product) {
    return (
      <div className="border border-black p-5">
        <p className="text-red-500">Product not found</p>
      </div>
    );
  }

  const cost = product.price * quantity;

  return (
    <div className="border border-black p-5 grid grid-cols-6">
      <div className="col-span-1">
        <img className='w-20 h-20' src={product.image} alt={product.title} />
      </div>
      <div className="col-span-3 flex flex-col gap-3">
        <p className=' line-clamp-2 font-bold'>{product.title}</p>
        <p className="text-gray-500">Price ({product.price})</p>
      </div>
      <div className="col-span-1">
        <p className="mb-2 font-bold justify-center items-center">Quantity</p>
        <div className="flex gap-3">
          <button className="bg-blue-500 text-white px-3 py-2 rounded-lg">-</button>
          {quantity}
          <button className="bg-blue-500 text-white px-3 py-2 rounded-lg">+</button>
        </div>
      </div>
      <div className="col-span-1 flex justify-center items-center ml-4">
        <p className="text-end text-md font-bold text-yellow-300 mt-3">{cost}</p>
      </div>
    </div>
  );
};

export default Cart;
