import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='p-4 md:p-5 flex justify-between text-center items-center bg-slate-100 shadow-md'>
      <Link to={"/"} className="font-bold text-2xl lg:text-4xl md:text-3xl sm:text-2xl text-blue-500 uppercase">Ethan Ecommerce</Link>

      <div>
        <div className="text-center">
        
          <div className='font-bold flex text-center items-center'>
          <svg className="stroke-current hover:stroke-blue-500 hover:fill-white hover:shadow-slate-700 hover:shadow-sm-light hover:text-blue-500 w-8 h-8 text-xl rounded-md   text-blue-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>
           <div className=' group'>
           <Link to={"/my-cart"} className='flex group-hover:text-blue-500 py-3 group-hover:rounded-md px-4'>
              <svg className=" stroke-current group-hover:stroke-blue-500 group-hover:fill-white group-hover:shadow-sm-light group-hover:shadow-slate-700 w-8 h-8 text-xl group-hover:rounded-md text-blue-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z" />
              </svg>
              <span className='absolute top-[10px] right-[15px] bg-red-500 text-slate-100 border border-slate-300 rounded-full w-7 h-7 flex justify-center items-center'>
                0
              </span>
            </Link>
           </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
