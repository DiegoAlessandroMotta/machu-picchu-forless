<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Customer extends Model
{
  protected $table = 'customers';

  protected $fillable = [
    'full_name',
    'email',
    'phone',
    'country_id'
  ];

  public function country(): BelongsTo
  {
    return $this->belongsTo(Country::class, 'country_id');
  }
}
