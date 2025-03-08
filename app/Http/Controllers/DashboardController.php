<?php

namespace App\Http\Controllers;

use App\Models\ActivityLevels;
use App\Models\TourCategories;
use App\Models\Tours;
use App\Models\TourServiceType;
use Illuminate\Http\Request;
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
    // $tours = [
    //   [
    //     'code' => 'machu-picchu-forless',
    //     'name' => 'Machu Picchu Forless',
    //     'price' => '1000.00',
    //     'days' => 3,
    //     'nights' => 3,
    //     'description' => 'So this the description... huh?',
    //     'main_banner' => '/url/to/main_banner',
    //     'max_altitude' => '3000',
    //     'service_type_id' => '1',
    //     'category_id' => '1',
    //     'activity_level_id' => '1'
    //   ]
    // ];

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

  public function store_tour(Request $request)
  {
    $request->validate([
      'name' => 'required',
      'code' => 'required',
      'price' => 'required',
      'max_altitude' => 'required',
      'service_type_id' => 'required',
      'category_id' => 'required',
      'activity_level_id' => 'required',
      'days' => 'required',
      'nights' => 'required',
      'description' => 'required',
      'main_banner' => 'required',
    ]);

    return to_route('dashboard.tours.create');
  }
}
