import React from 'react';

export default function StoreIcon({ className = 'w-6 h-6' }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 21v-7.5A.75.75 0 0114.25 12h.01a.75.75 0 01.75.75v7.5m-3.75-7.5A.75.75 0 0110.5 12h.01a.75.75 0 01.75.75v7.5m-3.75 0v-7.5A.75.75 0 017.5 12h.01a.75.75 0 01.75.75v7.5m-3.75 0V10.5a2.25 2.25 0 012.25-2.25h10.5a2.25 2.25 0 012.25 2.25v10.5m0-10.5c0-1.13-.82-2.067-1.875-2.222a11.912 11.912 0 00-4.277-.636H10.875a11.912 11.912 0 00-4.277.636C5.57 8.433 4.75 9.37 4.75 10.5m14.5 0v10.5a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25V10.5"
            />
        </svg>
    );
}