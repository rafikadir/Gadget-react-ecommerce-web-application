import { useContext } from 'react';
import './Button.scss';
import { CartContext } from '../../App';

const Button = ({name, icon, fullWidth, onClick, type}) => {

    return (
        <button 
            className={`default-btn ${fullWidth && 'full-width'}`}
            onClick={onClick}
            type={type}
        >
            {icon}
            {name}
        </button>
    );
};

export default Button;