import "./signin.scss";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from '../../auth/firebase';
import {useState} from "react";


const signin = () => {
    const [isLoggedIn, SetIsLoggedIn] = useState(false);
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "" 
    });

    const handleSubmit = (e) => {
        if(user.email && user.password) {
            createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage);
            });
        }
        e.preventDefault();
    }

    const handleChange = (e) => {
        const newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }

    return (
        <section className='signin-section'>
            <div className="container">
                <div className="signin-wrapper">
                    <form className="signin-form" onSubmit={handleSubmit}>
                        {
                            isLoggedIn ? "" : <input type="text" name="name" onBlur={handleChange} placeholder="Name" className="form-control"/>
                        }
                        <input type="email" name="email" onBlur={handleChange} placeholder="Email" className="form-control"/>
                        <input type="password" name="password" onBlur={handleChange} placeholder="Password" className="form-control"/>
                        {
                            isLoggedIn ? <input type="submit" value="Sign In" className="signin-btn"/> : <input type="submit" value="Sign Up" className="signin-btn"/>
                        }
                    </form>
                </div>
            </div>
        </section>
    );
};

export default signin;