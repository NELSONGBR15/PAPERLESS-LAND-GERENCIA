<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Enfermedad;

class EnfermedadController extends Controller
{
    public function index()
    {
        $enfermedad = Enfermedad::all();
        return $enfermedad;
    }
    
    public function create()
    {
        //
    }
    
    public function store(Request $request)
    {
        $enfermedad = new Enfermedad();
        $enfermedad->nombre = $request->nombre;

        $enfermedad->save();
    }

    public function show($id)
    {
        $enfermedad = Enfermedad::find($id);
        return $enfermedad;
    }

    public function edit($id)
    {
       //
    }

    public function update(Request $request, Enfermedad $enfermedad)
    {
        $enfermedad = Enfermedad::findOrfail($request->id);
        $enfermedad->nombre = $request->nombre;
        $enfermedad->save();
        return $enfermedad;
    }
    public function destroy($id)
    {
        $enfermedad = Enfermedad::destroy($id);
        return $enfermedad;
    }
}
