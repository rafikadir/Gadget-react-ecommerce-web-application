import './Sidebar.scss';
import { AiFillStar } from "react-icons/ai";
import { useState, useEffect } from 'react';


const Sidebar = ({sendData}) => {
    const [sliderValue, setSliderValue] = useState(1200);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        sendData(sliderValue,categories);
    },[sliderValue,categories]);

    const updateValue = (sliderValue) => {
        setSliderValue(sliderValue.target.value);
        sendData(sliderValue.target.value);
    }
    
    const updateCategory = (e) => {
        const selectedCategory = e.target.value;
        if(categories.includes(selectedCategory)){
            setCategories(categories.filter((category) => category !== selectedCategory));
        }
        else {
            setCategories([...categories, selectedCategory]);
        }
    }    

    return (
        <div className='sidebar-wrapper'>
            <div className='filters'>
                <div className="price-filter filter-item">
                    <h3>Price Range</h3>
                    <div className="price-range">
                        <input type="range" className="price-input form-range" min={0} max={1200} value={sliderValue} onChange={updateValue}/>

                        <span>$0 - ${sliderValue}</span>
                    </div>
                </div>

                <div className="category-filter filter-item">
                    <h3>Category</h3>
                    
                    <div className='category-list'>
                        <label>
                            <input type="checkbox" value="cantilever" onChange={updateCategory}/>
                            Cantilever
                        </label>
                        <label>
                            <input type="checkbox" value="suspended" onChange={updateCategory}/>
                            Suspended
                        </label>
                        <label>
                            <input type="checkbox" value="floating" onChange={updateCategory}/>
                            Floating
                        </label>
                        <label>
                            <input type="checkbox" value="balance" onChange={updateCategory}/>
                            Balance
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;