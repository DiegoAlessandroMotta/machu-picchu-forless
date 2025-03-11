<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreReservationRequest extends FormRequest
{
  public function authorize(): bool
  {
    return true;
  }

  public function rules(): array
  {
    return [
      'full_name' => ['required'],
      'email' => ['required'],
      'phone' => ['sometimes'],
      'country_id' => ['required'],
      'start_date' => ['required'],
      'alternative_date' => ['sometimes'],
      'additional_info' => ['sometimes'],
      'heard_about_us' => ['sometimes'],
      'tour_code' => ['sometimes'],
      'package_id' => ['sometimes'],
      // 'travelers' => ['required'],
      'extra_date' => ['sometimes', 'date'],
    ];
  }

  public function messages(): array
  {
    return [
      'required' => 'The :attribute field is required',
    ];
  }
}
