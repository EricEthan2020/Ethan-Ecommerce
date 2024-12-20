import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/Products';
import Rating from '../component/Rating';
import ProductNotFound from '../component/ProductNotFound';

const ProductDetail = () => {
    const { productId } = useParams();
    const currentProduct = products.find((product) => product.id === parseInt(productId));

    if (!currentProduct) {
        return <ProductNotFound/>;
    }

    return (
        <div className="p-10 m-5 mt-20 gap-10 lg:mt-20 lg:m-10  lg:flex-row items-center bg-slate-50 rounded-xl">
            <nav class="flex" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li class="inline-flex items-center">
                        <a href={"/"} class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{currentProduct.category}</a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{currentProduct.title}</span>
                        </div>
                    </li>
                </ol>
            </nav>

            {/* Product Images */}
            <div className="flex flex-col p-5 items-center">
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
