<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreReservationRequest extends FormRequest
{
  public function authorize(): bool
  {
    return true;
  }

  public function rules(): array
  {
    return [
      'full_name' => ['required', 'string', 'max:255'],
      'email' => ['required', 'email', 'max:255'],
      'phone' => ['sometimes', 'string', 'max:20'],
      'country_id' => ['required', 'integer', 'exists:countries,id'],
      'start_date' => ['required', 'date', Rule::date()->afterToday()],
      'alternative_date' => ['sometimes', 'date', 'after:start_date'],
      'additional_info' => ['sometimes', 'string', 'max:4095'],
      'heard_about_us' => ['sometimes', 'string', 'max:255'],
      'tour_code' => ['sometimes', 'string', 'max:255'],
      'package_id' => ['sometimes', 'integer', 'exists:packages,id'],
      'travelers.*.first_name' => ['required', 'string', 'max:255'],
      'travelers.*.last_name' => ['required', 'string', 'max:255'],
      'travelers.*.birth_date' => ['required', 'date', Rule::date()->beforeToday()],
      'travelers.*.document_number' => ['required', 'string', 'max:50'],
      'travelers.*.allergic' => ['required', 'boolean'],
      'travelers.*.gender_id' => ['required', 'integer', 'exists:genders,id'],
      'travelers.*.document_type_id' => ['required', 'integer', 'exists:document_types,id'],
      'extra_date' => ['sometimes', 'date'],
    ];
  }

  public function messages(): array
  {
    return [
      'required' => 'The :attribute field is required.',
      'string' => 'The :attribute must be a string.',
      'max' => 'The :attribute may not be greater than :max characters.',
      'email' => 'The :attribute must be a valid email address.',
      'integer' => 'The :attribute must be an integer.',
      'date' => 'The :attribute is not a valid date.',
      'boolean' => 'The :attribute field must be true or false.',
      'country_id.exists' => 'The selected country does not exist.',
      'start_date.after' => 'The start date must be a date after today.',
      'alternative_date.after' => 'The alternative date must be a date after the start date.',
      'additional_info.max' => 'The additional information may not be greater than 4095 characters.',
      'heard_about_us.max' => 'The heard about us field may not be greater than 255 characters.',
      'tour_code.max' => 'The tour code may not be greater than 255 characters.',
      'package_id.exists' => 'The selected package does not exist.',
      'travelers.*.birth_date.before' => 'The birth date must be a date before today.',
      'travelers.*.document_number.max' => 'The document number may not be greater than 50 characters.',
      'travelers.*.gender_id.exists' => 'The selected gender does not exist.',
      'travelers.*.document_type_id.exists' => 'The selected document type does not exist.',
    ];
  }
}
