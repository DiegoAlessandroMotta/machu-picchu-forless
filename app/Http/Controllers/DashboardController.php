<?php

namespace App\Http\Controllers;

use App\Models\ActivityLevels;
use App\Models\TourCategories;
use App\Models\Tours;
use App\Models\TourServiceType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
  public function overview(): Response
  {
    return Inertia::render('Dashboard/Overview');
  }

  public function analytics(): Response
  {
    return Inertia::render('Dashboard/Analytics');
  }

  public function list_tours(): Response
  {
    $tours = new ToursController()->index();

    return Inertia::render('Dashboard/Tours/List', [
      'tours' => $tours
    ]);
  }

  public function create_tours(): Response
  {
    $service_type_options = TourServiceType::orderByDesc('name')->get();
    $category_options = TourCategories::orderByDesc('name')->get();
    $activity_level_options = ActivityLevels::orderByDesc('name')->get();

    return Inertia::render('Dashboard/Tours/Create', [
      'serviceTypeOptions' => $service_type_options,
      'categoryOptions' => $category_options,
      'activityLevelOptions' => $activity_level_options
    ]);
  }

  private function isValidTourCode(string $str)
  {
    $patron = '/^[a-z0-9]+(-[a-z0-9]+)*$/';

    return (bool)preg_match($patron, $str);
  }


  public function store_tour(Request $request)
  {
    $validator = Validator::make($request->all(), [
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

    ], [
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
    ]);

    $validator->after(function ($validator) use ($request) {
      if (!$this->isValidTourCode($request->input('code'))) {
        $validator->errors()->add(
          'code',
          'The URL code format is invalid'
        );
      }
    });

    if ($validator->fails()) {
      return to_route('dashboard.tours.create')
        ->withErrors($validator)
        ->withInput();
    }

    $validatedTour = $validator->validated();

    $tour = new Tours;

    $tour->code = $validatedTour["code"];
    $tour->name = $validatedTour["name"];
    $tour->price = $validatedTour["price"];
    $tour->days = $validatedTour["days"];
    $tour->nights = $validatedTour["nights"];
    $tour->description = $validatedTour["description"];
    $tour->main_banner = $validatedTour["main_banner"] ?? 'main banner path';
    $tour->max_altitude = $validatedTour["max_altitude"];
    $tour->service_type_id = $validatedTour["service_type_id"];
    $tour->category_id = $validatedTour["category_id"];
    $tour->activity_level_id = $validatedTour["activity_level_id"];

    $tour->save();

    return to_route('dashboard.tours.list');
  }
}
