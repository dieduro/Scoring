<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Positions extends Model
{   
    protected $fillable = [ 'team_id','event_id', 'points'];
    
    public function team() {
        return $this->belongsTo('\App\Team', 'team_id', 'id');
    }


}
