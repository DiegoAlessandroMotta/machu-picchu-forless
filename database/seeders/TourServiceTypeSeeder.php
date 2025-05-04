<?php

namespace Database\Seeders;

use App\Models\TourServiceType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;

class TourServiceTypeSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    if (App::environment('production')) {
      TourServiceType::insert([
        [
          'code' => 'private',
          'name' => 'Private',
        ],
        [
          'code' => 'group',
          'name' => 'Group',
        ],
      ]);
    } else {
      TourServiceType::insert([
        [
          'code' => 'private',
          'name' => 'Private',
        ],
        [
          'code' => 'group',
          'name' => 'Group',
        ],
      ]);
    }
  }
}
