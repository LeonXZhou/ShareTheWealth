import axios from "axios";

export function insertOccassionsByUserId(user_id,name,date)
{
    console.log(date)
    return axios.post("/api/post/occasion", {name:name,date:date},{headers: {
        "Content-Type": "application/json"}
    });
}

export function getOccassionInfoById(id)
{
    
}