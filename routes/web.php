<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\ToursController;
use App\Models\Country;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
  $tours = DB::table('tours')
    ->orderBy('tours.created_at', 'desc')
    ->limit(6)
    ->get();

  return Inertia::render('Home', [
    'tours' => $tours
  ]);
});

Route::get('/tour/{id}', function (string $identifier) {
  $tour = new ToursController()->show($identifier);
  $countries = Country::orderBy('name', 'asc')->get();

  return Inertia::render('Tour', [
    'tour' => $tour,
    'countries' => $countries
  ]);
});

Route::prefix('/booking')->group(function () {
  Route::get('/', [ReservationController::class, 'create'])->name('reservation');
  Route::post('/', [ReservationController::class, 'store'])->name('reservation.create');
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
