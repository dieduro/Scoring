<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $fillable = [ 'name', 'ath1', 'ath2', 'box', 'category_id' ];

    public function category() {
        return $this->belongsTo('\App\Category', 'category_id', 'id');
    }
    public function positions()
    {
        return $this->hasMany('App\Positions');
    }

    public function eventScores() {
        return $this->hasMany('\App\EventScores', 'team_id', 'id');
    }
}
