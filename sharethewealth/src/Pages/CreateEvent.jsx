import "./CreateEvent.css";
import { useState } from "react";
export default function CreateEvent() {
    const [formState, setFormState] = useState({ name:"", date:"" });
    return (
        <div className="contentContainer">
            <p className="create-event-title">CREATE AN EVENT</p>
            <form>
<<<<<<< Updated upstream
                <input type={"text"} value={formState.name} onSubmit={(e)=>{e.preventDefault()}} onChange={(e) => {
                    setFormState((prev) => {
                        const newState = { ...prev, name: e.target.value }
                        return newState;
                    })
                }}></input>
                <input type={"date"} value={formState.date} onChange={(e) => {
=======
                <div className="firstContent">
                    <label><p className="smallTitle">NAME OF EVENT</p></label>
                    <input className="form-control" type="text" placeholder="ENTER NAME OF EVENT" value={formState.name} onSubmit={(e)=>{e.preventDefault()}} onChange={(e) => {
                    setFormState((prev) => {
                        const newState = { ...prev, name: e.target.value }
                        return newState;
                        })
                    }}></input>
                </div>
                <div className="secondContent">
                <label><p className="smallTitle">DATE OF EVENT</p></label>
                    <input className="form-control" type="date" value={formState.date} onChange={(e) => {
>>>>>>> Stashed changes
                    setFormState((prev) => {
                        const newState = { ...prev, date: e.target.value }
                        return newState;
                    })
                    }}></input>
                </div>
                <button onClick className="btn btn-primary create-this-event"> Create Event </button>
            </form>
        </div>
    );
}
