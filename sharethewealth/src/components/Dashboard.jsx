import OcassionItem from "./OccassionItem"
import "./Dashboard.css"



export default function Dashboard() {
    
    const data = [
        {
            id: 1,
            name: "Friday Party",
            date: "2022-02-22"
        },
        {
            id: 2,
            name: "Saint Patty's",
            date: "2022-03-23"
        }
    ]

    const occassions = data.map((occassion) => {
        return (<OcassionItem name={occassion.name} date={occassion.date} key ={occassion.id}></OcassionItem>)
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