import { useNavigate, useLocation } from 'react-router-dom';
import { IoGridOutline, IoSearchOutline, IoStatsChartOutline, IoTimeOutline, IoPersonOutline, IoChatbubblesOutline } from 'react-icons/io5';
import './BottomNav.css';

const BottomNav = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { path: '/projects', icon: IoGridOutline, label: 'PROJECTS' },
        { path: '/search', icon: IoSearchOutline, label: 'SEARCH' },
        { path: '/chat', icon: IoChatbubblesOutline, label: 'AI CHAT' },
        { path: '/analyze', icon: IoStatsChartOutline, label: 'ANALYZE' },
        { path: '/settings', icon: IoPersonOutline, label: 'PROFILE' },
    ];

    return (
        <nav className="bottom-nav">
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                    <button
                        key={item.path}
                        className={`nav-item ${isActive ? 'active' : ''}`}
                        onClick={() => navigate(item.path)}
                    >
                        <Icon className="nav-icon" />
                        <span className="nav-label">{item.label}</span>
                    </button>
                );
            })}
        </nav>
    );
};

export default BottomNav;
