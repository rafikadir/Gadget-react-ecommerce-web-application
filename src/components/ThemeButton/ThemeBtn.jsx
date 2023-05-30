/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './ThemeBtn.scss';

const ThemeBtn = ({name,link}) => {
    return (
        <Link className="theme-btn" to={link}>{name}</Link>
    );
};

export default ThemeBtn;