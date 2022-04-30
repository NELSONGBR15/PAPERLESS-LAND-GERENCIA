<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    static $rules = [
		'nombre' => 'required',
		'generos_id' => 'required',
		'fecha_nacimiento' => 'required',
		'cargos_id' => 'required',
		'fecha_ingreso' => 'required',
		'rols_id' => 'required',
    ];

    protected $perPage = 20;
    protected $fillable = ['nombre','generos_id','fecha_nacimiento','cargos_id','fecha_ingreso','rols_id'];

    public function cargo()
    {
        return $this->belongsTo('App\Models\Cargo');
    }

    public function genero()
    {
        return $this->belongsTo('App\Models\Genero');
    }

    public function registros()
    {
        return $this->hasMany('App\Models\Registro');
    }
 
    public function rol()
    {
        return $this->belongsTo('App\Models\Rol');
    }
}
