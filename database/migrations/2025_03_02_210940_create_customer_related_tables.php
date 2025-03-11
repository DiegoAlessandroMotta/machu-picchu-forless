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
    Schema::create('genders', function (Blueprint $table) {
      $table->id();
      $table->timestamps();
      $table->string("code")->unique();
      $table->string("name")->unique();
    });

    Schema::create('document_types', function (Blueprint $table) {
      $table->id();
      $table->timestamps();
      $table->string("code")->unique();
      $table->string("name")->unique();
    });

    Schema::create('countries', function (Blueprint $table) {
      $table->id();
      $table->timestamps();
      $table->string("code")->unique();
      $table->string("name")->unique();
      $table->string("phone_prefix")->unique();
      $table->boolean("active_status")->default(true);
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('genders');
    Schema::dropIfExists('document_types');
    Schema::dropIfExists('countries');
  }
};
