import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/Products';

const ProductDetail = () => {
    const { productId } = useParams();
    const [currencyRate, setCurrencyRate] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch the currency conversion rate (MMK)
    useEffect(() => {
        const fetchCurrencyRate = async () => {
            try {
                const response = await fetch('https://api.currencyfreaks.com/latest?base=USD');
                const data = await response.json();
                setCurrencyRate(data.rates.MMK); // Assuming 'MMK' is part of the response
            } catch (error) {
                console.error('Error fetching currency rate:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCurrencyRate();
    }, []);

    // Find the product based on productId
    const currentProduct = products.find((product) => product.id === parseInt(productId));

    if (!currentProduct) {
        return <p>Product not found</p>;
    }

    const convertedPrice = currencyRate ? (currentProduct.price * currencyRate).toFixed(2) : 'Loading...';

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

                <p className='lg:text-2xl lg:text-left sm:text-sm text-xs lg:w-[50%]'>{currentProduct.description}</p>
                <p className='font-semibold text-lg'>
                    {loading ? 'Loading price...' : `${convertedPrice} MMK`}
                </p>
            </div>
        </div>
    );
}

export default ProductDetail;
