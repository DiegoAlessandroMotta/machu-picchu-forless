<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\Tours;

class StoreTourRequest extends FormRequest
{
  private function isValidTourCode(string $str): bool
  {
    $patron = '/^[a-z0-9]+(-[a-z0-9]+)*$/';

    return (bool)preg_match($patron, $str);
  }

  public function authorize(): bool
  {
    return Auth::check();
  }

  public function rules(): array
  {
    return [
      'code' => ['required', 'max:255', 'unique:tours,code'],
      'name' => ['required', 'max:255', 'unique:tours,name'],
      'price' => ['required', 'numeric', 'min:0', 'decimal:0,2'],
      'max_altitude' => ['required', 'numeric', 'min:0', 'decimal:0,2'],
      'service_type_id' => ['required', 'integer', 'min:1', 'exists:tour_service_types,id'],
      'category_id' => ['required', 'integer', 'min:1', 'exists:tour_categories,id'],
      'activity_level_id' => ['required', 'integer', 'min:1', 'exists:activity_levels,id'],
      'days' => ['required', 'integer', 'min:0'],
      'nights' => ['required', 'integer', 'min:0'],
      'description' => ['sometimes', 'max:4095'],
      'main_banner' => ['sometimes', 'max:255'],
    ];
  }

  public function after(): array
  {
    return [
      function (Validator $validator) {
        if (!$this->isValidTourCode($this->input('code'))) {
          $validator->errors()->add(
            'code',
            'The URL code format is invalid'
          );
        }
      }
    ];
  }

  public function messages(): array
  {
    return [
      'required' => 'The :attribute field is required',
      'name.max' => 'The name is too long',
      'code.max' => 'The URL code is too long',
      'price.decimal' => 'The price must have up to 2 decimal places',
      'max_altitude.decimal' => 'The maximum altitude must have up to 2 decimal places',
      'name.unique' => 'A tour with that name already exists',
      'code.unique' => 'A tour with that URL code already exists',
      'price.min' => 'The price must be a positive value',
      'max_altitude.min' => 'The maximum altitude must be a positive value',
      'service_type_id.integer' => 'The service type is invalid',
      'service_type_id.min' => 'The service type is invalid',
      'service_type_id.exists' => 'The selected service type does not exist',
      'category_id.integer' => 'The category is invalid',
      'category_id.min' => 'The category is invalid',
      'category_id.exists' => 'The selected category does not exist',
      'activity_level_id.integer' => 'The activity level is invalid',
      'activity_level_id.min' => 'The activity level is invalid',
      'activity_level_id.exists' => 'The selected activity level does not exist',
      'days.min' => 'The number of days must be a positive value',
      'nights.min' => 'The number of nights must be a positive value',
      'description.max' => 'The description is too long (maximum length of 4095 characters)'
    ];
  }

  // public function persist()
  // {
  //   Tours::create($this->validated());
  // }
}
