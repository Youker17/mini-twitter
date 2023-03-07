import { axios_base } from "./axios";


export const register=(form)=>{
    return axios_base.post("register", {
        ...form
    })
}