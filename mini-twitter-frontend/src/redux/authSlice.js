import { createSlice } from "@reduxjs/toolkit"



const authSlice = createSlice(
    {
        name:"auth",
        initialState:{
            token:localStorage.getItem("token") ? localStorage.getItem("token") : ""
        },
        reducers:{
            setToken:(state, action)=>{
                localStorage.setItem("token",action.payload.token);
                state.token = localStorage.getItem("token");
            },
            resetToken:(state)=>{
                localStorage.removeItem("token");
                state.token = "";
            }
        }
        
    }
)


export const {setToken, resetToken} = authSlice.actions;

export default authSlice.reducer ;