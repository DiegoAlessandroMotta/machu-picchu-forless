<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Traveler extends Model
{
  protected $table = 'travelers';

  protected $fillable = [
    'first_name',
    'last_name',
    'birth_date',
    'document_number',
    'allergic',
    'gender_id',
    'document_type_id',
    'reservation_id',
  ];

  protected $hidden = [
    'gender_id',
    'document_type_id'
  ];

  public function gender(): BelongsTo
  {
    return $this->belongsTo(Gender::class, 'gender_id');
  }

  public function documentType(): BelongsTo
  {
    return $this->belongsTo(DocumentType::class, 'document_type_id');
  }

  public function reservation(): BelongsTo
  {
    return $this->belongsTo(Reservation::class, 'reservation_id');
  }
}
