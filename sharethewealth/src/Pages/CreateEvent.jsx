import "./CreateEvent.css";
import { useState } from "react";
import axios from "axios";
import { getOccassionsByUserId } from "../Helpers/apiHelpers";
export default function CreateEvent() {
    const [formState, setFormState] = useState({ name:"", date:"" });
    return (
        <div>
            <h1>Create Event</h1>
            <form onSubmit={(e)=>{e.preventDefault()}}>
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
                <button onClick={()=>{
                    getOccassionsByUserId(1,formState.name,formState.date)
                    .then((res)=>{console.log(res)})
                }}> Create </button>
            </form>
        </div>
    );
}
