import "./CreateEvent.css";
import {useState} from "react";
export default function CreateEvent() {
    const [formState, setFormState] = useState({name:"",date:""});
  return (
    <div>
      <h1>Create Event</h1>
      <form>
          <input type={"text"} value={formState.name}></input>
          <input type={"date"} value={formState.date}></input>
          <button> Create </button>
      </form>
    </div>
  );
}
