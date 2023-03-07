import React , {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchprofile } from "../../axios/profile";
import { resetProfile, setProfile } from "../../redux/profileSlice";



export default function Profile() {
    const profileDetails = useSelector(state=>state.profile);
    const dispatch = useDispatch();
    const token = useSelector(state=>state.auth.token);
    useEffect(()=>{
        fetchprofile(token).then(res=>{dispatch(setProfile(res.data));console.log(profileDetails);}).catch(err=>{dispatch(resetProfile());console.log(err)});
    },[profileDetails])


    return (<>
        <Link to={"/home"} ><div class="bg-blue-500 mt-2 ml-2   hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-fit"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" /> </svg></div></Link>
        <div className="bg-white backdrop:blur-lg m-10 shadow rounded-lg p-10">
            <div className="flex flex-col gap-1 text-center items-center">
                <img className="h-32 w-32 bg-gradient-to-r from-cyan-400 to-purple-500 p-2 rounded-full shadow mb-4" src={profileDetails.profile_img} alt=""/>
                <p className="font-semibold">{profileDetails.name}</p>
                <div className="text-sm leading-normal text-gray-400 flex justify-center items-center">
                {profileDetails.bio}
                </div>
            </div>
            <div className="flex justify-center items-center gap-2 my-3">
                <div className="font-semibold text-center mx-4">
                    <p className="text-black">{profileDetails.posts}</p>
                    <span className="text-gray-400">Posts</span>
                </div>
                <div className="font-semibold text-center mx-4">
                    <p className="text-black">{profileDetails.followers}</p>
                    <span className="text-gray-400">Followers</span>
                </div>
                <div className="font-semibold text-center mx-4">
                    <p className="text-black">{profileDetails.followings}</p>
                    <span className="text-gray-400">Folowing</span>
                </div>
            </div>
        </div></>
    )
}