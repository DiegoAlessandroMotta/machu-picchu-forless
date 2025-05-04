<?php

namespace Database\Seeders;

use App\Models\TourCategories;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;

class CategorySeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    if (App::environment('production')) {
      TourCategories::insert([
        [
          'code' => 'uncategorized',
          'name' => 'Uncategorized',
        ],
      ]);
    } else {
      TourCategories::insert([
        [
          'code' => 'uncategorized',
          'name' => 'Uncategorized',
        ],
      ]);
    }
  }
}
