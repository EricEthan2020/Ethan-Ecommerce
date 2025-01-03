import React from 'react'
import useCategorystore from '../store/useCategorystore'
const CategoryButton = ({category:{id,name,isActive},}) => {
    const {ActiveCategory} = useCategorystore();
    const handleClick = () =>{
        ActiveCategory(id);
    };
    return (
        <button onClick={handleClick} className={` text-2xl ${
            isActive ? "bg-blue-500 uppercase text-3xl text-slate-100 font-bold" : "" 
        } py-2 px-4 me-2 border capitalize font-semibold border-blue-500 rounded  text-nowrap hover:bg-blue-500 hover:text-slate-100`}>
            {name}
        </button>
    )
}

export default CategoryButton
