<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EventScores extends Model
{
    protected $fillable = [ 'event_id', 'team_id', 'score' ];

    public function team() {
        return $this->belongsTo('\App\Team', 'team_id', 'id');
    }

    public function event() {
        return $this->belongsTo('\App\Event', 'event_id', 'id');
    }
}
