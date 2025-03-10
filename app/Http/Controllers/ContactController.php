<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $contacts = Contact::orderByDesc("created_at")->get();

    return $contacts;
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(StoreContactRequest $request)
  {
    $validatedContact = $request->validated();

    $contact = new Contact;

    $contact->client_name = $validatedContact["client_name"];
    $contact->client_phone = $validatedContact["client_phone"];
    $contact->client_email = $validatedContact["client_email"];
    $contact->subject = $validatedContact["subject"];
    $contact->message = $validatedContact["message"];

    $contact->save();

    return response()->json([
      "client_name" => $contact->client_name,
      "client_phone" => $contact->client_phone,
      "client_email" => $contact->client_email,
      "subject" => $contact->subject,
      "message" => $contact->message
    ]);
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, string $id)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id)
  {
    //
  }
}
