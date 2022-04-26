<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cargo;

class CargoController extends Controller
{
    public function index()
    {
        $cargo = Cargo::all();
        return $cargo;
    }
    
    public function create()
    {
        //
    }
    
    public function store(Request $request)
    {
        $cargo = new Cargo();
        $cargo->nombre = $request->nombre;

        $cargo->save();
    }

    public function show($id)
    {
        $cargo = Cargo::find($id);
        return $cargo;
    }

    public function edit($id)
    {
       //
    }

    public function update(Request $request, Cargo $cargo)
    {
        $cargo = Cargo::findOrfail($request->id);
        $cargo->nombre = $request->nombre;
        $cargo->save();
        return $cargo;
    }
    public function destroy($id)
    {
        $cargo = Cargo::destroy($id);
        return $cargo;
    }
}
