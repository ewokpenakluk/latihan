import React from 'react';
import InputLabel from '@/Components/InputLabel';

export default function StorePickupSelector({ stores, selectedStoreId, onSelect }) {
  return (
    <div className="space-y-3">
      <InputLabel value="Pilih Toko Pengambilan" />
      <div className="space-y-2">
        {stores.map((store) => (
          <label key={store.id} className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 p-3 hover:border-gray-400">
            <input
              type="radio"
              name="store"
              value={store.id}
              checked={selectedStoreId === store.id}
              onChange={() => onSelect(store.id)}
              className="mt-1"
            />
            <div>
              <div className="font-medium text-gray-900">{store.name}</div>
              <div className="text-sm text-gray-600">{store.address}</div>
              {store.hours && <div className="text-xs text-gray-500">Jam buka: {store.hours}</div>}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
