<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Session;

use Srmklive\PayPal\Services\PayPal as PayPalClient;

class PayPalController extends Controller
{
  public function create(Request $request)
  {
    $provider = new PayPalClient;

    $arrayData = [
      "intent" => "CAPTURE",
      "purchase_units" => [
        [
          "reference_id" => "testing_id",
          "amount" => [
            "currency_code" => "USD",
            "value" => "32.00",
            "breakdown" => [
              "item_total" => [
                "currency_code" => "USD",
                "value" => "32.00",
              ]
            ]
          ],
          "items" => [
            [
              "name" => "Book of React",
              "quantity" => "1",
              "description" => "A book about React",
              "unit_amount" => [
                "currency_code" => "USD",
                "value" => "12.00"
              ]
            ],
            [
              "name" => "Book of Javascript",
              "quantity" => "2",
              "description" => "A book about Javascript",
              "unit_amount" => [
                "currency_code" => "USD",
                "value" => "10.00"
              ]
            ]
          ]
        ]
      ]
    ];

    // Note: What if there's in an error here?

    $provider->getAccessToken();
    $order = $provider->createOrder($arrayData);

    $orderId = [
      "id" => $order['id']
    ];

    return response()->json($orderId);
  }

  public function capture(Request $request)
  {
    $id = $request->all()['id'];

    $provider = new PayPalClient;
    $provider->getAccessToken();
    $order = $provider->capturePaymentOrder($id);
  }

  public function complete() {}
}
