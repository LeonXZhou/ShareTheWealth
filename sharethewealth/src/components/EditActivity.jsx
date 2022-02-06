import './Activity.css'
import { useNavigate } from 'react-router'

function EditActivity() {
    return (
        <button className="event-container" type="button" onClick={() => { navigate(`/portal`) }}>
            <div className="event-name">
                <p className="activity-name">Activity Name</p>
            </div>
            <div className="price">
                <p className="activity-name">~$25.46</p>
            </div>
            <div className="drop-down">
                <p className="activity-name"><i class="fas fa-times-circle"></i></p>
            </div>
        </button>
    );
}

export default EditActivity;