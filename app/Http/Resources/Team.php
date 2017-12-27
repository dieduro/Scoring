<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Team extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'ath1' => $this->ath1,
            'ath2' => $this->ath2,
            'cod' => $this->cod,
            'pos_event1' => $this->pos_event1,
            'pos_event2' => $this->pos_event2,
            'pos_event3' => $this->pos_event3,
            'pos_event4' => $this->pos_event4,
            'pos_event5' => $this->pos_event5,
            'pos_event6' => $this->pos_event6,
            'pos_event7' => $this->pos_event7,
            'pos_event8' => $this->pos_event8,
            'pos_event9' => $this->pos_event9,
            'pos_event10' => $this->pos_event10,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
