import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import { initializeApp } from "firebase/app";
import { useForm } from "react-hook-form";
import './Login.scss';
import firebaseConfig from '../../auth/firebase';

const app = initializeApp(firebaseConfig);

const Login = () => {

    const { register } = useForm();

    const handleLogin = () => {
        console.log("log in click");
    }
    const handleSignup = () => {
        console.log("Sign up in click");
    }
    
    return (
        <>
            <Navbar/>
                <section className='login-section'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="login-wrapper">
                                    <h3>Log In</h3>
                                    <form onSubmit={()=>handleLogin()} className="login-form">
                                        <div className="form-group">
                                            <label className="form-label">Email *</label>
                                            <input type="email" placeholder="Enter E-mail" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Password *</label>
                                            <input type="password" placeholder="Password" className="form-control"/>
                                        </div>
                                        <input type="submit" value="Log In" className="login-btn"/>
                                    </form>

                                    <div className="social-login">
                                        <span>Or Login with Social</span>
                                        <ul>
                                            <li><button>Google</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="signup-wrapper">
                                    <h3>Don&apos;t have an account? Sign Up</h3>
                                    <form onSubmit={()=>handleSignup()} className="signup-form">
                                        <div className="form-group">
                                            <label className="form-label">Full Name *</label>
                                            <input {...register("name", {required: true})} type="name" placeholder="Name" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Email *</label>
                                            <input {...register("email", {required: true})} type="email" placeholder="Enter E-mail" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Mobile *</label>
                                            <input {...register("mobile")} type="phone" placeholder="Enter Mobile" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Password *</label>
                                            <input {...register("password")} type="password" placeholder="Password" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <span>Or Sign Up with Social</span>
                                            <ul>
                                                <li><button>Google</button></li>
                                            </ul>
                                        </div>
                                        <input type="submit" value="Sign Up" className="signup-btn"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer/>
        </>
    );
};

export default Login;