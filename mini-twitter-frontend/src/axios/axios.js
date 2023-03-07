import axios from "axios";
import { SERVER_URL } from "./constatnts";

export const axios_base = axios.create({
baseURL:SERVER_URL+"api"
})



