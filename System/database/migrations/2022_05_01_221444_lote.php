<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('lotes', function (Blueprint $table) {

            $table->engine="InnoDB";//BORRAR DATOS EN CASCADA
            $table->bigIncrements('id');
            $table->string('nombre');
            $table->string('ano_siembra');
            $table->bigInteger('variedads_id')->unsigned();
            $table->bigInteger('fincas_id')->unsigned();            
            $table->timestamps();

            $table->foreign('variedads_id')->references('id')->on('variedads')->onDelete("cascade");
            $table->foreign('fincas_id')->references('id')->on('fincas')->onDelete("cascade");
        });
    }

    public function down()
    {
        Schema::dropIfExists('lotes');
    }
};
