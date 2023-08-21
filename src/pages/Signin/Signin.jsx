import "./signin.scss";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../../auth/firebase';
import {useContext, useState} from "react";
import {FcGoogle} from "react-icons/fc";
import { CartContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const {SetIsLoggedIn, SetUserInfo} = useContext(CartContext);
    const [isNewUser, SetIsNewUser] = useState(false);
    const navigate = useNavigate();
    // New User Information
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });
  
    // Account Create or Signin
    const handleSubmit = (e) => {
        // Login
        if (!isNewUser) {
            signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user.uid) {
                    SetIsLoggedIn(true);
                    SetUserInfo(user);
                    navigate("/user");
                } else {
                    console.log("Error!!")
                }
            })        
        }
        
        // New Account Create
        if (isNewUser) {
            if(user.email && user.password && user.name){
                createUserWithEmailAndPassword(auth, user.email, user.password)
                .then( async (userCredential) => {
                    const newUser = userCredential.user;
                    await updateProfile(newUser,{
                        displayName: user.name,
                    });
                    navigate("/user");
                    SetIsLoggedIn(true);
                    SetUserInfo(newUser);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode,errorMessage);
                });
            }
        }

        e.preventDefault();
    }

    const handleChange = (e) => {
        const newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }

    const checkNewUser = () => {
        SetIsNewUser(!isNewUser);
    }

    return (
        <section className='signin-section'>
            <div className="container">
                <div className="signin-wrapper">
                    <form className="signin-form" onSubmit={handleSubmit}>
                        { 
                            !isNewUser ? 
                            <h2 className="form-title">Sing In</h2> 
                            : 
                            <h2 className="form-title">Create Account</h2>
                        }
                        {
                            !isNewUser ? "" : 
                            <div className="input-container">
                                <input type="text" name="name" onBlur={handleChange} placeholder="Name" className="form-control" required/>
                            </div>
                        }
                        <div className="input-container">
                            <input type="email" name="email" onBlur={handleChange} placeholder="Email" className="form-control" required/>
                        </div>

                        <div className="input-container">
                            <input type="password" name="password" onChange={handleChange} placeholder="Password" className="form-control" required/>
                            <span className="input-alert hide">Password must be 6 characters</span>
                        </div>
                        {
                            !isNewUser ? <input type="submit" value="Sign In" className="signin-btn"/> : <input type="submit" value="Sign Up" className="signin-btn"/>
                        }
                    </form>

                    <div className="social-singin">
                        <div className="social-divider">
                            <span>OR CONTINUE WITH</span>
                        </div>

                        {
                            !isNewUser ? 
                            <button className="social-btn">
                                <FcGoogle/>
                                Sign In with Google
                            </button> 
                            : 
                            <button className="social-btn">
                                <FcGoogle/>
                                Sign Up with Google
                            </button>
                        }
                    </div>
                    {
                        !isNewUser ? 
                        
                        <p>Don&apos;t have an account? <button className="toggleSignIn" onClick={checkNewUser}>Sign Up</button></p>
                        : 
                        <p>Already have an account? <button className="toggleSignIn" onClick={checkNewUser}>Sign In</button></p>
                    }
                </div>
            </div>
        </section>
    );
};

export default Signin;