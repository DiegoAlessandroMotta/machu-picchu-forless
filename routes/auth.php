<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
// use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;

Route::prefix('/admin')->middleware(['xrobots'])->group(function () {
  Route::middleware('guest')->group(function () {
    // Route::get('register', [RegisteredUserController::class, 'create'])
    //   ->name('register');

    // Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('login', [AuthenticatedSessionController::class, 'create'])
      ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
      ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
      ->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
      ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
      ->name('password.store');
  });

  Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])
      ->name('profile.edit');

    Route::patch('/profile', [ProfileController::class, 'update'])
      ->name('profile.update');

    Route::delete('/profile', [ProfileController::class, 'destroy'])
      ->name('profile.destroy');

    Route::get('verify-email', EmailVerificationPromptController::class)
      ->name('verification.notice');

    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
      ->middleware(['signed', 'throttle:6,1'])
      ->name('verification.verify');

    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
      ->middleware('throttle:6,1')
      ->name('verification.send');

    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
      ->name('password.confirm');

    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::put('password', [PasswordController::class, 'update'])
      ->name('password.update');

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
      ->name('logout');

    Route::prefix('/dashboard')->group(function () {
      Route::get('/', [DashboardController::class, 'overview'])
        ->name('dashboard');

      Route::get('/analytics', [DashboardController::class, 'analytics'])
        ->name('dashboard.analitics');

      Route::get('/tours', [DashboardController::class, 'tours_list'])
        ->name('dashboard.tours.list');

      Route::get('/tours/create', [DashboardController::class, 'tours_create'])
        ->name('dashboard.tours.create');

      Route::post('/tours/store', [DashboardController::class, 'tours_store'])
        ->name('dashboard.tours.store');

      Route::delete('/tours/{id}', [DashboardController::class, 'tours_delete'])
        ->name('dashboard.tours.destroy');

      Route::get('/categories', [DashboardController::class, 'categories_list'])
        ->name('dashboard.categories.list');

      Route::get('/categories/create', [DashboardController::class, 'categories_create'])
        ->name('dashboard.categories.create');

      Route::post('/categories/create', [DashboardController::class, 'categories_store']);
    });
  });
});
