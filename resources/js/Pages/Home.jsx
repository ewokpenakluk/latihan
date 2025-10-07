import React from 'react';

// Data contoh untuk produk
const products = [
  { name: 'Nanas Simadu', image: 'https://via.placeholder.com/150' },
  { name: 'Rengginang Ketakapur', image: 'https://via.placeholder.com/150' },
  { name: 'Tutut Jeding', image: 'https://via.placeholder.com/150' },
  { name: 'Abon Gurih', image: 'https://via.placeholder.com/150' },
];

const ProductCard = ({ product }) => (
  <div className="border rounded-lg text-center bg-white shadow">
    <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-t-lg" />
    <div className="p-4">
      <h3 className="font-semibold">{product.name}</h3>
      <button className="mt-2 px-4 py-1 bg-green-500 text-white text-sm rounded-full hover:bg-green-600">
        Lihat Produk
      </button>
    </div>
  </div>
);

export default function Home() {
  return (
    // Konten ini akan masuk ke dalam {children} di MainLayout.jsx
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="bg-green-500 text-white p-3 rounded-t-lg mb-4">
        <h2 className="text-lg font-bold">PRODUK UNGGULAN BUMDES</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <div className="text-right mt-4">
          <a href="#" className="text-green-600 hover:underline text-sm">Lihat semua produk →</a>
      </div>
    </div>
  );
}