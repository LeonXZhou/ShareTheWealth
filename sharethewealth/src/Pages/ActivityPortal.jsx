import { useNavigate } from "react-router-dom";
import "./ActivityPortal.css";


function ActivityPortal() {
    let navigate = useNavigate();
    return ( 
        <div className ="activity-portal-container">
        <p className="activity-portal-title">NAME OF EVENT</p>
        <p className="activity-portal-subtitle">DATE</p>
        </div>
    );
}

export default ActivityPortal;