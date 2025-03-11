<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Reservation extends Model
{
  protected $table = 'reservations';

  protected $fillable = [
    'start_date',
    'alternative_date',
    'additional_info',
    'heard_about_us',
    'reservation_state_id',
    'customer_id',
    'tour_id',
    'package_id'
  ];

  protected $hidden = [
    'reservation_state_id',
    'customer_id',
    'tour_id',
    'package_id'
  ];

  public function reservationState(): BelongsTo
  {
    return $this->belongsTo(ReservationState::class, 'reservation_state_id');
  }

  public function customer(): BelongsTo
  {
    return $this->belongsTo(Customer::class, 'customer_id');
  }

  public function tour(): BelongsTo
  {
    return $this->belongsTo(Tours::class, 'tour_id');
  }

  public function package(): BelongsTo
  {
    return $this->belongsTo(Package::class, 'package_id');
  }
}
