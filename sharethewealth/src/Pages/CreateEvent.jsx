import "./CreateEvent.css";
import { useState } from "react";
export default function CreateEvent() {
    const [formState, setFormState] = useState({ name:"", date:"" });
    return (
        <div>
            <h1>Create Event</h1>
            <form>
                <label>Event Name</label>
                <input type={"text"} value={formState.name} onSubmit={(e)=>{e.preventDefault()}} onChange={(e) => {
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
                <button onClick> Create </button>
            </form>
        </div>
    );
}
