<?php

namespace App\Http\Controllers;

use App\EventScores;
use Illuminate\Http\Request;

class EventScoresController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return view('test', $param);
        
        $event = Event::find($id);
        $rules = [
            "team_id" => "required|unique",
            "event_id" => "required|numeric",
            
        ];
    
        $messages = [
            "required" => "El :attribute es requerido!",
            "unique" => "El :attribute tiene que ser único!",
            "numeric" => "El :attribute tiene que ser numérico!",
            "between" => "El :attribute tiene que estar entre :min y :max!"
        ];
    
        $request->validate($rules, $messages);
        $param = [
            'data' => $request
        ];
        
        // $scores = \App\Product::create([
            
        // ]);
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
