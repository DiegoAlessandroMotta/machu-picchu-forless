<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('reservations', function (Blueprint $table) {
      $table->id();
      $table->date("start_date");
      $table->date("alternative_date");
      $table->string("additional_info", 1023)->nullable();
      $table->string("heard_about_us", 1023)->nullable();
      $table->foreignId('reservation_state_id')
        ->constrained(table: 'reservation_states');
      $table->foreignId('client_id')
        ->constrained(table: 'clients');
      $table->foreignId('tour_id')
        ->nullable()
        ->constrained(table: 'tours');
      $table->foreignId('package_id')
        ->nullable()
        ->constrained(table: 'packages');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('reservations');
  }
};
