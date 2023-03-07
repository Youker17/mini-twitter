<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Laravel\Sanctum\PersonalAccessToken;
use Nette\Utils\Image;

class AuthController extends Controller
{
    public function login(Request $request){

        $request->validate([
            "email"=>'required',
            "password"=>'required'
        ]);
        
        if (Auth::attempt(['email' => $request->input("email"), 'password' => $request->input("password")])){
            $user = User::where("email",$request->input("email"))->firstOrFail();
            $existing_tokens = PersonalAccessToken::where("tokenable_id", $user->id);
            if ($existing_tokens->count() > 0){
                $existing_tokens->delete();
            }
            $token = $user->createToken('auth_token')->plainTextToken;
            return response()->json([
                "token"=>$token
            ]);
        }
        return response()->json([
            "error"=>"credentials provided were incorrect !"
        ], 401);

    }


    public function register(Request $request){
        $request->validate([
            "email"=>'required',
            "username"=>"required",
            "password"=>'required'
        ]);
        $user = User::create([
            'name'=>$request->input("username"),
            'email'=>$request->input("email"),
            'password'=>Hash::make($request->input('password'))
        ]);
        $prf = new Profile();
        if ($request->hasFile("profile")) {
            $img = $request->file("profile");
            $newImgName = time() . str_replace(" ", "-" , $request->input("username")) . "profile"  .  '.'. $img->extension();
            $img->storeAs("profile_imgs", $newImgName, "public");
            
            $prf->set_image("storage/profile_imgs/".$newImgName);
            $prf->set_user_id($user->id);
            $prf->save();
        }
        else {
            $prf->set_image("storage/profile_imgs/"."profile.jpg");
            $prf->set_user_id($user->id);
            $prf->save();
        }
        
        $token = $user->createToken("auth_token")->plainTextToken;
        return response()->json([
            "token"=>$token
        ]);
    }
    public function logout(Request $request){

        $user = $request->user();
        if($user !== null){
            $user->tokens()->where('id', $user->currentAccessToken()->id)->delete();
            return response()->json([
                "message"=>"logged out successfully"
        ]);}
        return response()->json(["error"=>"there was an error couldnt logout"]);
    }
}
