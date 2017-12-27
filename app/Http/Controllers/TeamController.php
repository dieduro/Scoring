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

    public function storeEventPositions(Request $request) {
        dd($request);
        
        // $team = Team::find($id);
        // $team->name = $request->input('name');
        // $team->cost = $request->input('cost');
        // $team->profit_margin = $request->input('profit_margin');
        // $team->category()->associate($category);
        // $team->save();
    
        // $product->properties()->sync($request->input('properties'));
    
        // return redirect('/productos/' . $id);
    }
}
