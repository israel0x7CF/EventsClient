import axios from "axios";
import { base_url } from "../constants";

export const getThemes= async()=>{
    const themes = await axios.get(base_url+'/api/v1/themes')
    return themes.data
}
//admin onlt
export const newTheme = async (payload)=>{
    const createThemes = axios.post(base_url+"/themes",payload);

}