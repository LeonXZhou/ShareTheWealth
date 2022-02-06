import "./Title.css";
import Cookies from "js-cookie";
function Title(){
    return(
        <div className="nav">
            <div className="title">ShareTheWealth</div>
            <div>TEST USER {Cookies.get("user_id")}</div>
        </div>
    );
}
export default Title;