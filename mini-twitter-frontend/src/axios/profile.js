import { axios_base } from "./axios";




export const fetchprofile=(token)=>{

    return axios_base.get("/me",{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
}