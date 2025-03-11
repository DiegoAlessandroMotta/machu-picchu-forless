<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTourRequest;
use App\Models\ActivityLevels;
use App\Models\TourCategories;
use App\Models\TourServiceType;
use Illuminate\Http\RedirectResponse;
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
    $service_type_options = TourServiceType::orderBy('name', 'asc')->get();
    $category_options = TourCategories::orderBy('name', 'asc')->get();
    $activity_level_options = ActivityLevels::orderBy('name', 'asc')->get();

    return Inertia::render('Dashboard/Tours/Create', [
      'serviceTypeOptions' => $service_type_options,
      'categoryOptions' => $category_options,
      'activityLevelOptions' => $activity_level_options
    ]);
  }

  public function store_tour(StoreTourRequest $request): RedirectResponse
  {
    (new ToursController())->store($request);

    return to_route('dashboard.tours.list');
  }
}
