<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTeamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teams', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('ath1');
            $table->string('ath2');
            $table->integer('code');
            $table->integer('pos_event1')->nullable();
            $table->integer('pos_event2')->nullable();
            $table->integer('pos_event3')->nullable();
            $table->integer('pos_event4')->nullable();
            $table->integer('pos_event5')->nullable();
            $table->integer('pos_event6')->nullable();
            $table->integer('pos_event7')->nullable();
            $table->integer('pos_event9')->nullable();
            $table->integer('pos_event10')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('teams');
    }
}
