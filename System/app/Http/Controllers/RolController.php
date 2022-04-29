<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rol;

class RolController extends Controller
{
    public function index()
    {
        $rol = Rol::all();
        return $rol;
    }
    
    public function create()
    {
        //
    }
    
    public function store(Request $request)
    {
        $rol = new Rol();
        $rol->nombre = $request->nombre;

        $rol->save();
    }

    public function show($id)
    {
        $rol = Rol::find($id);
        return $rol;
    }

    public function edit($id)
    {
       //
    }

    public function update(Request $request, Rol $rol)
    {
        $rol = Rol::findOrfail($request->id);
        $rol->nombre = $request->nombre;
        $rol->save();
        return $rol;
    }
    public function destroy($id)
    {
        $rol = Rol::destroy($id);
        return $rol;
    }
}
