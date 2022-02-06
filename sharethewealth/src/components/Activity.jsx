import './Activity.css'
import { useNavigate } from 'react-router'

function Activity() {
    <div className="accordion accordion-flush">
        <button className="accordion-toggle collapsed event-container" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false">
            <div className="event-name">
                <p className="activity-name">Activity Name</p>
            </div>
            <div className="price">
                <p className="activity-name">~$25.46</p>
            </div>
            <div className="drop-down">
                <p className="activity-name"><i class="fas fa-chevron-circle-down dropdown-icon"></i></p>
            </div>
        </button>
        <div id="collapse1" class="accordion-collapse collapse">
            <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is thin the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
    </div>
}

export default Activity;