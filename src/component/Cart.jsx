import React from 'react';
import useProductStore from '../store/useProductStore';

const Cart = ({ cart: { id, productId, quantity } }) => {
  const { products } = useProductStore();
  const product = products.find((el) => el.id === productId);

  // Handle product not found
  if (!product) {
    return (
      <div className="border border-black p-5">
        <p className="text-red-500">Product not found</p>
      </div>
    );
  }

  const cost = product.price * quantity;

  return (
    <div className="border border-black p-4 flex flex-wrap items-center justify-between gap-4">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img className="w-16 h-16 object-contain" src={product.image} alt={product.title} />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-[150px]">
        <p className="font-bold text-sm sm:text-base line-clamp-2">{product.title}</p>
        <p className="text-gray-500 text-sm">Price: ${product.price.toFixed(2)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <p className="font-bold text-sm">Qty :</p>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md">-</button>
        <span className="text-sm">{quantity}</span>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md">+</button>
      </div>

      {/* Total Cost */}
      <div className="flex-shrink-0 text-yellow-400 font-bold text-sm sm:text-base">
        ${cost.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
