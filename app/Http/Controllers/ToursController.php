<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTourRequest;
use Illuminate\Support\Facades\DB;
use App\Models\Tours;
use Illuminate\Support\Carbon;

class ToursController extends Controller
{
  public function index()
  {
    $tours = DB::table('tours')
      ->join('tour_service_types', 'tour_service_types.id', '=', 'tours.service_type_id')
      ->join('tour_categories', 'tour_categories.id', '=', 'tours.category_id')
      ->join('activity_levels', 'activity_levels.id', '=', 'tours.activity_level_id')
      ->select(
        'tours.*',
        'tour_service_types.name as service_type',
        'tour_categories.name as category',
        'activity_levels.name as activity_level'
      )
      ->orderByDesc('tours.created_at')
      ->get();

    return $tours;
  }

  public function store(StoreTourRequest $request)
  {
    // $request->persist();

    $validatedTour = $request->validated();

    $tour = new Tours;

    $tour->code = $validatedTour["code"];
    $tour->name = $validatedTour["name"];
    $tour->price = $validatedTour["price"];
    $tour->days = $validatedTour["days"];
    $tour->nights = $validatedTour["nights"];
    $tour->description = $validatedTour["description"];
    $tour->max_altitude = $validatedTour["max_altitude"];
    $tour->service_type_id = $validatedTour["service_type_id"];
    $tour->category_id = $validatedTour["category_id"];
    $tour->activity_level_id = $validatedTour["activity_level_id"];

    if (isset($validatedTour["main_banner"])) {
      $imageName =  Carbon::now()->timestamp . uniqid() . '.' . $validatedTour["main_banner"]->extension();
      $validatedTour["main_banner"]->storeAs('img', $imageName, 'static');
      $tour->main_banner = '/static/img/' . $imageName;
    }

    $tour->save();
  }

  public function show($identifier)
  {
    $query = Tours::query()
      ->join('tour_service_types', 'tour_service_types.id', '=', 'tours.service_type_id')
      ->join('tour_categories', 'tour_categories.id', '=', 'tours.category_id')
      ->join('activity_levels', 'activity_levels.id', '=', 'tours.activity_level_id')
      ->select(
        'tours.*',
        'tour_service_types.name as service_type',
        'tour_categories.name as category',
        'activity_levels.name as activity_level'
      );

    if (is_numeric($identifier)) {
      $tour = $query->where('tours.id', $identifier)->firstOrFail();
    } else {
      $tour = $query->where('tours.code', $identifier)->firstOrFail();
    }

    return $tour;
  }

  public function update(string $id)
  {
    //
  }

  public function destroy(string $id)
  {
    //
  }
}
