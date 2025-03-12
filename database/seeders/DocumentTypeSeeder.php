<?php

namespace Database\Seeders;

use App\Models\DocumentType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;

class DocumentTypeSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    if (App::environment('production')) {
      DocumentType::insert([
        [
          'code' => 'passport',
          'name' => 'Passport',
        ],
        [
          'code' => 'dni-id',
          'name' => 'DNI or ID',
        ],
        [
          'code' => 'driver_license',
          'name' => 'Driver License',
        ],
      ]);
    } else {
      DocumentType::factory()->count(10)->create();
    }
  }
}
