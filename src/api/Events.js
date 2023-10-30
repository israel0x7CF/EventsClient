import axios from "axios";
import { base_url } from "../constants";

const eventsBaseUrl = base_url +"/event"
export const getEvents = async()=>{
    const eventsPayload = await axios.get(eventsBaseUrl);
    return await eventsPayload.data;
}

export const getEventById = async (id)=>{
    const singleEvent = await axios.get(eventsBaseUrl+"/id")
    return singleEvent.data;
}

export const createEvent = async (payload,id=1) =>{
    // localhost:8080/api/v1/student?courseId=10
    console.log(eventsBaseUrl)
    const eventResponse = await axios.post(eventsBaseUrl+`?organizerId=${id}`,payload)
    return eventResponse
}
//write validation service for payload repsonses and data