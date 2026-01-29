import './Button.css';

const Button = ({ children, variant = 'primary', icon, onClick, fullWidth, className = '' }) => {
    return (
        <button
            className={`btn btn-${variant} ${fullWidth ? 'btn-full' : ''} ${className}`}
            onClick={onClick}
        >
            {icon && <span className="btn-icon">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
