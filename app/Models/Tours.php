<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Tours extends Model
{
  protected $table = 'tours';

  protected $fillable = [
    'code',
    'name',
    'price',
    'days',
    'nights',
    'description',
    'main_banner',
    'max_altitude',
    'service_type_id',
    'category_id',
    'activity_level_id'
  ];

  protected $hidden = [
    'service_type_id',
    'category_id',
    'activity_level_id'
  ];

  public function serviceType(): BelongsTo
  {
    return $this->belongsTo(TourServiceType::class, 'service_type_id');
  }

  public function category(): BelongsTo
  {
    return $this->belongsTo(TourCategories::class, 'category_id');
  }

  public function activityLevel(): BelongsTo
  {
    return $this->belongsTo(ActivityLevels::class, 'activity_level_id');
  }
}
