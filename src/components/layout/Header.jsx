import { IoChevronBackOutline, IoSearchOutline, IoEllipsisHorizontalOutline, IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { useTheme } from '../../context/ThemeContext';
import './Header.css';

const Header = ({ title, onBack, showSearch, showMenu }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="header">
            <button className="header-btn" onClick={onBack}>
                <IoChevronBackOutline />
            </button>
            <h1 className="header-title">{title}</h1>
            <div className="header-actions">
                <button className="header-btn theme-toggle" onClick={toggleTheme} title="Toggle theme">
                    {theme === 'dark' ? <IoSunnyOutline /> : <IoMoonOutline />}
                </button>
                {showSearch && (
                    <button className="header-btn">
                        <IoSearchOutline />
                    </button>
                )}
                {showMenu && (
                    <button className="header-btn">
                        <IoEllipsisHorizontalOutline />
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;
