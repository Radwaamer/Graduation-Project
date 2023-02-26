<?php

namespace App\Http\Controllers;

use App\Models\Lab;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class LabsController extends Controller
{
    //
    public function showlabs()

    {
        // echo "all cats";

        $labs=Lab::all();
        // dd($cats);

        return view("showlabs",["labs"=>$labs]);

    }

    public function searchlabs(Request $request)

    {
        $keyword= $request->keyword;

        $searchlab=Lab::where('name','like',"%$keyword%")->get();

        // dd( $searchcat);

        return view('searchlabs',['searchcat'=>$searchlab,'keyword'=>$keyword]);
       

    }



}
