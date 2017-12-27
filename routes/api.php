<?php

use Illuminate\Http\Request;
use App\Team;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


//  Route::get('/teams', 'TeamController@index');
Route::get('teams', function () {
    return response(Team::all(),200);
});
Route::get('/cargarScoresEvento/{id}', 'EventScoresController@index');
Route::post('/cargarScoresEvento/{id}', 'EventScoresController@store');
Route::get('/teams/{id}', 'TeamController@show');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

