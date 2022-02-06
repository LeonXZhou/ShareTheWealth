import { useParams } from "react-router-dom";
import { getOccassionInfoById, getActivitiesByOccassionId } from "../Helpers/apiHelpers";
import { useEffect, useState } from "react";
import "./Event.css";
export default function Event() {
    const [eventState, setEventState] = useState({ name: "loading", date: "loading" });
    const params = useParams();
    useEffect(() => {
        getOccassionInfoById(params.event_id)
            .then((res) => {
                console.log(res.data);
                setEventState({ name: res.data[0][2], date: res.data[0][1] })
            })
    }, [])
    getActivitiesByOccassionId(params.event_id)
        .then((res) => { console.log(res) })
    return (
        <>
            <div>{eventState.name}</div>
            <div>{eventState.date}</div>

            <form className={"activity-add"}>
                <div>
                    <label>Activity Name</label>
                    <input></input>
                </div>
                <div>
                    <label>Goal Amount</label>
                    <input></input>
                </div>
            </form>
            <button>add</button>
        </>
    );
}
