<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [ 'category_id','name', 'wod', 'eventNumber', 'tiebreak', 'qTiebreaks', 'midePor'];

    public function category() {
        return $this->belongsTo('App\Category', 'category_id', 'id');
    }
}
