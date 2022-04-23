<?php
use App\Http\Controllers\UserController;
use App\Http\Controllers\GeneroController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route:: controller(UserController::class)->group(function () {
   Route::post('/user-signup','userSignUp');
   Route::post('/user-login','userLogin');
   Route::get('/user/{email}','userDetail');
});

Route:: controller(GeneroController::class)->group(function () {
   Route::get('/index','index');
   Route::post('/store','store');
   Route::get('/show/{id}','show');
   Route::put('/update/{id}','update');
   Route::delete('/destroy/{id}','destroy');

});
