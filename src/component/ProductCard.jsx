import React from 'react'

const ProductCard = ({

  product: { title, price, image, rating: { rate } } }) => {
  const currentRate = rate.toFixed(0);
    const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg key={i} className={` mt-auto size-6 stroke-blue-500 ${i<=currentRate?"  fill-yellow-300":""} stroke-blue-500 fill-yellow-300"`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>

   )
  }
  return (
    <div className='bg-slate-50 p-4 mt-5 flex flex-col gap-3 items-start' >
      <img src={image} className=' h-40' alt="" />
      <p className='font-bold line-clamp-2 text-blue-500'>{title}</p>
      <div className='flex mt-auto'>
    {stars}
      </div>
      <div className="flex justify-between w-full mt-auto">
        <p className=' sm:ms-0'>{price * 3350} MMK</p>
        <div className=' hover:text-white text-blue-500'>
          <button className=' group text-sm px-6 py-2 border rounded-md border-blue-500 hover:bg-blue-500 font-bold'>
           <svg className="w-8 h-8 text-blue-500 group-hover:text-white hover:text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
</svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
