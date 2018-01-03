<?php

use Illuminate\Http\Request;
use App\Team;


// EVENT  ROUTES

Route::get('/event/{id}', 'EventScoresController@index');
Route::post('event/{id}/cargarScore', 'EventScoresController@setTeamResult');
Route::get('/event/{id}/scores', 'EventScoresController@showScores');


// TEAM ROUTES
Route::get('/teams', function () {
    return response(Team::all(),200);
});
Route::post('/teams/create', 'TeamController@store');
Route::get('/teams/{id}', 'TeamController@show');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

