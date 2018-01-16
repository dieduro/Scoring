<?php

namespace App\Http\Controllers;

use App\EventScores;
use App\Event;
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
        
       return response($teams, 200);
    }


    public function setTeamResult(Request $request, $event_id)
    {   
        $team_id = $request->input('team_id');
        $score = $request->input('score');
        $category_id = $request->input('category_id');
        // $event = Event::find($event_id);
        $rules = [
            "team_id" => "required",
            "score" => "required",
        ];
        
        $messages = [
            "required" => "El :attribute es requerido!",
            "unique" => "El :attribute tiene que ser único!",
            "numeric" => "El :attribute tiene que ser numérico!"
        ];
        

        $team = EventScores::where([
            ['team_id','=', $team_id],
            ['event_id','=', $event_id]
        ])->first();
        
        
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
                'id' => $score->team->id,
                'name' => $score->team->name,
                'ath1' => $score->team->ath1,
                'ath2' => $score->team->ath2,
                'score' => $score->score
            ];
        }
        return response($updatedTeams, 200);
  
        
    }



    public function storePositions(Request $request)
    {   
        $positions = $request->data;
        $eventId = null;
        foreach($positions as $position) {
            $event_id = $position['event_id'];
            $team_id =$position['team_id'];
            $points = $position['points']; 
            $eventPositions = [];
           
            $pos = EventScores::where([
                ['team_id','=', $team_id],
                ['event_id','=', $event_id]
            ])->first();
            $pos->points = $points;
            $pos->save(); 
            array_push($eventPositions, $pos);
            $team = \App\Team::find($team_id);
            $team->totalScore += $points ;
            $team->save();
            
            $eventId = $event_id;
        }
        
        $event = Event::find($eventId);
        $event->loaded = true;
        $event->save();
        return response($eventPositions, 200);
    }


   
    public function show(EventScores $eventScores)
    {
        //
    }

  
    public function edit(EventScores $eventScores)
    {
        //
    }

 
    public function update(Request $request, EventScores $eventScores)
    {
        //
    }

    
    public function destroy(EventScores $eventScores)
    {
        //
    }
}
