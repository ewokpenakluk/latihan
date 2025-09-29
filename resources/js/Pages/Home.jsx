// resources/js/Pages/Home.jsx

import React from 'react';
import MainLayout from '@/Layouts/MainLayout';

export default function Home() {
  return (
    // Di sini kita "membungkus" konten halaman Home dengan MainLayout.
    // Semua yang ada di dalam <MainLayout> ... </MainLayout>
    // akan menjadi properti "children" di file MainLayout.jsx
    <MainLayout>
      <div>
        <h1>Konten Utama Halaman Home</h1>
        <p>
          Selamat datang! Konten ini adalah bagian unik dari halaman Home,
          sedangkan Navbar di atas datang dari komponen Layout.
        </p>
      </div>
    </MainLayout>
  );
}