<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/pilih-opsi', function () {
    return Inertia::render('PilihOpsi');
})->name('pilih-opsi');

Route::get('/home', function () {
    return Inertia::render('Home');
})->name('home'); // Tambahkan nama untuk rute home

// 👇 TAMBAHKAN RUTE BARU DI SINI 👇
Route::get('/layanan', function () {
    return Inertia::render('Layanan');
})->name('layanan');
// 👆 BATAS AKHIR RUTE BARU 👆

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
