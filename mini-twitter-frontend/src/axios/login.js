import { axios_base } from "./axios";



export const login=(form)=>{
    return axios_base.post("login",{
        ...form
    })
}