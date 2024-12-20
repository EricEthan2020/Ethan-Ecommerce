// Simple ProductNotFound Component (Optional)
import React from 'react';

const ProductNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-red-500 mb-4">No Products Available</h2>
      <p className="text-xl p-10 text-gray-700 mb-6">
        Sorry, we couldn't find any products at the moment. Please check back later.
      </p>
    </div>
  );
};

export default ProductNotFound;
