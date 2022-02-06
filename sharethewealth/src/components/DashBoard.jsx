import OcassionItem from "./OccassionItem"
import "./Dashboard.css"



export default function Dashboard() {
    
    const data = [
        {
            id: 1,
            name: "Friday Party",
            date: "2022-01-22"
        },
        {
            id: 2,
            name: "Saint Patty's",
            date: "2022-01-23"
        }
    ]
    const occassions = data.map((occassion) => {
        return (<OcassionItem name={occassion.name} date={occassion.date} key ={occassion.id}></OcassionItem>)
    })

    return (<>
    <div className={"dash"}>
        <p className="upcomming-events">UPCOMMING EVENTS</p>
        {occassions}
    </div>
    </>)
}