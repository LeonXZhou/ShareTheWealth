import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import '../components/Activity.css';
function SignUp() {
    let navigate = useNavigate();
    return (
        <>
            <div className="contentContainer">

                <div className="email">
                    <span className="email-title">EMAIL ADDRESS</span>
                    <input className="form-control" type="text" placeholder="Enter Email Address"></input>
                </div>

                <div className="pass">
                    <span className="pass-title">PASSWORD</span>
                    <input className="form-control" type="text" placeholder="Enter Password"></input>
                </div>

                <button type="button" className="btn btn-primary sign-in-in" onClick={() => { navigate(`/portal`) }}>SIGN UP</button>
                
            </div>
        </>
    );
}
export default SignUp;