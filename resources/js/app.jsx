import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import MainLayout from './Layouts/MainLayout'; // <-- 1. IMPORT LAYOUT DI SINI

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    // 👇 2. MODIFIKASI BAGIAN 'RESOLVE' DI BAWAH INI 👇
    resolve: (name) => {
        const promise = resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx')
        );

        promise.then((page) => {
            // Baris ini memeriksa apakah sebuah halaman punya layout spesifik.
            // Jika tidak, maka MainLayout akan menjadi layout default.
            page.default.layout = page.default.layout || ((page) => <MainLayout>{page}</MainLayout>);
            return page;
        });

        return promise;
    },
    // 👆 SAMPAI SINI 👆
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});