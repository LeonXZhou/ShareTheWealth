import { useParams } from "react-router-dom";
import { getOccassionInfoById, getActivitiesByOccassionId, insertActitivityByOccassionId } from "../Helpers/apiHelpers";
import { useEffect, useState } from "react";
import Activity from "../components/Activity";
import "./ActivityShare.css";
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
        return (<Activity key={activity[0]} name={activity[1]} goal={activity[2]} pledge={activity[3]}></Activity>
        )
    }
    )
    return (
        <>
            <div className="activity-share-container">
                <div className="activity-share-title">EVENT NAME: {eventState.name}</div>
                <div className="activity-share-subtitle">DATE: {eventState.date}</div>
                <div className="activity-share-list">
                    {activitiesList}
                    <Activity name={"Museum Trip"} goal={"$300.00"} pledge={"$100.00"}></Activity>
                    <Activity name={"Toronto Trip"} goal={"$300.00"} pledge={"$50.00"}></Activity>
                    <Activity name={"Paris Trip"} goal={"$300.00"} pledge={"$50.00"}></Activity>
                    <Activity name={"Museum Trip"} goal={"$300.00"} pledge={"$100.00"}></Activity>
                    <Activity name={"Toronto Trip"} goal={"$300.00"} pledge={"$50.00"}></Activity>
                    <Activity name={"Paris Trip"} goal={"$300.00"} pledge={"$50.00"}></Activity>
                    <Activity name={"Museum Trip"} goal={"$300.00"} pledge={"$100.00"}></Activity>
                    <Activity name={"Toronto Trip"} goal={"$300.00"} pledge={"$50.00"}></Activity>
                    <Activity name={"Paris Trip"} goal={"$300.00"} pledge={"$50.00"}></Activity>
                </div>
            </div>
        </>
    );
}
