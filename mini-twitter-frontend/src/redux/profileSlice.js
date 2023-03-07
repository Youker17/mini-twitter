import { createSlice } from "@reduxjs/toolkit";
import LoadingImg from ".././assets/images/loading.jpg"
import { SERVER_URL } from "../axios/constatnts";


const profileSlice = createSlice(
    {
        name:"profile",
        initialState:{
            profile_img:LoadingImg,
            bio:"Loading...",
            name:"Loading...",
            followers:"...",
            followings:"...",
            posts:"...",
            isLoaded:false
        },
        reducers:{
            setProfile:(state, action)=>{
                    state.profile_img=SERVER_URL + action.payload["profile-img"]
                    state.bio=action.payload["profile-bio"]
                    state.name=action.payload["username"]
                    state.followers=action.payload["followers"]
                    state.followings=action.payload["followings"]
                    state.posts=action.payload["posts"]
                    state.isLoaded=true
            },
            resetProfile:(state)=>{
                state = {
                    profile_img:LoadingImg,
                    bio:"Loading...",
                    name:"Loading...",
                    followers:"...",
                    followings:"...",
                    posts:"...",
                    isLoaded:false
                }
            }
        }
        
    }
)


export const {setProfile, resetProfile} = profileSlice.actions;

export default profileSlice.reducer;