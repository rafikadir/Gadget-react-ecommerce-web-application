import { Link } from 'react-router-dom';
import './Sidebar.scss';
import { AiOutlineSetting, AiFillStar } from "react-icons/ai";


const Sidebar = () => {
    return (
        <div className='sidebar-wrapper'>
            <div className="sidebar-title">
                <span>
                    <AiOutlineSetting/>
                    Filters
                </span>
            </div>

            <div className='filters'>
                <div className="price-filter">
                    <h3>Price Range</h3>
                    <div className="form-group">

                    </div>
                    <input type="number" placeholder='Min' className="form-range"></input>
                    <span>$0 - $1200</span>
                </div>

                <div className="category-filter">
                    <h3>Category</h3>
                    
                    <ul>
                        <li><Link tp="/">Sofas</Link></li>
                        <li><Link tp="/">Chair</Link></li>
                        <li><Link tp="/">Wardrobes</Link></li>
                        <li><Link tp="/">Armchairs</Link></li>
                        <li><Link tp="/">Stools</Link></li>
                    </ul>
                </div>
               
                <div className="brand-filter">
                    <h3>Brand</h3>
                    
                    <ul>
                        <li><Link tp="/">Coaster</Link></li>
                        <li><Link tp="/">Fusion Dot</Link></li>
                        <li><Link tp="/">Dream Furniture</Link></li>
                        <li><Link tp="/">Green DIY</Link></li>
                        <li><Link tp="/">Unique STY</Link></li>
                    </ul>
                </div>

                <div className="rating-filter">
                    <h3>Rating</h3>
                    
                    <div className="rating-box">
                        <input type="checkbox"/>
                        <div className='single-rating'>
                            <ul>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                            </ul>
                            <span className="rating-count">25</span>
                        </div>
                    </div>
                    <div className="rating-box">
                        <input type="checkbox"/>
                        <div className='single-rating'>
                            <ul>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                            </ul>
                            <span className="rating-count">20</span>
                        </div>
                    </div>
                    <div className="rating-box">
                        <input type="checkbox"/>
                        <div className='single-rating'>
                            <ul>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                            </ul>
                            <span className="rating-count">9</span>
                        </div>
                    </div>
                    <div className="rating-box">
                        <input type="checkbox"/>
                        <div className='single-rating'>
                            <ul>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                            </ul>
                            <span className="rating-count">3</span>
                        </div>
                    </div>
                    <div className="rating-box">
                        <input type="checkbox"/>
                        <div className='single-rating'>
                            <ul>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                                <li><AiFillStar/></li>
                            </ul>
                            <span className="rating-count">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;