<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;


    protected $table = "profiles";
    protected $fillable = ["user_id","image", "bio"];


    public function user(){
        return $this->belongsTo("users");
    }


    public function get_id(){
        return $this->attributes["id"];
    }
    public function set_id($new){
        $this->attributes['id'] = $new;
        return $this->attributes['id'];
    }
    public function get_user_id(){
        return $this->attributes["user_id"];
    }
    public function set_user_id($new){
        $this->attributes['user_id'] = $new;
        return $this->attributes['user_id'];
    }
    public function get_image(){
        return $this->attributes["image"];
    }
    public function set_image($new){
        $this->attributes['image'] = $new;
        return $this->attributes['image'];
    }
    public function get_bio(){
        return $this->attributes["bio"];
    }
    public function set_bio($new){
        $this->attributes['bio'] = $new;
        return $this->attributes['bio'];
    }

}
