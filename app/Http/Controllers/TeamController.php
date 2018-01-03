<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Team;
use App\Http\Resources\Team as TeamResource;


class TeamController extends Controller
{
    
    
    public function index()
    {
        return new TeamResource(Team::all());
    }

    public function show($id)
    {
        return new TeamResource(Team::find($id));
    }

    public function store(Request $request) {
        $rules = [
            "name" => "required|unique:teams",
            "ath1" => "required",
            "ath2" => "required",
            "category_id" => "required|numeric|between:1,4",

        ];
    
        $messages = [
            "required" => "El :attribute es requerido!",
            "unique" => "El :attribute tiene que ser único!",
            "numeric" => "El :attribute tiene que ser numérico!",
            "between" => "El :attribute tiene que estar entre :min y :max!"
        ];
    
        $request->validate($rules, $messages);
    
        $team = \App\Team::create([
            'name' => $request->input('name'),
            "ath1" => $request->input('ath1'),
            "ath2" => $request->input('ath2'),
            'box' => $request->input('box'),
            'category_id' => $request->input('category_id')
        ]);
    
        return response()->json([
            'team' => $team 
        ]);
    }
}
