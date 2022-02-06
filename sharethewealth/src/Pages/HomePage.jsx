import { checkPropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
function HomePage() {
    let navigate = useNavigate();
    return (
        <>
            <div>
                Welcome!
            </div>
            <button type="button" className="btn btn-primary" onClick={() => { navigate(`/create-event`) }}> Create New Event</button>
            <button type="button" className="btn btn-primary" onClick={() => { navigate(`/create-event`) }}> Join Event</button>
        </>
    );
}
export default HomePage;