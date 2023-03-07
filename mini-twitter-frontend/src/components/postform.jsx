import React from "react";
import { useSelector } from "react-redux";



export default function PostForm(){



    return (
<>
  <div className="px-5 py-3 border-b-8 border-lighter flex">
    <div className="flex-none">
      <img src="https://randomuser.me/api/portraits/men/11.jpg" className="flex-none w-12 h-12 rounded-full border border-lighter"/>
    </div>
    <form className="w-full px-4 relative">
      <textarea v-model="tweet.text" placeholder="What's up?" className="mt-3 pb-3 w-full focus:outline-none"/>
      <div className="flex items-center">
        <i className="text-lg text-blue mr-4 far fa-image"></i>
      </div>
      <button className="h-10 px-4 m-8 text-white font-semibold bg-cyan-600 hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0">
        Tweet
      </button>
    </form>
  </div>        
</>



    )
}