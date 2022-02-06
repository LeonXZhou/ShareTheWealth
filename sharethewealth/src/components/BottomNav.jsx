import './BottomNav.css'
import { useNavigate } from 'react-router'
export default function BottomNav() {
    let navigate = useNavigate();

    
    return <nav className={"navbar fixed-bottom"}>
        <a onClick={(e) => {
            e.preventDefault();
            navigate('/')
        }}>
            <i className="fas fa-home fa-lg"></i>
        </a>
        <a onClick={(e) => {
            e.preventDefault();
            navigate('/portal')
        }}>
            <i className="fas fa-calendar-check fa-lg"></i>
        </a>
        <a onClick={(e) => {
            e.preventDefault();
            navigate('/')
        }}>
            <i className="fas fa-user fa-lg"></i>
        </a>
    </nav>
}