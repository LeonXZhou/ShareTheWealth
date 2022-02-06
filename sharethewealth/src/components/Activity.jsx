import './Activity.css'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { updateContribution } from '../Helpers/apiHelpers';
import { useParams } from "react-router-dom";
import { getActivitiesByOccassionId } from '../Helpers/apiHelpers';
function Activity(props) {
    const [expandState, setExpandState] = useState('collapse')
    const [pledgeState, setPledgeState] = useState('0.00');
    const params = useParams();
    let pledgeNumber = 0;
    let goalNumber = 0.000000000001;
    if (props.pledge) {
        pledgeNumber = Number(props.pledge.substring(1));
    }
    if (props.goal) {
        goalNumber = Number(props.goal.substring(1));
    }
    return (
        <div className="accordion accordion-flush">
            <button className="accordion-toggle collapsed event-container" type="button" onClick={() => {
                setExpandState((prev) => {
                    if (prev === 'collapse') {
                        return '';
                    }
                    return 'collapse';
                })
            }} aria-expanded="false">
                <div className="price">
                    <p className="activity-name">{props.name}</p>
                </div>
                <div className="price">
                    <p className="activity-name">{props.goal}</p>
                </div>
                <div className="price">
                    <p className="activity-name">Wealth: &nbsp;{props.pledge || "$0.00"}</p>
                </div>
                <div className="drop-down">
                    <p className="activity-name"><i className="fas fa-chevron-circle-down dropdown-icon"></i></p>
                </div>
            </button>
            <div id="collapse1" className={`accordion-collapse ${expandState}`}>
                <div className="accordion-body">
                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <input className="form-control" type="number" value={pledgeState} onChange={(e) => {
                            setPledgeState(e.target.value)
                        }}></input>
                        <button className="btn pledge" onClick={(e) => {
                            const user_id = Cookies.get('user_id');
                            const activity_id = props.activity_id;
                            const contribution_amount = pledgeState;

                            updateContribution(user_id, activity_id, contribution_amount)
                                .then(() => {
                                    getActivitiesByOccassionId(params.event_id)
                                        .then((res) => { props.setActivityState(res.data) })
                                });

                        }}> <i class="fas fa-donate pledge-icon"></i>&nbsp;SHARETHEWEALTH</button>
                    </form>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: `${pledgeNumber / goalNumber * 100}` + '%' }} aria-valuenow={`${pledgeNumber / goalNumber * 100}`} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity;