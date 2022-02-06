import { useNavigate } from "react-router-dom";
import "./CreateActivity.css";

function CreateActivity() {
    let navigate = useNavigate();
    return ( 
        <div className="contentContainer">
            <div className="smallContent1">
                <span className="subtitle">NAME OF ACTIVITY</span>
                <input className="form-control" type="text" placeholder="Enter Activity Name"></input>
            </div>
            <div className="smallContent2">
                <span className="subtitle">ESTIMATED PRICE</span>
                <input className="form-control" type="text" placeholder="Enter Price"></input>
            </div>
            <button type="button" className="btn btn-primary create-activity" onClick={() => { navigate(`/portal`) }}>CREATE ACTIVITY</button>
        </div>
    );
}
export default CreateActivity;
