import React , {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../axios/logout";
import { fetchprofile } from "../axios/profile";
import { resetToken } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Loading from ".././assets/images/loading.jpg";
import Profile from "../views/profile/profile";
import { resetProfile, setProfile } from "../redux/profileSlice";



export default function Navbar(){
    const profile = useSelector(state=>state.profile);
    const dispatch = useDispatch();
    const nav = useNavigate();
    const token = useSelector(state=>state.auth.token);


    // dropdown
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const verify=()=>{if (isOpen){
        return "";
    }
    else{
        return "hidden";
    }
}
    

    const handleSignOut = (e)=>{
      e.preventDefault();
      logout(token).then(res=>{dispatch(resetToken());nav("/login")}).catch(err=>{toast.error("error while logging out !"); console.log(err)});
      dispatch(resetProfile());
  }

    useEffect(()=>{
      if (!profile.isLoaded) {
         fetchprofile(token).then(res=>{dispatch(setProfile(res.data))}).catch(err=>console.log(err));
      }
    },[])


    return(

        <>
        <ToastContainer/>
<nav className="bg-white border-gray-200 m-2 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <a href="https://flowbite.com/" className="flex items-center">
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"><span className="text-2xl bg-gradient-to-r from-cyan-600 via-purple-600 to-blue-600 bg-clip-text text-transparent font-bold">Mini-Twitter</span></span>
  </a>
  <div className="flex items-center md:order-2">
      <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" onClick={toggle} id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src={profile.profile_img} alt="user photo" />
      </button>
      
      <div className={`z-50 ${verify()} fixed top-12 right-3.5 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">{profile.name}</span>
          <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{profile.name}@mini-twitter</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <Link to={"/profile"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</Link>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Account Settings </a>
          </li>
          <li>
            <a onClick={handleSignOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <NavLink to="/home"  className={({isActive})=>{
                                                        if(isActive){
        return "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"}
                                                        else{
        return "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}
      }}>
                  Home</NavLink>
      </li>
      <li>
      <NavLink    activeClassName="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" 
                  ClassName="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Followings</NavLink>
      </li>
      <li>
      <NavLink    activeClassName="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" 
                  inactiveClassName="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Conversations</NavLink>
      </li>
      <li>
      <NavLink  to={"/search"}  className={({isActive})=>{
                                                        if(isActive){
        return "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"}
                                                        else{
        return "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}
      }}>
                  Search</NavLink>
      </li>
    </ul>
  </div>
  </div>
</nav>
        </>
    )
}