
import { useNavigate} from "react-router-dom";
import DashBoard from "../components/Dashboard";
import "./HomePage.css";

function HomePage() {
    let navigate = useNavigate();
    return (
        <>
            <div className="contentContainer">
                <button type="button" className="btn btn-primary sign-in" onClick={() => { navigate(`/sign-in`) }}>SIGN IN</button>
                <button type="button" className="btn btn-primary create" onClick={() => { navigate(`/sign-up`) }}>CREATE AN ACCOUNT</button>
            </div>
            <DashBoard/>
        </>
    );
}
export default HomePage;