<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lote extends Model
{
    static $rules = [
		'nombre' => 'required',
		'anio_siembra' => 'required',
		'variedads_id' => 'required',
		'fincas_id' => 'required',
    ];

    protected $perPage = 20;
    protected $fillable = ['nombre','anio_siembra','variedads_id','fincas_id'];

    public function finca()
    {
        return $this->belongsTo('App\Models\Finca');
    }

    public function registros()
    {
        return $this->hasMany('App\Models\Registro');
    }

    public function variedad()
    {
        return $this->belongsTo('App\Models\Variedad');
    }
}
