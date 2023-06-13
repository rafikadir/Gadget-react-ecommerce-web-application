import './Sidebar.scss';
import { HiOutlineAdjustmentsVertical } from "react-icons/hi";


const Sidebar = () => {
    return (
        <div className='sidebar-wrapper'>
            <div className='filters'>
                <div className="sidebar-title">
                    <span>
                        <HiOutlineAdjustmentsVertical/>
                        Filters
                    </span>
                </div>
                <div className="price-filter">
                    <h3>Price</h3>
                    <input type="range" className="form-range" ></input>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;