import { useParams } from "react-router-dom";
import { getOccassionInfoById, getActivitiesByOccassionId, insertActitivityByOccassionId } from "../Helpers/apiHelpers";
import { useEffect, useState } from "react";
import Activity from "../components/Activity";
import "./Event.css";
export default function Event() {
    const [eventState, setEventState] = useState({ name: "loading", date: "loading" });
    const [activityState, setActivityState] = useState([]);
    const [formState, setFormState] = useState({ name: "", cost: 0 });
    const params = useParams();
    useEffect(() => {
        getOccassionInfoById(params.event_id)
            .then((res) => {
                setEventState({ name: res.data[0][2], date: res.data[0][1] })
            })
        getActivitiesByOccassionId(params.event_id)
            .then((res) => { setActivityState(res.data) })
    }, [])

    const activitiesList = activityState.map((activity) => {
        return (<div key={activity[0]}>Name: {activity[1]},----------Total Goal:{activity[2]}</div>)
    })
    return (
        <>
            <div>Event Name: {eventState.name}</div>
            <div>Event Date: {eventState.date}</div>
            {activitiesList}
            <form className={"activity-add"} onSubmit={(e) => { e.preventDefault() }}>
                <div>
                    <label>Activity Name</label>
                    <input type={'text'} value={formState.name} onChange={(e) => {
                        setFormState((prev) => { return { ...prev, name: e.target.value } })
                    }}></input>
                </div>
                <div>
                    <label>Goal Amount</label>
                    <input type={'number'} value={formState.cost} onChange={(e) => {
                        setFormState((prev) => { return { ...prev, cost: e.target.value } })
                    }}></input>
                </div>
            </form>
            <button onClick={(e) => {
                e.preventDefault()
                insertActitivityByOccassionId(params.event_id, formState.name, formState.cost)
                    .then(() => {
                        getActivitiesByOccassionId(params.event_id)
                        .then((res) => { setActivityState(res.data) })
                    })
            }}>add</button>
        </>
    );
}
