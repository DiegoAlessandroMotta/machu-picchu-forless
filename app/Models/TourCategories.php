<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TourCategories extends Model
{
  protected $table = 'tour_categories';

  protected $fillable = [
    'code',
    'name'
  ];
}
