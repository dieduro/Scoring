<?php

use Illuminate\Http\Request;
use App\Team;


// EVENT  ROUTES

Route::get('/event', 'EventController@index');
Route::get('/event/c{category_id}e{event_id}', 'EventScoresController@index');
Route::post('event/{id}/cargarScore', 'EventScoresController@setTeamResult');
Route::get('/event/{id}/scores', 'EventScoresController@showScores');
Route::post('/event/store', 'EventController@store');


// TEAM ROUTES

Route::get('/teams','TeamController@index' );
Route::post('/teams/create', 'TeamController@store');
Route::get('/teams/{id}', 'TeamController@show');

// LEADERBOARD ROUTES

Route::get('/leaderboards/{category_id}', 'TeamController@leaderboard');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

