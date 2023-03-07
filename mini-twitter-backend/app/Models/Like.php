<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;

    protected $table = "likes";


    public function post(){
        return $this->belongsTo("posts");
    }

    public function get_id(){
        return $this->attributes['id'];
    }
    
    public function set_id($new){
        $this->attributes["id"] = $new;
        return  $this->attributes["id"];

    }

    public function get_user_id(){
        return $this->attributes['user_id'];
    }

    public function set_user_id($new){
        $this->attributes["user_id"] = $new;
        return  $this->attributes["user_id"];

    }

    public function get_post_id(){
        return $this->attributes['post_id'];
    }

    public function set_post_id($new){
        $this->attributes["post_id"] = $new;
        return  $this->attributes["post_id"];
    }
}
