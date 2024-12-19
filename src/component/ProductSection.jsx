import React from 'react'
import ProductCard from './ProductCard'
import products from '../data/Products'

const ProductSection = () => {
  
  return (
    <div className='p-5'>
        <p className=' text-blue-500 font-semibold'>Available Product lists</p>
      <div className=' grid grid-cols-1 gap-5 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid lg:grid-cols-5 '>
        {products.map((product)=>(
            <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default ProductSection
