import axios from "axios";

export function insertOccassionsByUserId(user_id, name, date) {
    console.log(date)
    return axios.post("/api/post/occasion", { name: name, date: date }, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export function getOccassionInfoById(id) {
    return axios.get(`/api/occasion/${id}`)
}

export function getActivitiesByOccassionId(id) {
    return axios.get(`/api/occasion/${id}/activities`)
}

export function insertActitivityByOccassionId(id, name, cost) {
    return axios.post(`/api/occasion/${id}/activity`, { name: name, total_cost: cost }, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}