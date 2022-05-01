<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Enfermedad extends Model
{
    static $rules = [
		'nombre' => 'required',
    ];

    protected $perPage = 20;
    protected $fillable = ['nombre'];

    public function lotes()
    {
        return $this->hasMany('App\Models\Registro');
    }
}
