import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/Products';

const ProductDetail = () => {
    const { productId } = useParams();
    const currentProduct = products.find((product) => product.id === parseInt(productId));
    const currentRate = currentProduct.rating.rate.toFixed(0);
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <svg key={i} className={` mt-auto size-6 stroke-blue-500 ${i <= currentRate ? "  fill-yellow-300" : ""} stroke-blue-500 fill-yellow-300"`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>

        )
    }
    if (!currentProduct) {
        return <p>Product not found</p>;
    }
    return (
        <div className='p-10 m-5 gap-5 lg:m-10 flex items-center bg-slate-50 rounded-xl'>
            {/* Product Images */}
            <div className='flex flex-col p-5 items-center'>
                <img
                    src={currentProduct.image}
                    className='md:h-60  md:w-60 lg:h-80 lg:w-60 w-20  object-cover rounded-lg'
                    alt={currentProduct.title}
                />
                <div className='flex gap-2 justify-center mt-5'>
                    <img src={currentProduct.image} className='h-20 w-20' alt={currentProduct.title} />
                    <img src={currentProduct.image} className='h-20 w-20' alt={currentProduct.title} />
                    <img src={currentProduct.image} className='h-20 w-20' alt={currentProduct.title} />
                </div>
            </div>

            {/* Product Details */}
            <div className='p-5 flex flex-col gap-5 m-3 mt-0'>
                <p className='font-bold text-blue-900 text-xs md:text-xl lg:text-2xl line-clamp-2'>
                    {currentProduct.title}
                </p>
                <div className=''>
                    <p className='lg:text-2xl text-center text-xs  bg-slate-200 p-3 w-fit rounded-md text-blue-500 font-bold'>{currentProduct.category}</p>
                </div>
                <p className='flex'>
                    {stars}
                </p>
                <p className='lg:text-2xl lg:text-left sm:text-sm text-xs lg:w-[50%]'>{currentProduct.description}</p>
                <p className='font-semibold text-lg'>
                    {(currentProduct.price)*7000}MMK
                </p>
            </div>
        </div>
    );
}

export default ProductDetail;
