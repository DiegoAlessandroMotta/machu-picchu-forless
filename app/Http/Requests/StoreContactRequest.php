<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreContactRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(): bool
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
   */
  public function rules(): array
  {
    return [
      'client_name' => ["required", "max:255", "min:2"],
      'client_phone' => ["required", "numeric"],
      'client_email' => ["required", "email"],
      'subject' => ["required", "max:255"],
      'message' => ['required', 'max:1023']
    ];
  }
}
