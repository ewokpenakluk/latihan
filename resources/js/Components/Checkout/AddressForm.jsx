import React from 'react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

export default function AddressForm({ values, errors, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...values, [name]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <InputLabel htmlFor="nama" value="Nama Penerima" />
        <TextInput
          id="nama"
          name="nama"
          value={values.nama}
          onChange={handleChange}
          className="mt-1 block w-full"
        />
        <InputError message={errors.nama} className="mt-1" />
      </div>

      <div>
        <InputLabel htmlFor="telepon" value="Nomor Telepon" />
        <TextInput
          id="telepon"
          name="telepon"
          value={values.telepon}
          onChange={handleChange}
          className="mt-1 block w-full"
        />
        <InputError message={errors.telepon} className="mt-1" />
      </div>

      <div>
        <InputLabel htmlFor="alamat" value="Alamat Lengkap" />
        <TextInput
          id="alamat"
          name="alamat"
          value={values.alamat}
          onChange={handleChange}
          className="mt-1 block w-full"
        />
        <InputError message={errors.alamat} className="mt-1" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <InputLabel htmlFor="kota" value="Kota/Kabupaten" />
          <TextInput
            id="kota"
            name="kota"
            value={values.kota}
            onChange={handleChange}
            className="mt-1 block w-full"
          />
          <InputError message={errors.kota} className="mt-1" />
        </div>
        <div>
          <InputLabel htmlFor="kodepos" value="Kode Pos" />
          <TextInput
            id="kodepos"
            name="kodepos"
            value={values.kodepos}
            onChange={handleChange}
            className="mt-1 block w-full"
          />
          <InputError message={errors.kodepos} className="mt-1" />
        </div>
      </div>
    </div>
  );
}
