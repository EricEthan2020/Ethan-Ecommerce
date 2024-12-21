import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ currentPageTitle,currentPagecategory }) => {
  if (!currentPageTitle) {
    return null; // Return null or render a fallback UI if currentPageTitle is missing
  }

  return (
    <div className="text-gray-500 rounded-lg p-3 flex gap-2" aria-label="Breadcrumb">
      <Link to="/" className="text-gray-500 hover:text-blue-500">
        Home
      </Link>
      <span>/</span>
      <p className=' line-clamp-1 text-nowrap hover:text-blue-500'>{currentPageTitle}</p>
    </div>
  );
};

export default Breadcrumbs;
