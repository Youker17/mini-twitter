<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    //

    public function store(Request $request){
        Post::create([]);
    }
}
