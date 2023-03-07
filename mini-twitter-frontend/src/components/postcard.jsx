import React from "react";




export default function PostCard(props){




    return (
        <div class="flex min-h-screen items-center justify-center">
        <div class="h-96 w-[44rem] rounded-3xl bg-white/30 p-12 shadow-xl backdrop-blur-xl">
          <div class="flex items-center space-x-4">
            <div>
              <img alt="Profile Pic" src="https://pbs.twimg.com/profile_images/1587290337587904512/Y4s_eu5O_400x400.jpg" class="h-24 w-24 rounded-full" />
            </div>
            <div>
              <span class="flex items-center space-x-2">
                <h1 class="text-3xl text-gray-900">Elon Musk</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="currentColor" class="h-8 w-8 stroke-gray-900">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </span>
              <h3 class="text-md text-gray-800">@elonmusk</h3>
            </div>
          </div>
          <div class="py-12">
            <div class="">
              <h1 class="lg:md:text-4xl text-2xl font-bold text-gray-900">⚡️⚡️⚡️ Power to the People ⚡️⚡️⚡️</h1>
            </div>
            <div class="absolute bottom-0 py-4">
              <div class="">
                <div class="flex space-x-1 text-gray-700">
                  <h3>9:15 AM ·</h3>
                  <h3>Nov 5, 2022</h3>
                </div>
              </div>
              <div>
                <div class="flex space-x-1 py-1 font-medium">
                  <h3 class="flex items-center space-x-2">
                    59.9K Retweets
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-2 h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                    </svg>
                    ·
                  </h3>
                  <h3 class="flex items-center space-x-2">
                    9.2K Quote Retweets
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-2 h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
    
                    ·
                  </h3>
                  <h3 class="flex items-center space-x-2">
                    624.4K Likes
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-2 h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}