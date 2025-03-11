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
    Schema::create('packages', function (Blueprint $table) {
      $table->id();
      $table->string('code')->unique();
      $table->string('name')->unique();
      $table->integer('days');
      $table->integer('nights');
      $table->decimal('price', total: 8, places: 2);
      $table->text('description')->nullable();
      $table->string('main_banner');
      $table->foreignId('service_type_id')
        ->constrained(table: 'tour_service_types');
      $table->foreignId('activity_level_id')
        ->constrained(table: 'activity_levels');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('packages');
  }
};
