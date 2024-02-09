<?php

namespace App\Http\Controllers;

use App\Http\Resources\MovieCollection;
use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $movies = Movie::all();

        return new MovieCollection($movies);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'naziv'=>'required|string|max:255',
            'opis'=>'required|string||max:255',
            'godina_izdanja'=>'required|digits:4|integer|min:1000|max:'.(date('Y')+1),
            'zanr_id'=>'required',
            'reditelj_id'=>'required'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors());
        }

        $movie=Movie::create([
            'naziv'=>$request->naziv,
            'opis'=>$request->opis,
            'godina_izdanja'=>$request->godina_izdanja,
            'zanr_id'=>$request->zanr_id,
            'reditelj_id'=>$request->reditelj_id,
            'user_id'=>Auth::user()->id          
        ]);

        return response()->json(['Film je uspesno kreiran.', new MovieResource($movie)]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $movie = Movie::find($id);
        if (is_null($movie)) {
            return response()->json("Film sa ovim id-em nije pronadjen", 404);
        }

        return response()->json(new MovieResource($movie));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function edit(Movie $movie)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Movie $movie)
    {
        $validator=Validator::make($request->all(),[
            'naziv'=>'required|string|max:255',
            'opis'=>'required|string|max:255',
            'godina_izdanja'=>'required|digits:4|integer|min:1000|max:'.(date('Y')+1),
            'zanr_id'=>'required',
            'reditelj_id'=>'required'
        ]);
        
        if($validator->fails()){
            return response()->json($validator->errors());
        }

        $movie->naziv=$request->naziv;
        $movie->opis=$request->opis;
        $movie->godina_izdanja=$request->godina_izdanja;
        $movie->zanr_id=$request->zanr_id;
        $movie->reditelj_id=$request->reditelj_id;


        
        $movie->save();

        return response()->json(['Film uspesno izmenjen', new MovieResource($movie)]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Movie $movie)
    {
        $movie->delete();
        return response()->json(['Film uspesno izbrisan', new MovieResource($movie)]);
    }
}
