import "./OccassionItem.css"
export default function OcassionItem(props){
    return (<div className="OccassionItem">
        <p>{props.name}</p>
        <p>{props.date}</p>
    </div>)
}