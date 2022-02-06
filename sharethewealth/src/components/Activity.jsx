import './Activity.css'
import { useState } from 'react'

function Activity(props) {
    const [expandState, setExpandState] = useState('collapse')
    return (
        <div className="accordion accordion-flush">
            <button className="accordion-toggle collapsed event-container" type="button" onClick={() => {
                setExpandState((prev)=>{
                    if (prev === 'collapse')
                    {
                        return '';
                    }
                    return 'collapse';
                }) 
            }} aria-expanded="false">
                <div className="event-name">
                    <p className="activity-name">{props.name}</p>
                </div>
                <div className="price">
                    <p className="activity-name">{props.goal}</p>
                </div>
                <div className="price">
                    <p className="activity-name">pledge amount{props.pledge}</p>
                </div>
                <div className="drop-down">
                    <p className="activity-name"><i className="fas fa-chevron-circle-down dropdown-icon"></i></p>
                </div>
            </button>
            <div id="collapse1" className={`accordion-collapse ${expandState}`}>
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is thin the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
    )
}

export default Activity;