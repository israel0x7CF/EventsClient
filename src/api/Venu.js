import axios from "axios";
import { base_url } from "../constants";
export const getVenus= async() =>{
    const venus = await axios.get(base_url+'/api/v1/venu')
    return venus.data;
}
export const registerVenu = (payload)=>{
    const data = axios.post(base_url+'/api/v1/venu',payload)
}
export const getVenusById=(id)=>{
    const  venu = axios.get(base_url+`/api/v1/venu/${id}`)
}