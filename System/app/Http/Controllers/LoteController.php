<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lote;

class LoteController extends Controller
{
    public function index()
    {
        $lote = Lote::all();
        return $lote;
    }
    
    public function create()
    {
        //
    }
    
    public function store(Request $request)
    {
        $lote = new Lote();
        $lote->nombre = $request->nombre;
        $lote->ano_siembra = $request->ano_siembra;
        $lote->variedads_id = $request->variedads_id;
        $lote->fincas_id = $request->fincas_id;

        $lote->save();
        return $lote;
    }

    public function show($id)
    {
        $lote = Lote::find($id);
        return $lote;
    }

    public function edit($id)
    {
       //
    }

    public function update(Request $request, Lote $lote)
    {
        $lote = Lote::findOrfail($request->id);
        $lote->nombre = $request->nombre;
        $lote->ano_siembra = $request->ano_siembra;
        $lote->variedads_id = $request->variedads_id;
        $lote->fincas_id = $request->fincas_id;
           
        $lote->save();
        return $lote;
    }
    public function destroy($id)
    {
        $lote = Lote::destroy($id);
        return $lote;
    }
}
