<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\PayPalController;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
  return $request->user();
})->middleware('auth:sanctum');

Route::prefix('paypal')->group(function () {
  Route::post('/create-order', [PayPalController::class, 'create']);
  Route::post('/capture-order', [PayPalController::class, 'capture']);
});


// Route::prefix('contacts')->group(function () {
//   Route::post('/', [ContactController::class, 'store']);
//   Route::get('/', [ContactController::class, 'index'])->middleware(['auth']);
// });
