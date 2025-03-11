<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReservationRequest;
use App\Models\Country;
use App\Models\DocumentType;
use App\Models\Gender;
use App\Models\Tours;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class ReservationController extends Controller
{
  public function create(): Response
  {
    $tours = DB::table('tours')
      ->join('tour_service_types', 'tour_service_types.id', '=', 'tours.service_type_id')
      ->select('tours.*', 'tour_service_types.name as service_type')
      ->orderBy('tours.name')
      ->get();

    $genders = Gender::orderBy('name', 'asc')->get();
    $document_types = DocumentType::orderBy('name', 'asc')->get();
    $countries = Country::orderBy('name', 'asc')->get();

    return Inertia::render('Web/Booking', [
      'tours' => $tours,
      'genders' => $genders,
      'documentTypes' => $document_types,
      'countries' => $countries
    ]);
  }

  public function store(StoreReservationRequest $request): RedirectResponse
  {
    $validatedReservation = $request->validated();

    dd($validatedReservation);

    // $reservation = new Reservation;

    // $reservation->code = $validatedReservation["code"];
    // $reservation->name = $validatedReservation["name"];

    // $reservation->save();

    return to_route('reservation');
  }
}
