import { useNavigate } from "react-router-dom";
import "./ActivityPortal.css";
import EditActivity from "../components/EditActivity";


function ActivityPortal() {
    let navigate = useNavigate();
    return ( 
        <div className ="activity-portal-container">
            <p className="activity-portal-title">NAME OF EVENT</p>
            <p className="activity-portal-subtitle">DATE</p>
            <div className="surround-buttons">
            <   button type="button" className="btn btn-primary add-activity-portal" onClick={() => { navigate(`/portal`) }}>CREATE ACTIVITY</button>
                <div className="activity-portal-activities"><EditActivity></EditActivity></div> 
            </div>
        </div>
    );
}

export default ActivityPortal;