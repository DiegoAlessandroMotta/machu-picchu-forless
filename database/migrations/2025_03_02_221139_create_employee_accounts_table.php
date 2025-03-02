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
    Schema::create('employee_accounts', function (Blueprint $table) {
      $table->id();
      $table->string("phone")->nullable();
      $table->foreignId('user_id')
        ->constrained(table: 'users');
      $table->foreignId('user_role_id')
        ->constrained(table: 'user_roles');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('employee_accounts');
  }
};
