import React, { useState } from "react";
import Navbar from "../components/navbar";
import PostCard from "../components/postcard";
import PostForm from "../components/postform";



export default function Home(){
    

    return (<>
        <Navbar/>
        <PostForm/>
        <PostCard/>
        <h1>Home</h1>
    </>)
}