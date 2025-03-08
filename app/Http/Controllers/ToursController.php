<?php

namespace App\Http\Controllers;

use App\Models\Tours;
use Illuminate\Support\Facades\DB;

class ToursController extends Controller
{
  public function index()
  {
    // $tours = Tours::orderByDesc("created_at")->get();
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

  public function store()
  {
    //
  }

  public function show(string $id)
  {
    //
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
