<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
  protected $table = 'contacts';

  protected $fillable = [
    'client_name',
    'client_phone',
    'client_email',
    'subject',
    'message'
  ];
}
