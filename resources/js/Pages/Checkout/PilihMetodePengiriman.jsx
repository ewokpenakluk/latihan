import React, { useMemo, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import DeliveryMethodCard from '@/Components/Checkout/DeliveryMethodCard';
import AddressForm from '@/Components/Checkout/AddressForm';
import StorePickupSelector from '@/Components/Checkout/StorePickupSelector';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';

export default function PilihMetodePengiriman() {
  const [method, setMethod] = useState('delivery'); // 'delivery' | 'pickup'
  const [address, setAddress] = useState({
    nama: '',
    telepon: '',
    alamat: '',
    kota: '',
    kodepos: '',
  });
  const [selectedStoreId, setSelectedStoreId] = useState(null);
  const [errors, setErrors] = useState({});

  const stores = useMemo(() => [
    { id: 'st01', name: 'Toko Pusat', address: 'Jln. Merdeka No. 1, Jakarta', hours: '09.00 - 21.00' },
    { id: 'st02', name: 'Toko Selatan', address: 'Jln. Pahlawan No. 10, Bandung', hours: '10.00 - 20.00' },
  ], []);

  const validate = () => {
    const nextErrors = {};
    if (method === 'delivery') {
      if (!address.nama) nextErrors.nama = 'Nama penerima wajib diisi';
      if (!address.telepon) nextErrors.telepon = 'Nomor telepon wajib diisi';
      if (!address.alamat) nextErrors.alamat = 'Alamat wajib diisi';
      if (!address.kota) nextErrors.kota = 'Kota/Kabupaten wajib diisi';
      if (!address.kodepos) nextErrors.kodepos = 'Kode pos wajib diisi';
    } else if (method === 'pickup') {
      if (!selectedStoreId) nextErrors.store = 'Silakan pilih toko pengambilan';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = () => {
    if (!validate()) return;
    // Lanjutkan ke langkah berikutnya (simulasi)
    alert(
      method === 'delivery'
        ? `Metode: Antar ke rumah\nNama: ${address.nama}\nAlamat: ${address.alamat}, ${address.kota} ${address.kodepos}`
        : `Metode: Ambil di toko\nToko: ${stores.find((s) => s.id === selectedStoreId)?.name || ''}`
    );
  };

  return (
    <>
      <Head title="Pilih Metode Pengiriman" />
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Pilih antar ke rumah atau ambil di toko</h1>
          <p className="mt-1 text-sm text-gray-600">Silakan pilih salah satu metode berikut untuk melanjutkan.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <DeliveryMethodCard
            id="delivery"
            title="Antar ke Rumah"
            description="Kami kirim ke alamatmu"
            selected={method === 'delivery'}
            onSelect={setMethod}
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M3 6.75A.75.75 0 0 1 3.75 6h10.5a.75.75 0 0 1 .75.75V9h2.318c.2 0 .393.08.535.222l2.25 2.25c.141.141.222.334.222.535V15a.75.75 0 0 1-.75.75h-1.318a2.251 2.251 0 0 1-4.365 0H9.818a2.251 2.251 0 0 1-4.365 0H3.75A.75.75 0 0 1 3 15V6.75ZM12 7.5H4.5v1.5H12V7.5Zm5.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-9.75.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM18 10.5h2.19L18.94 9.25H18V10.5Z"/></svg>}
          />
          <DeliveryMethodCard
            id="pickup"
            title="Ambil di Toko"
            description="Ambil pesanan di toko terdekat"
            selected={method === 'pickup'}
            onSelect={setMethod}
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 2.25a.75.75 0 0 1 .53.22l8.25 8.25a.75.75 0 0 1-1.06 1.06L12 4.06 4.28 11.78a.75.75 0 0 1-1.06-1.06l8.25-8.25a.75.75 0 0 1 .53-.22ZM4.5 12.75v7.5h5.25v-4.5h4.5v4.5H19.5v-7.5L12 5.25l-7.5 7.5Z"/></svg>}
          />
        </div>

        <div className="mt-6 rounded-lg border border-gray-200 p-4">
          {method === 'delivery' ? (
            <AddressForm values={address} errors={errors} onChange={setAddress} />
          ) : (
            <div>
              <StorePickupSelector
                stores={stores}
                selectedStoreId={selectedStoreId}
                onSelect={setSelectedStoreId}
              />
              {errors.store && (
                <p className="mt-2 text-sm text-red-600">{errors.store}</p>
              )}
            </div>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <SecondaryButton as={Link} href={route ? route('dashboard') : '/dashboard'}>Kembali</SecondaryButton>
          <PrimaryButton onClick={handleNext}>Lanjutkan</PrimaryButton>
        </div>
      </div>
    </>
  );
}
