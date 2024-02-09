<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Movie extends Model
{
    use HasFactory;

    protected $guarded=[];
 
    
 
     public function director(){
         return $this->belongsTo(Director::class);
     }
 
     public function zanr(){
         return $this->belongsTo(Genre::class);
     }
 
     public function user() {
         return $this->belongsTo(User::class);
     }
}
