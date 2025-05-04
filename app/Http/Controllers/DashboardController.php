<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTourCategoryRequest;
use App\Http\Requests\StoreTourRequest;
use App\Models\ActivityLevels;
use App\Models\TourCategories;
use App\Models\TourServiceType;
use App\Models\User;
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

  public function tours_list(): Response
  {
    $tours = (new ToursController())->index();

    return Inertia::render('Dashboard/Tours/List', [
      'tours' => $tours
    ]);
  }

  public function tours_create(): Response
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

  public function tours_store(StoreTourRequest $request): RedirectResponse
  {
    (new ToursController())->store($request);

    return to_route('dashboard.tours.list');
  }

  public function tours_delete(string $id): RedirectResponse
  {
    (new ToursController())->destroy($id);

    return to_route('dashboard.tours.list');
  }

  public function categories_list(): Response
  {
    $categories = (new TourCategoryController())->index();

    return Inertia::render('Dashboard/Categories/List', [
      'categories' => $categories
    ]);
  }

  public function categories_create(): Response
  {
    return Inertia::render('Dashboard/Categories/Create');
  }

  public function categories_store(StoreTourCategoryRequest $request): RedirectResponse
  {
    (new TourCategoryController())->store($request);

    return to_route('dashboard.categories.list');
  }
}
