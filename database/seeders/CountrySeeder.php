<?php

namespace Database\Seeders;

use App\Models\Country;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;

class CountrySeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    if (App::environment('production')) {
      Country::insert([
        [
          'code' => 'US',
          'name' => 'United States',
          'phone_prefix' => '+1',
          'active_status' => true,
        ],
        [
          'code' => 'CA',
          'name' => 'Canada',
          'phone_prefix' => '+1',
          'active_status' => true,
        ],
        [
          'code' => 'MX',
          'name' => 'Mexico',
          'phone_prefix' => '+52',
          'active_status' => true,
        ],
        [
          'code' => 'BR',
          'name' => 'Brazil',
          'phone_prefix' => '+55',
          'active_status' => true,
        ],
        [
          'code' => 'AR',
          'name' => 'Argentina',
          'phone_prefix' => '+54',
          'active_status' => true,
        ],
        [
          'code' => 'PE',
          'name' => 'Perú',
          'phone_prefix' => '+51',
          'active_status' => true,
        ],
      ]);
    } else {
      Country::factory()->count(10)->create();
    }
  }
}
