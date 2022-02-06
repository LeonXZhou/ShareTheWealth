import "./OccassionItem.css"
import { useNavigate } from "react-router-dom";
export default function OcassionItem(props){
    let navigate = useNavigate();
    return (
        <div className="OccassionItem" onClick={() => {navigate(`/event/${props.event_id}`)}}>
            <p className="occassion-text">{props.name}</p>
            <p className="occassion-text">{props.date}</p>
        </div>
    
    )
}