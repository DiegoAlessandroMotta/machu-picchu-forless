<?php

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
  $tour = (new ToursController())->show($identifier);
  $countries = Country::orderBy('name', 'asc')->get();

  return Inertia::render('Tour', [
    'tour' => $tour,
    'countries' => $countries
  ]);
})->name('web.tours.show');

Route::prefix('/booking')->group(function () {
  Route::get('/', [ReservationController::class, 'create'])->name('reservation');
  Route::post('/', [ReservationController::class, 'store'])->name('reservation.create');
});

// Route::get('/paypal-test', function () {
//   return Inertia::render('PaypalTest');
// });

// Route::post('/api/checkout', [PayPalController::class, 'create']);

// Route::get('/download-file', function () {
//   $path = storage_path('app/private/file.jpg');
//   return response()->download($path);
// });

require __DIR__ . '/auth.php';
