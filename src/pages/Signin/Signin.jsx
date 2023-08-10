import "./signin.scss";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from '../../auth/firebase';
import {useState} from "react";
import {FcGoogle} from "react-icons/fc";

const Signin = () => {
    const [isSignedIn, SetIsSignedIn] = useState(false);
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        passwordCheck: ""
    });

    const handleSubmit = (e) => {
        
        if(user.password === user.passwordCheck){
            console.log("Match");
        }
        else {
            console.log("Not Matched");
        }

        if(user.email && user.password){
            // createUserWithEmailAndPassword(auth, user.email, user.password)
            // .then((userCredential) => {
            //     const user = userCredential.user;
            //     console.log(user);
            // })
            // .catch((error) => {
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            //     console.log(errorCode,errorMessage);
            // });
        }
        e.preventDefault();
    }

    const handleChange = (e) => {
        const newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }

    const toggleSignin = () => {
        SetIsSignedIn(!isSignedIn);
    }

    return (
        <section className='signin-section'>
            <div className="container">
                <div className="signin-wrapper">
                    <form className="signin-form" onSubmit={handleSubmit}>
                        { isSignedIn ? <h2 className="form-title">Sing In</h2> : <h2 className="form-title">Create Account</h2>}
                        {
                            isSignedIn ? "" : 
                            <div className="input-container">
                                <input type="text" name="name" onBlur={handleChange} placeholder="Name" className="form-control"/>
                                <span className="input-alert">Enter your name</span>
                            </div>
                        }
                        <div className="input-container">
                            <input type="email" name="email" onBlur={handleChange} placeholder="Email" className="form-control"/>
                            <span className="input-alert">Enter your email</span>
                        </div>

                        <div className="input-container">
                            <input type="password" name="password" onBlur={handleChange} placeholder="Password" className="form-control"/>
                            <span className="input-alert">Password must be 6 characters</span>
                        </div>
                        {
                            isSignedIn ? "" : 
                            <div className="input-container">
                                <input type="password" name="passwordCheck" onBlur={handleChange} placeholder="Re-enter Password" className="form-control"/>
                                <span className="input-alert">Password not macthed</span>
                            </div>
                        }
                        {
                            isSignedIn ? <input type="submit" value="Sign In" className="signin-btn"/> : <input type="submit" value="Sign Up" className="signin-btn"/>
                        }
                    </form>

                    <div className="social-singin">
                        <button className="social-btn">
                            <FcGoogle/>
                            Sign Up with Google
                        </button>
                    </div>
                    {
                        isSignedIn ? <p>Don&apos;t have an account? <button className="toggleSignIn" onClick={toggleSignin}>Sign Up</button></p>
                        : 
                        <p>Already have an account? <button className="toggleSignIn" onClick={toggleSignin}>Sign In</button></p>
                    }
                </div>
            </div>
        </section>
    );
};

export default Signin;