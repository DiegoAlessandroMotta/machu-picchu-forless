<?php

namespace Database\Seeders;

use App\Models\ActivityLevels;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;

class ActivityLevelSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    if (App::environment('production')) {
      ActivityLevels::insert([
        [
          'code' => 'easy',
          'name' => 'Easy',
        ],
        [
          'code' => 'moderate',
          'name' => 'Moderate',
        ],
        [
          'code' => 'mid',
          'name' => 'Mid',
        ],
        [
          'code' => 'hard',
          'name' => 'Hard',
        ],
        [
          'code' => 'challenging',
          'name' => 'Challenging',
        ],
      ]);
    } else {
      ActivityLevels::insert([
        [
          'code' => 'easy',
          'name' => 'Easy',
        ],
        [
          'code' => 'moderate',
          'name' => 'Moderate',
        ],
        [
          'code' => 'mid',
          'name' => 'Mid',
        ],
        [
          'code' => 'hard',
          'name' => 'Hard',
        ],
        [
          'code' => 'challenging',
          'name' => 'Challenging',
        ],
      ]);
    }
  }
}
