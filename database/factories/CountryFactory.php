<?php

namespace Database\Factories;

use App\Models\Country;
use Illuminate\Database\Eloquent\Factories\Factory;

class CountryFactory extends Factory
{
  protected $model = Country::class;

  public function definition(): array
  {
    return [
      'name' => fake()->country,
      'code' => strtoupper(fake()->lexify('???')),
      'phone_prefix' => fake()->numerify('+###'),
      'active_status' => fake()->boolean()
    ];
  }
}
