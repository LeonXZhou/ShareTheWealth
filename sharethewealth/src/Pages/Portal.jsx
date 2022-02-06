import { useNavigate } from "react-router-dom";
import "./Portal.css";

function Portal() {
    let navigate = useNavigate();
    return (
        <>
            <div className="portalContentContainer">
                <button type="button" className="btn btn-primary create-event" onClick={() => { navigate(`/sign-in`) }}><i class="fas fa-plus-square plus-icon"></i> &nbsp;CREATE EVENT</button>
                <button type="button" className="btn btn-primary join-event" onClick={() => { navigate(`/sign-up`) }}><i class="fas fa-sign-in-alt join-icon"></i> &nbsp;JOIN EVENT</button>
                <div className="portalEventContainer">
<<<<<<< Updated upstream
                    <p className="upcomming-events">UPCOMMING EVENTS</p>
                </div>

                {/* WILL CREATE A DUMMMY EVENT LATER ON TO SHOW WHAT AN NOFICATION MAY LOOK LIKE */}
                <div className="portalNotificationContainer">
                    <p className="notifications">NOTIFICATIONS</p>
                </div>
=======
                    <div className="dashboard">
                        <Dashboard>
                        </Dashboard>
                    </div>
                </div>
>>>>>>> Stashed changes
            </div>

        </>
    );
}
export default Portal;