<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{

    public function index()
    {
        $categories = Category::all();
        return response($categories, 200);
    }

    public function events($category_id)
    {
        $cat = Category::find($category_id);

        $events = $cat->events;
        return response($events, 200);
    }

  
    public function create()
    {
        //
    }

    
    public function store(Request $request)
    {
        //
    }

    
    public function show(Categories $categories)
    {
        //
    }

   
    public function edit(Categories $categories)
    {
        //
    }

  
    public function update(Request $request, Categories $categories)
    {
        //
    }

  
    public function destroy(Categories $categories)
    {
        //
    }
}
