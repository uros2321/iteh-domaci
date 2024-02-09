<?php

namespace App\Http\Controllers;

use App\Http\Resources\MovieCollection;
use App\Models\Movie;
use Illuminate\Http\Request;

class MovieDirectorController extends Controller
{
    public function index($director_id)
    {
        $movie=Movie::get()->where('reditelj_id', $director_id);
        if(is_null($movie)){
            return response()->json('Nije pronadjen nijedan film izabranog reditelja', 404);
        }
        return response()->json(new MovieCollection($movie));
    }
}
