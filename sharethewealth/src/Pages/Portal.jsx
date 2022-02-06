import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import "./Portal.css";

function Portal() {
    let navigate = useNavigate();
    return (
        <>
            <div className="portalContentContainer">
                <button type="button" className="btn btn-primary create-event" onClick={() => { navigate(`/create-event`) }}><i class="fas fa-plus-square plus-icon"></i> &nbsp;CREATE EVENT</button>
                <button type="button" className="btn btn-primary join-event" onClick={() => { navigate(`/sign-up`) }}><i class="fas fa-sign-in-alt join-icon"></i> &nbsp;JOIN EVENT</button>
                <div className="portalEventContainer">
                    <div className="dashboard">
                        <Dashboard>
                        </Dashboard>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Portal;