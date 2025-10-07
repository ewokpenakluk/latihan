import React from 'react';

export default function Layanan() {
  return (
    // Konten ini akan otomatis dibungkus oleh MainLayout.jsx
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="border-b pb-4 mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Layanan Desa</h1>
        <p className="text-gray-600">Berikut adalah layanan yang tersedia untuk masyarakat desa.</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Contoh Layanan</h3>
        <p>
          Ini adalah konten placeholder untuk halaman layanan. Anda bisa mengisinya
          dengan informasi mengenai layanan pembuatan KTP, Kartu Keluarga, surat pengantar,
          dan lain-lain.
        </p>
      </div>
    </div>
  );
}
