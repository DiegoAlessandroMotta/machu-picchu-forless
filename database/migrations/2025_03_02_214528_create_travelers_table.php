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
    Schema::create('travelers', function (Blueprint $table) {
      $table->id();
      $table->string("first_name");
      $table->string("last_name");
      $table->date("birth_date");
      $table->string("document_number");
      $table->boolean("allergic");
      $table->foreignId('gender_id')
        ->constrained(table: 'genders');
      $table->foreignId('document_type_id')
        ->constrained(table: 'document_types');
      $table->foreignId('reservation_id')
        ->constrained(table: 'reservations');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('travelers');
  }
};
