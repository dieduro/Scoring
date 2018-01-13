<?php

namespace App\Http\Controllers;

use App\Positions;
use App\Team;
use App\Event;
use Illuminate\Http\Request;

class PositionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }
    public function existPosition($team_id, $event_id)
    {
        $position = \App\Positions::where([
            ['team_id','=', $team_id],
            ['event_id','=', $event_id]
        ])->first();

        if ($position) {
            return true;
        }else {
            return false;
        }
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
            if(!$this->existPosition($team_id, $event_id)){
                $pos = \App\Positions::create([
                    'event_id' => $event_id,
                    'team_id' => $team_id,
                    'points' => $points
                    ]);
                array_push($eventPositions, $pos);
                $team = \App\Team::find($team_id);
                $team->totalScore += $points ;
                $team->save();
            }
            $eventId = $event_id;
        }
        
        $event = Event::find($eventId);
        $event->loaded = true;
        $event->save();
        return response($eventPositions, 200);
    }

           
            
                    
                    
                    
                    
                    //  COSAS QUE USE PARA LLEGAR A LA FUNCION DEFINITIVA
                    //file_put_contents('request2.txt',$d , FILE_APPEND);
                    //file_put_contents('request2.txt',$coma , FILE_APPEND);
        // $positionsArr = json_encode($request->data[0]);
        // dd($positions);
    /**
     * Display the specified resource.
     *
     * @param  \App\Positions  $positions
     * @return \Illuminate\Http\Response
     */
    public function show(Positions $positions)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Positions  $positions
     * @return \Illuminate\Http\Response
     */
    public function edit(Positions $positions)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Positions  $positions
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Positions $positions)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Positions  $positions
     * @return \Illuminate\Http\Response
     */
    public function destroy(Positions $positions)
    {
        //
    }
}
