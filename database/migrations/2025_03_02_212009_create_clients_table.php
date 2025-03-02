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
    Schema::create('clients', function (Blueprint $table) {
      $table->id();
      $table->string("full_name");
      $table->string("email");
      $table->string("phone")->nullable();
      // $table->date("birth_date")->nullable();
      // $table->string("document_number");
      // $table->foreignId('gender_id')
      //   ->constrained(table: 'genders');
      // $table->foreignId('document_type_id')
      //   ->constrained(table: 'document_types');
      $table->foreignId('country_id')
        ->constrained(table: 'countries');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('clients');
  }
};
