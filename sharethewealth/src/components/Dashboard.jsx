import OcassionItem from "./OccassionItem"
import "./Dashboard.css"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { getOccassionByUserId } from "../Helpers/apiHelpers"

export default function Dashboard() {
    const [occasionState, setoccasionState] = useState([]);

    useEffect(() => { getOccassionByUserId(Cookies.get('user_id')).then((res) => { setoccasionState(res.data) }) }, [])
    const occassions = occasionState.map((occassion) => {
        const tempDate = new Date(occassion[1])
        return (<OcassionItem name={occassion[2]} date={occassion[1]} key={occassion[0]} event_id={occassion[0]}></OcassionItem>)
    })
    return (<>
    <div className={"dash"}>
        <div className = "upcoming-events-container"><p className="upcoming-events">UPCOMING EVENTS</p></div>
        
        <div className="dash-occassions">
            {occassions}
        </div>
    </div>
    </>)
}