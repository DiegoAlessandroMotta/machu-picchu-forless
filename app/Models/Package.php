<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Package extends Model
{
  protected $table = 'tours';

  protected $fillable = [
    'code',
    'name',
    'days',
    'nights',
    'price',
    'description',
    'main_banner',
    'service_type_id',
    'activity_level_id'
  ];

  protected $hidden = [
    'service_type_id',
    'activity_level_id'
  ];

  public function serviceType(): BelongsTo
  {
    return $this->belongsTo(TourServiceType::class, 'service_type_id');
  }

  public function activityLevel(): BelongsTo
  {
    return $this->belongsTo(ActivityLevels::class, 'activity_level_id');
  }
}
