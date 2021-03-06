<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EventScores extends Model
{
    protected $fillable = [ 'event_id', 'team_id', 'category_id', 'score','tiebreak', 'points' ];

    public function team() {
        return $this->belongsTo('\App\Team', 'team_id', 'id');
    }

    public function event() {
        return $this->belongsTo('\App\Event', 'event_id', 'id');
    }
    public function category() {
        return $this->belongsTo('App\Category', 'category_id', 'id');
    }
}
