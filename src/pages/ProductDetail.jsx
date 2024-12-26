import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/Products';
import Rating from '../component/Rating';
import ProductNotFound from '../component/ProductNotFound';
import Breadcrumbs from '../component/Breadcrumbs';

const ProductDetail = () => {
  const { productId } = useParams();
  const currentProduct = products.find((product) => product.id === parseInt(productId));

  if (!currentProduct) {
    return <ProductNotFound />;
  }

  return (
    <div className="p-10 m-5 mt-20 gap-10 lg:mt-20 lg:m-10 lg:flex-row items-center bg-slate-50 rounded-xl">
      <Breadcrumbs currentPageTitle={currentProduct.title} currentPagecategory={currentProduct.category} />
      {/* Product Images */}
      <div className="flex flex-col p-5 items-center mt-10">
        <img
          src={currentProduct.image}
          className="md:w-64 sm:w-36 w-3/6 lg:w-64 object-cover rounded-lg aspect-auto"
          alt={currentProduct.title}
        />
        <div className="flex gap-2 sm:max-w-3xl md:w-3/4 justify-center mt-5">
          <img src={currentProduct.image} className="h-20 w-20" alt={currentProduct.title} />
          <img src={currentProduct.image} className="h-20 w-20" alt={currentProduct.title} />
          <img src={currentProduct.image} className="h-20 w-20" alt={currentProduct.title} />
        </div>
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col gap-5 m-3 mt-0">
        <p className="font-bold text-blue-900 text-xs md:text-xl lg:text-2xl line-clamp-2">
          {currentProduct.title}
        </p>
        <div>
          <p className="lg:text-2xl text-center text-xs bg-slate-200 p-3 w-fit rounded-md text-blue-500 font-bold">
            {currentProduct.category}
          </p>
        </div>

        {/* Rating */}
        <div className="flex justify-left">
          <Rating rate={currentProduct.rating.rate} />
        </div>

        <p className="lg:text-2xl lg:text-left sm:text-sm text-xs lg:w-[50%]">{currentProduct.description}</p>
        <div className='flex justify-between items-center text-center mt-auto'>
          <p className="font-semibold text-lg">{(currentProduct.price) * 7000} MMK</p>
          <button className="group text-sm px-6 py-2 border rounded-md border-blue-500 hover:bg-blue-500 font-bold">
            <svg className="w-8 h-8 text-blue-500 group-hover:text-white hover:text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductDetail;
