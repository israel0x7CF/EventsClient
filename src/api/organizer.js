import axios from "axios";
import { base_url } from "../constants";

export const createOrganizer = async (payload) => {
  const response = await axios.post(base_url + "/organizer");
  return response.data;
};
export const getAllOrganizers = async () => {
  const organizerList = await axios.get(base_url + "/organizer");
  return organizerList.data;
};

export const getOrganizerById = async (id) =>{
    const organizer = await axios.get(base_url+`/organizer/${id}`);
    return organizer.data;
}