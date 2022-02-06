import './BottomNav.css'
import { useNavigate } from 'react-router'
export default function BottomNav() {
    let navigate = useNavigate();

    
    return <nav className={"navbar fixed-bottom"}>
        <a onClick={(e) => {
            e.preventDefault();
            navigate('/')
        }}>
            <i class="fas fa-home fa-lg"></i>
        </a>
        <a onClick={(e) => {
            e.preventDefault();
            navigate('/my-events')
        }}>
            <i class="fas fa-calendar-check fa-lg"></i>
        </a>
        <a onClick={(e) => {
            e.preventDefault();
            navigate('/profile')
        }}>
            <i class="fas fa-user fa-lg"></i>
        </a>
    </nav>
}