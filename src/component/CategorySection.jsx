import React from 'react'
import CategoryButton from './CategoryButton';
import useCategorystore from '../store/useCategorystore';

const CategorySection = () => {
    const title = "Product Categories";
    const {categories,isActive} = useCategorystore();
  return (
   <>
       <div id="category-section" className='p-5 mt-20'>
        <p className="text-2xl font-semibold mb-4 text-blue-500">{title}</p>
        <div className='flex overflow-auto hideScroll'>
          {categories.map((category) => (
            <CategoryButton key={category.id} current={category.isActive} category={category}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default CategorySection
