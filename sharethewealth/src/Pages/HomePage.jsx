import { useNavigate} from "react-router-dom";
function HomePage() {
    let navigate = useNavigate();
    return (
        <>
            <div>this is home page</div>
            <button type="button" className="btn btn-primary" onClick={()=>{navigate(`/create-event`)}}> go to create event</button>
        </>
    );
}
export default HomePage;