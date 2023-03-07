<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Follower extends Model
{
    use HasFactory;
    protected $table = "followers";
    protected $fillable = ["follower_id", "user_id"];
    // getters
    public function get_id(){
        return $this->attributes["id"];
    }

    public function get_follower_id(){
        return $this->attributes["follower_id"];
    }
    public function get_user_id(){
        return $this->attributes["user_id"];
    }
    // setters
    public function set_id($new){
        $this->attributes["id"] = $new;
    }

    public function set_follower_id($new){
        $this->attributes["follower_id"] = $new;
    }
    public function set_user_id($new){
        $this->attributes["user_id"] = $new;
    }

    // relations
    public function user(){
        return $this->belongsTo(User::class,"user_id");
    }
    public function follower(){
        return $this->belongsTo(User::class,"follower_id");
    }

}
