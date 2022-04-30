<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {

            $table->engine="InnoDB";//BORRAR DATOS EN CASCADA
            $table->bigIncrements('id');
            $table->string('nombre');
            $table->bigInteger('generos_id')->unsigned();
            $table->string('fecha_nacimiento');
            $table->bigInteger('cargos_id')->unsigned();
            $table->string('fecha_ingreso');
            $table->bigInteger('rols_id')->unsigned();
            $table->timestamps();

            $table->foreign('generos_id')->references('id')->on('generos')->onDelete("cascade");
            $table->foreign('cargos_id')->references('id')->on('cargos')->onDelete("cascade");
            $table->foreign('rols_id')->references('id')->on('rols')->onDelete("cascade");
        });
    }

    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
};
