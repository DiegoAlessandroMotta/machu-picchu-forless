<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReservationState extends Model
{
  protected $table = 'reservation_states';

  protected $fillable = [
    'code',
    'name'
  ];
}
