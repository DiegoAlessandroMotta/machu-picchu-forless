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
    Schema::create('tour_service_types', function (Blueprint $table) {
      $table->id();
      $table->string("code");
      $table->string("name");
      $table->timestamps();
    });

    Schema::create('tour_categories', function (Blueprint $table) {
      $table->id();
      $table->string("code");
      $table->string("name");
      $table->timestamps();
    });

    Schema::create('activity_levels', function (Blueprint $table) {
      $table->id();
      $table->string("code");
      $table->string("name");
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('tour_service_types');
    Schema::dropIfExists('tour_categories');
    Schema::dropIfExists('activity_levels');
  }
};
