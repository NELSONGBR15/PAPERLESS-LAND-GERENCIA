<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Genero;

class GeneroController extends Controller
{
    
    public function index()
    {
        $genero = Genero::all();
        return $genero;
    }
    
    public function create()
    {
        //
    }
    
    public function store(Request $request)
    {
        $genero = new Genero();
        $genero->nombre = $request->nombre;

        $genero->save();
    }

    public function show($id)
    {
        $genero = Genero::find($id);
        return $genero;
    }

    public function edit($id)
    {
       //
    }

    public function update(Request $request, Genero $genero)
    {
        $genero = Genero::findOrfail($request->id);
        $genero->nombre = $request->nombre;
        $genero->save();
        return $genero;
    }
    public function destroy($id)
    {
        $genero = Genero::destroy($id);
        return $genero;
    }
}
