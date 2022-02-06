import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./SignIn.css";
import Cookies from "js-cookie";
function SignIn() {
    let navigate = useNavigate();
    const [idState,setIdState] = useState('1')
    console.log(idState);
    return (
        <>
            <div className="contentContainer">
                <div className="email">
                    <span className="email-title">EMAIL ADDRESS</span>
                    <input className="form-control" type="text" placeholder="Default input"></input>
                </div>

                <div className="pass">
                    <span className="pass-title">PASSWORD</span>
                    <input className="form-control" type="text" value={idState} onChange={(e)=>{setIdState(e.target.value)}} placeholder="Default input"></input>
                </div>

                <button type="button" className="btn btn-primary sign-in-in" onClick={() => {
                    Cookies.set('user_id',idState)
                    navigate(`/portal`)
                }}>SIGN IN</button>
            </div>
        </>
    );
}
export default SignIn;