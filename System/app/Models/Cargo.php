<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cargo extends Model
{
    static $rules = [
		'nombre' => 'required',
    ];

    protected $perPage = 20;
    protected $fillable = ['nombre'];

    public function usuarios()
    {
        return $this->hasMany('App\Models\Usuario');
    }
}
