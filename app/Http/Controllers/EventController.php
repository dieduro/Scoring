<?php

namespace App\Http\Controllers;

use App\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{

    public function index()
    {
       return Event::all(); 
        
    }

    public function create()
    {
        
    }


    public function store(Request $request, $id)
    {
        
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
