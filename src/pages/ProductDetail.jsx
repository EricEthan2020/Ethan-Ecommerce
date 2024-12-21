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
          className="md:w-64 w-full lg:max-w-md object-cover rounded-lg"
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

        <p className="font-semibold text-lg">{(currentProduct.price) * 7000} MMK</p>
      </div>
    </div>
  );
};

export default ProductDetail;
