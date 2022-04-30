<?php
use App\Http\Controllers\UserController;
use App\Http\Controllers\GeneroController;
use App\Http\Controllers\CargoController;
use App\Http\Controllers\RolController;
use App\Http\Controllers\VariedadController;
use App\Http\Controllers\FincaController;
use App\Http\Controllers\UsuarioController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route:: controller(UserController::class)->group(function () {
   Route::post('/user-signup','userSignUp');
   Route::post('/user-login','userLogin');
   Route::get('/user/{email}','userDetail');
});

Route:: controller(GeneroController::class)->group(function () {
   Route::get('/index-genero','index');
   Route::post('/store-genero','store');
   Route::get('/show-genero/{id}','show');
   Route::put('/update-genero/{id}','update');
   Route::delete('/destroy-genero/{id}','destroy');

});

Route:: controller(CargoController::class)->group(function () {
   Route::get('/index-cargo','index');
   Route::post('/store-cargo','store');
   Route::get('/show-cargo/{id}','show');
   Route::put('/update-cargo/{id}','update');
   Route::delete('/destroy-cargo/{id}','destroy');

});

Route:: controller(RolController::class)->group(function () {
   Route::get('/index-rol','index');
   Route::post('/store-rol','store');
   Route::get('/show-rol/{id}','show');
   Route::put('/update-rol/{id}','update');
   Route::delete('/destroy-rol/{id}','destroy');

});

Route:: controller(VariedadController::class)->group(function () {
   Route::get('/index-variedad','index');
   Route::post('/store-variedad','store');
   Route::get('/show-variedad/{id}','show');
   Route::put('/update-variedad/{id}','update');
   Route::delete('/destroy-variedad/{id}','destroy');

});

Route:: controller(FincaController::class)->group(function () {
   Route::get('/index-finca','index');
   Route::post('/store-finca','store');
   Route::get('/show-finca/{id}','show');
   Route::put('/update-finca/{id}','update');
   Route::delete('/destroy-finca/{id}','destroy');

});

Route:: controller(UsuarioController::class)->group(function () {
   Route::get('/index-usuario','index');
   Route::post('/store-usuario','store');
   Route::get('/show-usuario/{id}','show');
   Route::put('/update-usuario/{id}','update');
   Route::delete('/destroy-usuario/{id}','destroy');

});
