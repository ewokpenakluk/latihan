import React from 'react';

function CheckCircleIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
    );
}

export default function OpsiButton({ onClick, title, description, icon, isSelected }) {
    return (
        <button
            onClick={onClick}
            // Menggunakan ternary operator langsung di dalam className
            className={`
                p-6 w-full text-left rounded-2xl border-2 cursor-pointer 
                transition-all duration-300 ease-in-out transform hover:-translate-y-1
                ${isSelected ? 'bg-indigo-600 border-indigo-700 scale-105' : 'bg-white border-gray-200 scale-100'}
            `}
        >
            <div className="flex items-center">
                {/* Ikon */}
                <div className="flex-shrink-0">
                    {React.cloneElement(icon, {
                        className: `h-8 w-8 transition-colors duration-300 ${isSelected ? 'text-white' : 'text-indigo-600'}`,
                    })}
                </div>

                {/* Teks */}
                <div className="ml-5 flex-grow">
                    <h3 className={`text-lg font-bold transition-colors duration-300 ${isSelected ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
                    <p className={`mt-1 text-sm transition-colors duration-300 ${isSelected ? 'text-indigo-100' : 'text-gray-500'}`}>{description}</p>
                </div>

                {/* Ikon centang */}
                {isSelected && (
                     <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                        <CheckCircleIcon />
                    </div>
                )}
            </div>
        </button>
    );
}