import { useParams } from "react-router-dom";
import { getOccassionInfoById, getActivitiesByOccassionId, insertActitivityByOccassionId } from "../Helpers/apiHelpers";
import { useEffect, useState } from "react";
import Activity from "../components/Activity";
import "./Event.css";
import asyncPoll from 'react-async-poll';
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
        return (<Activity key={activity[0]} activity_id={activity[0]} name={activity[1]} goal={activity[2]} pledge={activity[3]} setActivityState={setActivityState}></Activity>
        )
    }
    )


    return (
        <>
            <div className="activity-portal-container">
                <div className="activity-portal-title">EVENT NAME: {eventState.name}</div>
                <div className="activity-portal-subtitle">DATE: {eventState.date}</div>
                <div className="activities-list">
                    {activitiesList}
                </div>
                <form className={"activity-add"} onSubmit={(e) => { e.preventDefault() }}>
                    <div className="activity-name-field">
                        <label className="activity-name-subtitle">Activity Name</label>
                        <input className="form-control" type="text" placeholder="Enter Activity Name" value={formState.name} onChange={(e) => {
                            setFormState((prev) => { return { ...prev, name: e.target.value } })
                        }}></input>
                    </div>
                    <div className="price-field">
                        <label className="activity-goal-subtitle">Goal Amount</label>
                        <input className="form-control" type="number" placeholder="Enter Estimated $" value={formState.cost} onChange={(e) => {
                            setFormState((prev) => { return { ...prev, cost: e.target.value } })
                        }}></input>
                    </div>
                </form>
                <button className="btn btn-primary add-activity-portal" onClick={(e) => {
                    e.preventDefault()
                    insertActitivityByOccassionId(params.event_id, formState.name, formState.cost)
                        .then(() => {
                            getActivitiesByOccassionId(params.event_id)
                                .then((res) => { setActivityState(res.data) })
                        })
                }}>CREATE EVENT</button>
            </div>
        </>
    );
}
