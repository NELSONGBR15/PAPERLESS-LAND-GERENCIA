<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Finca;

class FincaController extends Controller
{
    public function index()
    {
        $finca = Finca::all();
        return $finca;
    }
    
    public function create()
    {
        //
    }
    
    public function store(Request $request)
    {
        $finca = new Finca();
        $finca->nombre = $request->nombre;

        $finca->save();
    }

    public function show($id)
    {
        $finca = Finca::find($id);
        return $finca;
    }

    public function edit($id)
    {
       //
    }

    public function update(Request $request, Finca $finca)
    {
        $finca = Finca::findOrfail($request->id);
        $finca->nombre = $request->nombre;
        $finca->save();
        return $finca;
    }
    public function destroy($id)
    {
        $finca = Finca::destroy($id);
        return $finca;
    }
}
