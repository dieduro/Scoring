<?php

namespace App\Http\Controllers;

use App\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{

    public function index()
    {
        $allEvents = Event::all();

        $eventsArray = [];
        foreach ($allEvents as $event){
            $eventsArray[] = [
                'id' => $event->id,
                'category' => $event->category->sexo.' '.$event->category->nivel ,
                'name' => $event->name,
                'wod' =>$event->wod,
                'eventNumber' => $event->eventNumber,
                'tiebreak' => $event->tiebreak,
                'qTiebreaks' => $event->qTiebreaks,
                'midePor' => $event->midePor,
            ];
        }

        return response($eventsArray, 200);
      
    }

    public function create()
    {
        
    }


    public function store(Request $request)
    {
       
        $rules = [
            "category_id" => "required",
            "wod" => "required",
            "midePor" => "required",
        ];
    
        $messages = [
            "required" => "El :attribute es requerido!",
        ];
    
        $request->validate($rules, $messages);
    
        $event = \App\Event::create([
            'category_id' => $request->input('category_id'),
            'name' => $request->input('name'),
            'wod' => $request->input('wod'),
            'eventNumber' => $request->input('eventNumber'),
            'tiebreak' => $request->input('tiebreak'),
            'qTiebreaks' => $request->input('qTiebreaks'),
            'midePor' => $request->input('midePor')
        ]);
        
      
        return response()->json([
            'event' => $event 
        ]);
        
    }


    public function show(Event $event)
    {
        
    }


    public function edit(Event $event)
    {
        
    }

    public function update(Request $request, Event $event)
    {
        
    }

  
    public function destroy(Event $event)
    {
        
    }
}
