<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    if (App::environment('production')) {
      User::insert([
        [
          'name' => 'Admin',
          'email' => env('ADMIN_EMAIL'),
          'password' => Hash::make(env('ADMIN_PASSWORD')),
        ]
      ]);
    } else {
      User::insert([
        [
          'name' => 'Admin',
          'email' => env('ADMIN_EMAIL'),
          'password' => Hash::make(env('ADMIN_PASSWORD')),
        ]
      ]);
    }
  }
}
