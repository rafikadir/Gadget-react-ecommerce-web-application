import './Profile.scss';

const Profile = () => {
    return (
        <section className='profile-wrapper'>
             <div className="profile-text">
                <h2>Profile Information 💼</h2>
            </div>
            <div className="profile-info">
                <table>
                    <tr>
                        <td>Name</td>
                        <td>Rafi Kadir</td>
                    </tr>
                    <tr>
                        <td>E-mail</td>
                        <td>rafikadir2000@gmail.com</td>
                    </tr>
                </table>
            </div>
        </section>
    );
};

export default Profile;