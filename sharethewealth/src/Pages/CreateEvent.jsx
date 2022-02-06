import "./CreateEvent.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { insertOccassionsByUserId } from "../Helpers/apiHelpers";
export default function CreateEvent() {
    const [formState, setFormState] = useState({ name: "", date: "" });
    let navigate = useNavigate();
    return (
        <div>
            <h1>Create Event</h1>
            <form onSubmit={(e) => { e.preventDefault() }}>
                <label>Event Name</label>
                <input type={"text"} value={formState.name} onSubmit={(e) => { e.preventDefault() }} onChange={(e) => {
                    setFormState((prev) => {
                        const newState = { ...prev, name: e.target.value }
                        return newState;
                    })
                }}></input>
                <label>Event Date</label>
                <input type={"date"} value={formState.date} onChange={(e) => {
                    setFormState((prev) => {
                        const newState = { ...prev, date: e.target.value }
                        return newState;
                    })
                }}></input>
                <button onClick={() => {
                    insertOccassionsByUserId(1, formState.name, formState.date)
                        .then((res) => { console.log(res.data)
                            navigate(`/event/${res.data[0][0]}`) })
                }}> Create </button>
            </form>
        </div>
    );
}
