<?php

namespace App\Http\Controllers;
use App\Models\Registro;

use Illuminate\Http\Request;

class RegistroController extends Controller
{
    public function index()
    {
        $registro = Registro::all();
        return $registro;
    }
    
    public function create()
    {
        //
    }
    
    public function store(Request $request)
    {
        $registro = new Registro();
        $registro->usuarios_id = $request->usuarios_id;
        $registro->fecha = $request->fecha;
        $registro->linea = $request->linea;
        $registro->palma = $request->palma;
        $registro->enfermedads_id = $request->enfermedads_id;
        $registro->lotes_id = $request->lotes_id;

        $registro->save();
        return $registro;
    }

    public function show($id)
    {
        $registro = Registro::find($id);
        return $registro;
    }

    public function edit($id)
    {
       //
    }

    public function update(Request $request, Registro $registro)
    {
        $registro = Registro::findOrfail($request->id);
        $registro->usuarios_id = $request->usuarios_id;
        $registro->fecha = $request->fecha;
        $registro->linea = $request->linea;
        $registro->palma = $request->palma;
        $registro->enfermedads_id = $request->enfermedads_id;
        $registro->lotes_id = $request->lotes_id;
           
        $registro->save();
        return $registro;
    }
    public function destroy($id)
    {
        $registro = Registro::destroy($id);
        return $registro;
    }
}
