import React from 'react'
import CategoryButton from './CategoryButton';

const CategorySection = () => {
    const title = "Product Categories";
    const categories = [
      "Electronics",
      "Clothing",
      "Jewellery",
      "Men's Fashion",
      "Women's Fashion"
    ];
  return (
   <>
       <div id="category-section" className='p-5 mt-20'>
        <p className="text-2xl font-semibold mb-4 text-blue-500">{title}</p>
        <div className='flex overflow-auto hideScroll'>
        <CategoryButton current={true} categorykey="all"/>
          {categories.map((category) => (
            <CategoryButton key={category} current={false} categorykey={category}/>

          ))}
        </div>
      </div>
    </>
  )
}

export default CategorySection
