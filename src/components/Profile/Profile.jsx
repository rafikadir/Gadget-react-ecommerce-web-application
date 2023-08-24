import './Profile.scss';

const Profile = () => {
    return (
        <section className='profile-wrapper'>
             <div className="profile-text">
                <h2>Profile Information 💼</h2>
            </div>
            <form>
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
            </form>
        </section>
    );
};

export default Profile;