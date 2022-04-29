<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Variedad;

class VariedadController extends Controller
{
    public function index()
    {
        $variedad = Variedad::all();
        return $variedad;
    }
    
    public function create()
    {
        //
    }
    
    public function store(Request $request)
    {
        $variedad = new Variedad();
        $variedad->nombre = $request->nombre;

        $variedad->save();
    }

    public function show($id)
    {
        $variedad = Variedad::find($id);
        return $variedad;
    }

    public function edit($id)
    {
       //
    }

    public function update(Request $request, Variedad $variedad)
    {
        $variedad = Variedad::findOrfail($request->id);
        $variedad->nombre = $request->nombre;
        $variedad->save();
        return $variedad;
    }
    public function destroy($id)
    {
        $variedad = Variedad::destroy($id);
        return $variedad;
    }
}
