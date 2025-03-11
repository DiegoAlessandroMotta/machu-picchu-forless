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
    $service_types = TourServiceType::orderBy('name', 'asc')->get();
    $categories = TourCategories::orderBy('name', 'asc')->get();
    $activity_levels = ActivityLevels::orderBy('name', 'asc')->get();

    return Inertia::render('Dashboard/Tours/Create', [
      'serviceTypes' => $service_types,
      'categories' => $categories,
      'activityLevels' => $activity_levels
    ]);
  }

  public function store_tour(StoreTourRequest $request): RedirectResponse
  {
    (new ToursController())->store($request);

    return to_route('dashboard.tours.list');
  }
}
