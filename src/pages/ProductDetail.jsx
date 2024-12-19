import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/Products';

const ProductDetail = () => {
    const { productId } = useParams();

    // Assuming the id in products is a string or number, you can convert productId to a number for comparison.
    const currentProduct = products.find((product) => product.id === parseInt(productId));
    if (!currentProduct) {
        return <p>Product not found</p>;
    }

    console.log(currentProduct);
    return (
        <div className='p-10 m-5 gap-5 lg:m-10 flex items-center bg-slate-50 rounded-xl'>
           <div>
           <img src={currentProduct.image} className=' h-30 w-20' alt={currentProduct.title} />
           <div className='flex gap-2 justify-center mt-5'>
           <img src={currentProduct.image} className='h-10' alt={currentProduct.title}/>
           <img src={currentProduct.image} className='h-10' alt={currentProduct.title}/>
           <img src={currentProduct.image} className='h-10' alt={currentProduct.title}/>
           </div>
           </div>
            <div className='p-5 flex flex-col gap-5 m-3'>
                <p className='font-bold text-blue-500'>{currentProduct.title}</p>
                    <p>{currentProduct.category}</p>
                    <p>{currentProduct.description}</p>
        </div>
    </div>
    );
}

export default ProductDetail;
