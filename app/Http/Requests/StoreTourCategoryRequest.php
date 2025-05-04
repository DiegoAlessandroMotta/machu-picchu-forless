<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class StoreTourCategoryRequest extends FormRequest
{
  private function isValidSlug(string $str): bool
  {
    $patron = '/^[a-z0-9]+(-[a-z0-9]+)*$/';

    return (bool)preg_match($patron, $str);
  }

  public function authorize(): bool
  {
    return true;
  }

  public function rules(): array
  {
    return [
      'code' => ['required', 'max:255', 'unique:tour_categories,code'],
      'name' => ['required', 'max:255', 'unique:tour_categories,name'],
      'description' => ['sometimes'],
      'main_banner' => [
        'required',
        'extensions:png,jpg,jpeg',
        'mimetypes:image/png,image/jpg,image/jpeg',
        'max:5120',
        'dimensions:min_width=720,min_height=540,max_width=2560,max_height=1440'
      ],
    ];
  }

  public function after(): array
  {
    return [
      function (Validator $validator) {
        if (!$this->isValidSlug($this->input('code'))) {
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
      'name.unique' => 'A category with that name already exists',
      'code.unique' => 'A category with that slug already exists',
      'main_banner.extensions' => 'The main banner must be a file of type: png, jpg, jpeg',
      'main_banner.mimetypes' => 'The main banner must be an image of type: png, jpg, jpeg',
      'main_banner.max' => 'The main banner must not be greater than 5MB',
      'main_banner.dimensions' => 'The main banner has invalid image dimensions. Minimum dimensions are 720x540 and maximum dimensions are 2560x1440',
    ];
  }
}
