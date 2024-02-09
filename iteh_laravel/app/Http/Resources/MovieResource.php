<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MovieResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public static $wrap = 'movie';

    public function toArray($request)
    {
        return[
            'id'=> $this->resource->id,
            'naziv' => $this->resource->naziv,
            'godina_izdanja' => $this->resource->godina_izdanja,
            'opis' => $this->resource->opis,
            'user_id' => new UserResource($this->resource->user),
            'zanr_id'=> new GenreResource($this->resource->zanr),
            'reditelj_id' => new DirectorResource($this->resource->director)
        ];
    }
}
