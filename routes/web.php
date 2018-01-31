<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});
Route::get('/app1507havana',function () {
    return view('app');
});
Route::get('/XleaderboardX',function () {
    return view('leaderboard');
});

Route::get('/events', 'EventController@index');
Route::get('/event/{id}', 'EventScoresController@index');

Route::get('/test', function () {
    return phpinfo();
});
