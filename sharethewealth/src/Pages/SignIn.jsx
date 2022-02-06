import { useNavigate } from "react-router-dom";
import "./SignIn.css";
function SignIn() {
    let navigate = useNavigate();
    return (
        <>
            <div className="contentContainer">
                <div className="email">
                    <span className="email-title">EMAIL ADDRESS</span>
                    <input className="form-control" type="text" placeholder="Default input"></input>
                </div>

                <div className="pass">
                    <span className="pass-title">PASSWORD</span>
                    <input className="form-control" type="text" placeholder="Default input"></input>
                </div>

                <button type="button" className="btn btn-primary sign-in-in" onClick={() => { navigate(`/create-event`) }}>SIGN IN</button>
            </div>
        </>
    );
}
export default SignIn;