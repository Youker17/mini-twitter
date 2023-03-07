<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    //
    public function profile(Request $request){
        return response()->json([
            "username"=>$request->user()->name,
            "profile-img"=>Auth::user()->profile->get_image(),
            "profile-bio"=>Auth::user()->profile->get_bio(),
            "followers"=>count(Auth::user()->followers->toArray()),
            "followings"=>count(Auth::user()->followings->toArray()),
            "posts"=>count(Auth::user()->posts->toArray()),
        ]);
    }
    public function edit(){
        return response()->json([]);
    }

}
?>