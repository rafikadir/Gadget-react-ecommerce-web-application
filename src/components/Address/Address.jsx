import './Address.scss';
import { FiEdit } from "react-icons/fi";

const Profile = () => {
    return (
        <section className='address-wrapper'>
            <div className="address-top">
                <h2>Shipping Address:</h2>

                <button className='address-edit-btn'>
                    <FiEdit />
                </button>
            </div>
            <ul className='address-text'>
                <li>Name: User Name</li>
                <li>E-mail: User Email</li>
                <li>Phone: +88121245844</li>

                <li>Address: abcd , smdkd, 5000</li>
                <li>City: abcd</li>
            </ul>
            {/* <form>
                <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input type='text' placeholder='Full Name' className="form-control" required/>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="form-label">Email address</label>
                            <input type='email' placeholder='Email Address' className="form-control" required/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="form-label">Phone</label>
                            <input type='phone' placeholder= 'Phone' className="form-control"  required/>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label">Country / Region</label>
                    <input type='Country' placeholder= 'Country' className="form-control"required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Address</label>
                    <input type='text' placeholder= 'Address' className="form-control"  required/>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="form-label">Town / City</label>
                            <input type='City' placeholder= 'City' className="form-control" required/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="form-label">Zip Code</label>
                            <input type='Zip Code' placeholder= 'Zip Code' className="form-control" required/>
                        </div>
                    </div>
                </div>
                <button>Update Information</button>
            </form> */}
        </section>
    );
};

export default Profile;