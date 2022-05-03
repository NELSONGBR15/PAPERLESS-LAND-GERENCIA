<?php
use App\Http\Controllers\UserController;
use App\Http\Controllers\GeneroController;
use App\Http\Controllers\CargoController;
use App\Http\Controllers\RolController;
use App\Http\Controllers\VariedadController;
use App\Http\Controllers\FincaController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\EnfermedadController;
use App\Http\Controllers\LoteController;
use App\Http\Controllers\RegistroController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route:: controller(UserController::class)->group(function () {
   Route::post('/user/signup','userSignUp');
   Route::post('/user/login','userLogin');
   Route::get('/user/{email}','userDetail');
});

Route:: controller(GeneroController::class)->group(function () {
   Route::get('/genero/index','index');
   Route::post('/genero/store','store');
   Route::get('/genero/show/{id}','show');
   Route::put('/genero/update/{id}','update');
   Route::delete('/genero/destroy/{id}','destroy');

});

Route:: controller(CargoController::class)->group(function () {
   Route::get('/cargo/index','index');
   Route::post('/cargo/store','store');
   Route::get('/cargo/show/{id}','show');
   Route::put('/cargo/update/{id}','update');
   Route::delete('/cargo/destroy/{id}','destroy');

});

Route:: controller(RolController::class)->group(function () {
   Route::get('/rol/index','index');
   Route::post('/rol/store','store');
   Route::get('/rol/show/{id}','show');
   Route::put('/rol/update/{id}','update');
   Route::delete('/rol/destroy/{id}','destroy');

});

Route:: controller(VariedadController::class)->group(function () {
   Route::get('/variedad/index','index');
   Route::post('/variedad/store','store');
   Route::get('/variedad/show/{id}','show');
   Route::put('/variedad/update/{id}','update');
   Route::delete('/variedad/destroy/{id}','destroy');

});

Route:: controller(FincaController::class)->group(function () {
   Route::get('/finca/index','index');
   Route::post('/finca/store','store');
   Route::get('/finca/show/{id}','show');
   Route::put('/finca/update/{id}','update');
   Route::delete('/finca/detroy/{id}','destroy');

});

Route:: controller(UsuarioController::class)->group(function () {
   Route::get('/usuario/index','index');
   Route::post('/usuario/store','store');
   Route::get('/usuario/show/{id}','show');
   Route::put('/usuario/update/{id}','update');
   Route::delete('/usuario/destroy/{id}','destroy');

});

Route:: controller(EnfermedadController::class)->group(function () {
   Route::get('/enfermedad/index','index');
   Route::post('/enfermedad/store','store');
   Route::get('/enfermedad/show/{id}','show');
   Route::put('/enfermedad/update/{id}','update');
   Route::delete('/enfermedad/destroy/{id}','destroy');

});

Route:: controller(LoteController::class)->group(function () {
   Route::get('/lote/index','index');
   Route::post('/lote/store','store');
   Route::get('/lote/show/{id}','show');
   Route::put('/lote/update/{id}','update');
   Route::delete('/lote/destroy/{id}','destroy');

});

Route:: controller(RegistroController::class)->group(function () {
   Route::get('/registro/index','index');
   Route::post('/registro/store','store');
   Route::get('/registro/show/{id}','show');
   Route::put('/registro/update/{id}','update');
   Route::delete('/registro/destroy/{id}','destroy');

});
