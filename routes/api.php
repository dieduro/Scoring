<?php

use Illuminate\Http\Request;
use App\Team;


// EVENT  ROUTES

Route::get('/event', 'EventController@index');
Route::get('/event/c{category_id}e{event_id}', 'TeamController@eventTeams');
Route::post('event/{id}/cargarScore', 'EventScoresController@setTeamResult');
Route::get('/event/{id}/scores', 'EventScoresController@showScores');
Route::post('/event/{id}/storePositions', 'EventScoresController@storePositions');
Route::post('/event/store', 'EventController@store');

Route::get('/validatePosition/{team_id}/{event_id}', 'PositionsController@existPosition');


// CATEGORIES ROUTES

Route::get('/categories', 'CategoriesController@index');
Route::get('/categories/{id}/events', 'CategoriesController@events');
Route::get('/categories/{id}/scores', 'CategoriesController@scores');

// TEAM ROUTES

Route::get('/teams','TeamController@allTeams' );
Route::post('/teams/create', 'TeamController@store');
Route::get('/teams/{id}', 'TeamController@show');

// LEADERBOARD ROUTES

Route::get('/leaderboard/{category_id}', 'TeamController@leaderboard');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

