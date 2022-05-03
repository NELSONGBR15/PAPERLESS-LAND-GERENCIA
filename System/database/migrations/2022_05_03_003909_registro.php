<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('registros', function (Blueprint $table) {

            $table->engine="InnoDB";//BORRAR DATOS EN CASCADA
            $table->bigIncrements('id');
            $table->bigInteger('usuarios_id')->unsigned();
            $table->string('fecha');
            $table->string('linea');
            $table->string('palma');
            $table->bigInteger('enfermedads_id')->unsigned();
            $table->bigInteger('lotes_id')->unsigned();
            $table->timestamps();

            $table->foreign('usuarios_id')->references('id')->on('usuarios')->onDelete("cascade");
            $table->foreign('enfermedads_id')->references('id')->on('enfermedads')->onDelete("cascade");
            $table->foreign('lotes_id')->references('id')->on('lotes')->onDelete("cascade");
        });
    }

    public function down()
    {
        Schema::dropIfExists('registros');
    }
};
