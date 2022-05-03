<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Registro extends Model
{
    static $rules = [		
		'usuarios_id' => 'required',
        'fecha' => 'required',
        'linea' => 'required',
        'palma' => 'required',
		'enfermedads_id' => 'required',
		'lotes_id' => 'required',
    ];

    protected $perPage = 20;
    protected $fillable = ['usuarios_id','fecha','linea','palma','enfermedads_id','lotes_id'];

    public function usuario()
    {
        return $this->belongsTo('App\Models\Usuario');
    }

    public function enfermedad()
    {
        return $this->belongsTo('App\Models\Enfermedad');
    }
 
    public function lote()
    {
        return $this->belongsTo('App\Models\Lote');
    }
}
