// resources/js/Layouts/MainLayout.jsx

import React from 'react';
import { Link } from '@inertiajs/react'; // Import komponen Link dari Inertia

// Ini adalah Layout Component kita.
// Perhatikan properti "children". "children" adalah representasi
// dari komponen halaman (misal: Home.jsx) yang akan "dibungkus".
export default function MainLayout({ children }) {
  return (
    <div>
      {/* Bagian Navbar */}
      <header>
        <nav style={{ display: 'flex', gap: '20px', padding: '15px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link> {/* Contoh link lain */}
          <Link href="/contact">Contact</Link> {/* Contoh link lain */}
        </nav>
      </header>

      {/* Bagian untuk konten halaman yang unik */}
      <main style={{ padding: '20px' }}>
        {children}
      </main>
    </div>
  );
}