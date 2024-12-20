import React from 'react';

const Rating = ({ rate }) => {
    const currentRate = Math.round(rate); // Ensure rate is rounded to the nearest integer
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        stars.push(
            <svg 
                key={i}
                className={`w-6 h-6 ${i <= currentRate ? "stroke-blue-500 fill-yellow-300" : "fill-slate-300 stroke-blue-500"}`} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                fill="none" 
                strokeWidth="2"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 2l3.4 6.8 7.4.6-5.4 4.8 1.6 7.6-6.6-4.2-6.6 4.2 1.6-7.6-5.4-4.8 7.4-.6L12 2z" 
                />
            </svg>
        );
    }

    return <div className="flex gap-1">{stars}</div>;
};

export default Rating;
