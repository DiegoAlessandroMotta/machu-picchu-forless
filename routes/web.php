<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Models\Contact;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
  return Inertia::render('Home');
});

Route::get('/tour/{id}', function (string $id) {
  return Inertia::render('Tour', [
    'id' => $id
  ]);
});

Route::get('/booking', function () {
  return Inertia::render('Booking');
});

Route::get('/paypal-test', function () {
  return Inertia::render('PaypalTest');
});

// Route::post('/api/checkout', [PayPalController::class, 'create']);

// Route::get('/download-file', function () {
//   $path = storage_path('app/private/file.jpg');
//   return response()->download($path);
// });

Route::prefix('dashboard')->middleware(['auth', 'verified'])->group(function () {
  Route::get('/', [DashboardController::class, 'overview'])->name('dashboard');
  Route::get('/analytics', [DashboardController::class, 'analytics'])->name('dashboard.analitics');
  Route::get('/tours', [DashboardController::class, 'list_tours'])->name('dashboard.tours.list');
  Route::get('/tours/create', [DashboardController::class, 'create_tours'])->name('dashboard.tours.create');
  Route::post('/tours/create', [DashboardController::class, 'store_tour'])->name('dashboard.tours.create');
});

Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
