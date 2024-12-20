import React from 'react';
import Home from '../pages/Home';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Angry Rabbit SVG */}
      <div className="mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="text-red-500"
        >
          <path
            d="M18 10c0 1.104-.896 2-2 2s-2-.896-2-2 2-.896 2-2 2 .896 2 2zM6 10c0 1.104-.896 2-2 2s-2-.896-2-2 2-.896 2-2 2 .896 2 2z"
          />
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path
            d="M7 15c2 2 4 2 6 0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 8c1-2 3-3 4-3s3 1 4 3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      
      {/* Error Message */}
      <h2 className="text-2xl font-bold text-red-500 mb-2">Oops! Something went wrong!</h2>
      <p className="text-xl text-gray-700">Don't worry, we're working on it.</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-5 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Reload Page
      </button>
      <Link to="/" className="mt-5 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Home</Link>
    </div>
  );
};

export default ErrorPage;
