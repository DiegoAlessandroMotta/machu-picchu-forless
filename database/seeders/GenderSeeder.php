<?php

namespace Database\Seeders;

use DateTime;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class GenderSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $now = Carbon::now()->toDateTimeString();

    DB::table('genders')
      ->insert([
        [
          'code' => 'female',
          'name' => 'Female',
          'created_at' => $now,
          'updated_at' => $now,
        ],
        [
          'code' => 'male',
          'name' => 'Male',
          'created_at' => $now,
          'updated_at' => $now,
        ]
      ]);
  }
}
