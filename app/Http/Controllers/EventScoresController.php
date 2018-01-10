<?php

namespace App\Http\Controllers;

use App\EventScores;
use App\Team;
use App\Positions;
use Illuminate\Http\Request;
use Illuminate\Support\Collection as Collection;

class EventScoresController extends Controller
{
    
    public function index($category_id, $event_id)
    {   
        $teams = Team::where('category_id', $category_id)->get();
     
        $eventScores = EventScores::where('event_id','=', $event_id)->get();
       
        $teams = $teams->filter(function($team) use($eventScores)
        {     
            if($eventScores->contains('team_id', $team->id)){
                return false;
            }else {
                return true;
            }
            
        });
        $nonUpdatedTeams = [];
        foreach ($teams as $team){
            $nonUpdatedTeams[] = [
                'team_id' =>$team->id,
                'team_name' => $team->name,
                'ath1' => $team->ath1,
                'ath2' => $team->ath2
            ];
        }
            
       return response($nonUpdatedTeams, 200);
    }

    
    
  


    public function create()
    {
        //
    }

    public function setTeamResult(Request $request, $event_id)
    {   
        $event_id = $event_id;
        $team_id = $request->input('team_id');
        $score = $request->input('score');
        $category_id = $request->input('category_id');

        $rules = [
            "team_id" => "required",
            "score" => "required",
        ];
    
        $messages = [
            "required" => "El :attribute es requerido!",
            "unique" => "El :attribute tiene que ser único!",
            "numeric" => "El :attribute tiene que ser numérico!"
        ];

        $team = EventScores::where('team_id', $team_id)->first();
        if ($team) {
            $team->score = $score;

            $team->save();
        }else {
            $request->validate($rules, $messages);
    
            $eventScore = \App\EventScores::create([
                'event_id' => $event_id,
                'team_id' => $team_id,
                'score' => $score,
                'category_id' => $category_id
               
            ]);
            return response()->json([
                'eventScore' => $eventScore
            ]);
          
        }
       
    
    }

    public function showScores($event_id) {
        $scores= EventScores::where('event_id', $event_id)->get();
        $updatedTeams = [];
   
        foreach ($scores as $score){
            $updatedTeams[] = [
                'team_id' => $score->team->id,
                'team_name' => $score->team->name,
                'ath1' => $score->team->ath1,
                'ath2' => $score->team->ath2,
                'score' => $score->score
            ];
        }
        return response($updatedTeams, 200);
       
       
        
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\EventScores  $eventScores
     * @return \Illuminate\Http\Response
     */
    public function show(EventScores $eventScores)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\EventScores  $eventScores
     * @return \Illuminate\Http\Response
     */
    public function edit(EventScores $eventScores)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\EventScores  $eventScores
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, EventScores $eventScores)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\EventScores  $eventScores
     * @return \Illuminate\Http\Response
     */
    public function destroy(EventScores $eventScores)
    {
        //
    }
}
