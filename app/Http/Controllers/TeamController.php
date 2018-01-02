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
        
       
    }
}
