import { Link } from 'react-router-dom';
import './Sidebar.scss';
import { AiFillStar } from "react-icons/ai";


const Sidebar = () => {
    return (
        <div className='sidebar-wrapper'>
            <div className='filters'>
                <div className="price-filter filter-item">
                    <h3>Price Range</h3>
                    <div className="price-form">
                        <input type="number" placeholder='Min' className="price-input"></input>
                        <input type="number" placeholder='Max' className="price-input"></input>
                        <button>Apply</button>
                    </div>
                </div>

                <div className="category-filter filter-item">
                    <h3>Category</h3>
                    
                    <div className='category-list'>
                        <label>
                            <input type="checkbox"/>
                            Cantilever
                        </label>
                        <label>
                            <input type="checkbox"/>
                            Suspended
                        </label>
                        <label>
                            <input type="checkbox"/>
                            Floating
                        </label>
                        <label>
                            <input type="checkbox"/>
                            Balance
                        </label>
                    </div>
                </div>
               
                <div className="brand-filter filter-item">
                    <h3>Brand</h3>
                    
                    <div className='brand-list'>
                        <label>
                            <input type="checkbox"/>
                            one
                        </label>
                        <label>
                            <input type="checkbox"/>
                            two
                        </label>
                        <label>
                            <input type="checkbox"/>
                            three
                        </label>
                        <label>
                            <input type="checkbox"/>
                            four
                        </label>
                        <label>
                            <input type="checkbox"/>
                            five
                        </label>
                    </div>
                </div>

                <div className="rating-filter filter-item">
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