import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

const logoUrl = 'https://subang.go.id/images/logo-subang.png';

export default function MainLayout({ children }) {
  const [isProfilOpen, setIsProfilOpen] = useState(false);

  // Helper untuk menentukan kelas aktif pada link navbar atas
  const navLinkClass = (routeName) => {
    return route().current(routeName)
      ? 'text-green-600 font-bold' // Kelas untuk link aktif
      : 'text-gray-600 hover:text-green-600'; // Kelas untuk link tidak aktif
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar Kiri */}
      <aside className="w-64 bg-[#0A5D25] text-white flex flex-col p-4">
        <div className="flex items-center gap-4 mb-8">
          <img src={logoUrl} alt="Logo Subang" className="h-12 w-12" />
          <div>
            <h2 className="font-bold text-sm leading-tight">PEMERINTAH DAERAH</h2>
            <h1 className="font-bold text-lg leading-tight">KABUPATEN SUBANG</h1>
          </div>
        </div>
        <nav className="flex-grow">
          <ul>
            <li className="mb-2">
              <button
                onClick={() => setIsProfilOpen(!isProfilOpen)}
                className="w-full text-left flex justify-between items-center p-2 rounded hover:bg-green-700 focus:bg-green-700 outline-none"
              >
                <span>PROFIL DESA</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${isProfilOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${isProfilOpen ? 'max-h-40' : 'max-h-0'}`}>
                <ul className="py-2">
                  <li className="mb-1"><Link href="#" className="block p-2 rounded hover:bg-green-800 text-sm">Visi & Misi</Link></li>
                  <li><Link href="#" className="block p-2 rounded hover:bg-green-800 text-sm">Sejarah Desa</Link></li>
                </ul>
              </div>
            </li>

            <li className="mb-2"><Link href="#" className="block p-2 rounded hover:bg-green-700">POTENSI DESA</Link></li>
            <li className="mb-2"><Link href="#" className="block p-2 rounded hover:bg-green-700">BUMDES</Link></li>
            <li className="mb-2"><Link href="#" className="block p-2 rounded hover:bg-green-700">PEMERINTAH DESA</Link></li>
            <li className="mb-2"><Link href="#" className="block p-2 rounded hover:bg-green-700">PROGRAM DESA</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Konten Utama */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md">
           <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            {/* 👇 PERUBAHAN UTAMA DI SINI 👇 */}
            <div className="flex items-center space-x-8">
              <Link href={route('layanan')} className={navLinkClass('layanan')}>
                LAYANAN
              </Link>
              <Link href="#" className={navLinkClass('berita')}>BERITA</Link>
              <Link href="#" className={navLinkClass('info-grafis')}>INFO GRAFIS</Link>
              <Link href="#" className={navLinkClass('galeri')}>GALERI</Link>
              <Link href="#" className={navLinkClass('kontak')}>HUBUNGI KAMI</Link>
            </div>
            {/* 👆 BATAS AKHIR PERUBAHAN 👆 */}
            <div className="flex items-center space-x-4">
              <input type="search" placeholder="Cari di sini..." className="px-4 py-2 border rounded-full text-sm" />
              <Link href="#" className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">
                Login
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-grow p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

