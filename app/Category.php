<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function teams() {
        return $this->hasMany('\App\Team', 'category_id', 'id');
    }

    public function events() {
        return $this->hasMany('\App\Event', 'category_id', 'id');
    }
}
