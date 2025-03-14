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
    Schema::create('tour_days', function (Blueprint $table) {
      $table->id();
      $table->string("title");
      $table->integer("day")->default(1);
      $table->string("image");
      $table->string("description", 1023);
      $table->foreignId('tour_id')
        ->constrained(table: 'tours');
      $table->timestamps();
    });

    Schema::create('tour_images', function (Blueprint $table) {
      $table->id();
      $table->string("path", 1023);
      $table->foreignId('tour_id')
        ->constrained(table: 'tours');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('tour_days');
    Schema::dropIfExists('tour_images');
  }
};
