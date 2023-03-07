import React, { useState } from "react";
import { login } from "../../axios/login";
import { useDispatch, useSelector } from "react-redux";
import { setToken, resetToken } from "../../redux/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";




export default function Login(){
    const [formData, setFromData] = useState({email:"",password:""});
    const dispatch = useDispatch();
    const nav = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        login(formData).then((res)=>{dispatch(setToken(res.data));nav("/home")}).catch(err=>{console.log(err);toast.error("incorrect password or user doesnt exist !")});
    }

    return (
        <>
        <div className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500  h-screen">
        <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <ToastContainer/>
            <form  onSubmit={(e)=>{handleSubmit(e)}} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-xl text-center">Login to <span className="text-2xl bg-gradient-to-r from-cyan-600 via-purple-600 to-blue-600 bg-clip-text text-transparent font-bold">Mini-Twitter</span> <span className="text-sm text-gray-300">by youker</span></h1>

                <input 
                    type="email"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    onChange={(e)=>setFromData({...formData, email:e.target.value})} 
                    placeholder="Email" 
                    required/>

                <input 
                    type="password"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    required
                    onChange={(e)=>setFromData({...formData, password:e.target.value})}
                    name="password"
                    placeholder="Password" />

                <input
                    type="submit"
                    className="w-full text-center py-3 rounded bg-cyan-400 text-white hover:bg-green-dark focus:outline-none my-1"
                value="Sign In"/>
            </form>
            <div className="text-grey-dark mt-6">
                don't have an account? 
                <Link className="text-white no-underline border-b border-blue text-blue" to={"/register"}>
                    Sign Up
                </Link>.
            </div>
        </div>
    </div></div></>
        
        
        

    )
}