/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './LinkBtn.scss';

const LinkBtn = ({name,link}) => {
    return (
        <Link className="link-btn" to={link}>{name}</Link>
    );
};

export default LinkBtn;