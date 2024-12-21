import React from 'react';
import Breadcrumbs from '../component/Breadcrumbs';
import CartSection from '../component/CartSection';
import Cart from '../component/Cart';

const MyCart = () => {
  return (
    <div className="flex w-full flex-col gap-2 p-10 justify-center items-center fixed top-24">
     <div className='w-full flex text-xl'>
       <Breadcrumbs key={"/"} currentPageTitle="My Cart" />
     </div>
      <div className='w-full'>
        <CartSection />
      </div>
    </div>
  );
};

export default MyCart;
