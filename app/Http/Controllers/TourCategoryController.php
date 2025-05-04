<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTourCategoryRequest;
use App\Models\TourCategories;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class TourCategoryController extends Controller
{
  public function index()
  {
    $categories = DB::table('tour_categories')
      ->leftJoin('tours', 'tour_categories.id', '=', 'tours.category_id')
      ->select(
        'tour_categories.*',
        DB::raw('COUNT(tours.category_id) as total_tours')
      )
      ->groupBy('tour_categories.id')
      ->orderByDesc('tour_categories.created_at')
      ->get();

    // dd($categories);

    return $categories;
  }

  public function store(StoreTourCategoryRequest $request)
  {
    $validatedTourCategory = $request->validated();

    $tour_category = new TourCategories;

    $tour_category->code = $validatedTourCategory["code"];
    $tour_category->name = $validatedTourCategory["name"];
    $tour_category->description = $validatedTourCategory["description"];

    if (isset($validatedTourCategory["main_banner"])) {
      $imageName =  Carbon::now()->timestamp . uniqid() . '.' . $validatedTourCategory["main_banner"]->extension();
      $validatedTourCategory["main_banner"]->storeAs('img', $imageName, 'static');
      $tour_category->main_banner = '/static/img/' . $imageName;
    }

    $tour_category->save();
  }

  public function show($identifier)
  {
    $query = TourCategories::query()
      ->select('tour_categories.*');

    $tour_category = $query->where('tour_categories.code', $identifier)->firstOrFail();

    return $tour_category;
  }
}
