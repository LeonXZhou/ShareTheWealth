import "./CreateEvent.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { insertOccassionsByUserId } from "../Helpers/apiHelpers";
export default function CreateEvent() {
    const [formState, setFormState] = useState({ name: "", date: "" });
    let navigate = useNavigate();
    return (

        <div className="contentContainer">
            <h1 className="create-event-title">CREATE AN EVENT</h1>
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <div className="firstContent">
                    <label><p className="smallTitle">NAME OF EVENT</p></label>
                    <input className="form-control" type="text" placeholder="ENTER NAME OF EVENT" value={formState.name} onSubmit={(e) => { e.preventDefault() }} onChange={(e) => {
                        setFormState((prev) => {
                            const newState = { ...prev, name: e.target.value }
                            return newState;
                        })
                    }}></input>
                </div>
                <div className="secondContent">
                    <label><p className="smallTitle">DATE OF EVENT</p></label>
                    <input className="form-control" type="date" value={formState.date} onChange={(e) => {

                        setFormState((prev) => {
                            const newState = { ...prev, date: e.target.value }
                            return newState;
                        })
                    }}></input>
                </div>
                <button onClick={() => {
                    insertOccassionsByUserId(1,formState.name,formState.date).then(
                        (res)=>{
                            navigate(`/event/${res.data[0][0]}`);
                         } )
                }} className="btn btn-primary create-this-event"> Create Event </button>
            </form>
        </div>
    );
}
