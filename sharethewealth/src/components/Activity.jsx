import './Activity.css'
import { useNavigate } from 'react-router'

function Activity() {
    let navigate = useNavigate();

    return <activity className={"activity"}>
        <a>
            <p>Activity Name</p>
        </a>
        <a> 
            <p>$0.00</p> 
        </a>
        <a onClick={(e) => {
            e.preventDefault();
            navigate('/profile')
        }}>
            <i class="fas fa-chevron-circle-down"></i>
        </a>
    </activity>
}

export default Activity;