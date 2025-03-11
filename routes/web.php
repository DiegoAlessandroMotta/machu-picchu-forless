<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\ToursController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

Route::get('/', function () {
  return Inertia::render('Home');
});

Route::get('/tour/{id}', function (string $identifier) {
  $tour = new ToursController()->show($identifier);

  return Inertia::render('Tour', [
    'tour' => $tour
  ]);
});

Route::prefix('/booking')->group(function () {
  Route::get('/', [ReservationController::class, 'create'])->name('reservation');
  Route::post('/', [ReservationController::class, 'store'])->name('reservation.create');
});

Route::get('/paypal-test', function () {
  return Inertia::render('PaypalTest');
});

Route::prefix('/test-page')->group(function () {
  Route::get('/', fn() => Inertia::render('TestPage'))->name('test-page');

  Route::post(
    '/',
    function (Request $request) {
      $validator = Validator::make($request->all(), [
        'username' => ['required', 'max:12'],
        'people.*.name' => ['required', 'max:8'],
        'people.*.age' => ['required', 'numeric', 'min:18', 'max:100'],
      ]);

      if ($validator->fails()) {
        return to_route('test-page')
          ->withErrors($validator)
          ->withInput();
      }

      return to_route('test-page');
    }
  )->name('test-page');
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
