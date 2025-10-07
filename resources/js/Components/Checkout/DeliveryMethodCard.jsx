import React from 'react';

export default function DeliveryMethodCard({ id, title, description, icon, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className={
        `w-full text-left rounded-lg border p-4 transition ` +
        (selected ? 'border-indigo-600 ring-2 ring-indigo-200 bg-indigo-50' : 'border-gray-200 hover:border-gray-400')
      }
    >
      <div className="flex items-center gap-3">
        {icon && (
          <div className={`flex h-10 w-10 items-center justify-center rounded-md ${selected ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
            {icon}
          </div>
        )}
        <div>
          <div className="font-semibold text-gray-900">{title}</div>
          {description && (
            <div className="mt-1 text-sm text-gray-600">{description}</div>
          )}
        </div>
        <div className="ms-auto">
          <span className={`inline-block h-5 w-5 rounded-full border ${selected ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300'}`} />
        </div>
      </div>
    </button>
  );
}
