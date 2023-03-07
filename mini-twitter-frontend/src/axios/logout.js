import { axios_base } from "./axios";




export function logout(token){
    return axios_base.post("/logout",{},{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
}