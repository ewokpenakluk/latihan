import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import OpsiButton from '@/Components/OpsiButton';
import ApplicationLogo from '@/Components/ApplicationLogo';
import TruckIcon from '@/Components/Icons/TruckIcon';
import StoreIcon from '@/Components/Icons/StoreIcon';
import PrimaryButton from '@/Components/PrimaryButton';

export default function PilihOpsi() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleConfirm = () => {
        if (!selectedOption) {
            alert('Silakan pilih salah satu opsi terlebih dahulu.');
            return;
        }
        alert(`Pilihan Anda dikonfirmasi: ${selectedOption}`);
    };

    return (
        // Latar belakang dengan gradient
        <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            <Head title="Pilih Opsi Pengiriman" />

            <div className="text-center mb-6">
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500 inline-block" />
                </Link>
                <h1 className="text-3xl font-extrabold text-gray-900 mt-4">
                    Pilih Metode Pengambilan
                </h1>
                <p className="mt-2 text-md text-gray-600">
                    Bagaimana Anda ingin pesanan Anda di proses?
                </p>
            </div>

            {/* Kartu utama dengan gaya baru */}
            <div className="w-full max-w-4xl p-8 bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl">
                {/* Layout menjadi 2 kolom di layar medium ke atas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <OpsiButton
                        onClick={() => setSelectedOption('Antar ke Rumah')}
                        title="Antar ke Rumah"
                        description="Lebih santai, biar kami yang antar."
                        icon={<TruckIcon />}
                        isSelected={selectedOption === 'Antar ke Rumah'}
                    />
                    <OpsiButton
                        onClick={() => setSelectedOption('Ambil di Toko')}
                        title="Ambil di Toko"
                        description="Ambil sendiri lebih cepat & fleksibel."
                        icon={<StoreIcon />}
                        isSelected={selectedOption === 'Ambil di Toko'}
                    />
                </div>

                <div className="mt-8">
                    <PrimaryButton
                        className="w-full justify-center py-4 text-base font-bold"
                        onClick={handleConfirm}
                        disabled={!selectedOption}
                    >
                        Konfirmasi Metode
                    </PrimaryButton>
                </div>
            </div>
            <p className="mt-6 text-xs text-gray-500">
                Anda dapat mengubah pilihan ini nanti sebelum checkout.
            </p>
        </div>
    );
}