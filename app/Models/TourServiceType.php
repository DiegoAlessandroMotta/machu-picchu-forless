<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TourServiceType extends Model
{
  protected $table = 'tour_service_types';

  protected $fillable = [
    'code',
    'name'
  ];
}
