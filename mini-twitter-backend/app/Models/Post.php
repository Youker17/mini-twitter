<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $table = "posts";
    protected $fillable = ["image", "user_id", "content"];



    public function likes(){
        return $this->hasMany("likes");
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
    public function get_content(){
        return $this->attributes["content"];
    }
    public function set_content($new){
        $this->attributes["content"] = $new;
    }
    
    public function get_image(){
        return $this->attributes['image'];
    }
    public function set_image($new){
        $this->attributes["image"] = $new;
        return  $this->attributes["image"];
    }
}
