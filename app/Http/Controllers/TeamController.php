<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Team;
use App\EventScores;
use App\Http\Resources\Team as TeamResource;


class TeamController extends Controller
{
    
    
    public function allTeams()
    {
        $teams = Team::all();
        return response($teams, 200);
    }

 
    public function eventTeams($category_id, $event_id)
    {   
        $teams = Team::where('category_id', $category_id)->get()->toArray();
        $eventScores = EventScores::where('event_id','=', $event_id)->get();
        $teams = Team::whereDoesntHave('eventScores', function ($query) use ($event_id) {
            $query->where('event_id', $event_id);
        })->where('category_id', $category_id)
            ->get();
        return response()->json($teams);
    }
    
  

    public function show($id)
    {
        return new TeamResource(Team::find($id));
    }

    public function store(Request $request) 
    {
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
            'codigo' => $request->input('codigo'),
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

    public function leaderboard($category_id) {
        $teams = Team::where('category_id', $category_id)->orderBy('totalScore')->get();
        $teamsArray = [];
        
        
        foreach ( $teams as $team) {
            $teamsArray[] = [
                'team' => $team,
                'eventScores' => $team->eventScores,
            ];
          
        }
        for ($i=0; $i<count($teamsArray); $i++) {
            $p = $i+1;
            $teamsArray[$i]['position'] = $p; 
        }
        
        return response($teamsArray, 200);
    }
}
