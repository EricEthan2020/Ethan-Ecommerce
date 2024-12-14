import React from 'react'
const CategoryButton = ({categorykey,current}) => {
    return (
        <button className={`${
            current ? "bg-blue-500 uppercase text-slate-100 font-bold" : "" 
        } py-2 px-4 me-2 border capitalize font-semibold border-blue-500 rounded  text-nowrap hover:bg-blue-500 hover:text-slate-100`}>
            {categorykey}
        </button>
    )
}

export default CategoryButton
