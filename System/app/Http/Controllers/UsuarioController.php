<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;

class UsuarioController extends Controller
{
    public function index()
    {
        $usuario = Usuario::all();
        return $usuario;
    }
    
    public function create()
    {
        //
    }
    
    public function store(Request $request)
    {
        $usuario = new Usuario();
        $usuario->nombre = $request->nombre;
        $usuario->generos_id = $request->generos_id;
        $usuario->fecha_nacimiento = $request->fecha_nacimiento;
        $usuario->cargos_id = $request->cargos_id;
        $usuario->fecha_ingreso = $request->fecha_ingreso;
        $usuario->rols_id = $request->rols_id;

        $usuario->save();
        return $usuario;
    }

    public function show($id)
    {
        $usuario = Usuario::find($id);
        return $usuario;
    }

    public function edit($id)
    {
       //
    }

    public function update(Request $request, Usuario $usuario)
    {
        $usuario = Usuario::findOrfail($request->id);
        $usuario->nombre = $request->nombre;
        $usuario->generos_id = $request->generos_id;
        $usuario->fecha_nacimiento = $request->fecha_nacimiento;
        $usuario->cargos_id = $request->cargos_id;
        $usuario->fecha_ingreso = $request->fecha_ingreso;
        $usuario->rols_id = $request->rols_id;
           
        $usuario->save();
        return $usuario;
    }
    public function destroy($id)
    {
        $usuario = Usuario::destroy($id);
        return $usuario;
    }
}
