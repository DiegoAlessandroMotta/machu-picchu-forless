<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ActivityLevels extends Model
{
  protected $table = 'activity_levels';

  protected $fillable = [
    'code',
    'name'
  ];
}
