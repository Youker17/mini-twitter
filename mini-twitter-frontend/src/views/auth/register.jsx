import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../axios/register";
import { setToken } from "../../redux/authSlice";
import { ToastContainer, toast } from "react-toastify";




export default function Register(){

    const [formData, setFromData] = useState({email:"",username:"",password:"", passowrd_confermation:""});
    const dispatch = useDispatch();
    const nav = useNavigate();

    const validatePassword = ()=>{
        // match and length
        if (formData.password !== formData.passowrd_confermation ) {
            toast.error("paswords dont match !");
            return false;
        }
        if (formData.password.length < 8){
            toast.error("pasword must contain 8 characters at least !");
            return false;
        }
        return true;
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("in submit")
        if (validatePassword()){
            console.log(formData)
            register(formData).then((res)=>{dispatch(setToken(res.data));nav("/home")}).catch(err=>console.log(err));
        }

    }

    return (<>
    <div className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500  h-screen">
        <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <ToastContainer/>
            <form  onSubmit={(e)=>{handleSubmit(e)}} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-xl text-center">Sign up to <span className="text-2xl bg-gradient-to-r from-cyan-600 via-purple-600 to-blue-600 bg-clip-text text-transparent font-bold">Mini-Twitter</span> <span className="text-sm text-gray-300">by youker</span></h1>
                <input 
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="username"
                    onChange={(e)=>setFromData({...formData, username:e.target.value})}
                    required
                    placeholder="Username" />

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
                    type="password"
                    required
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    onChange={(e)=>setFromData({...formData, passowrd_confermation:e.target.value})}
                    name="password_confermation"
                    placeholder="Confirm Password" />

                <input
                    type="submit"
                    className="w-full text-center py-3 rounded bg-cyan-400 text-white hover:bg-green-dark focus:outline-none my-1"
                value="Create Account"/>
            </form>
            <div className="text-grey-dark mt-6">
                Already have an account? 
                <Link className="text-white no-underline border-b border-blue text-blue" to={"/login"}>
                    Log in
                </Link>.
            </div>
        </div>
    </div></div></>
    )
}