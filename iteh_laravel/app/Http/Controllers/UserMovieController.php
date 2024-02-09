<?php

namespace App\Http\Controllers;

use App\Http\Resources\MovieCollection;
use App\Models\Movie;
use Illuminate\Http\Request;

class UserMovieController extends Controller
{
    public function index($user_id)
    {
        $movie = Movie::get()->where('user_id', $user_id);
        if (is_null($movie)){
            return response()->json('Nije pronadjen nijedan film', 404);
        }
        return response()->json(new MovieCollection($movie));
    }
}
