import { useNavigate} from "react-router-dom";
import "./HomePage.css";
function HomePage() {
    let navigate = useNavigate();
    return (
        <>
            <div className="contentContainer">
                <button type="button" className="btn btn-primary sign-in" onClick={() => { navigate(`/sign-in`) }}>SIGN IN</button>
                <button type="button" className="btn btn-primary create" onClick={() => { navigate(`/create-event`) }}>CREATE AN ACCOUNT</button>
            </div>
            
        </>
    );
}
export default HomePage;