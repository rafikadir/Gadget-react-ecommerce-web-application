import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import './Login.scss';
import { useForm } from "react-hook-form";


const Login = () => {

    const { register, handleSubmit } = useForm();
    
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("hi")
    }
    const onSubmit = data => console.log(data);
    
    return (
        <>
            <Navbar/>
                <section className='login-section'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="login-wrapper">
                                    <h3>Log In</h3>
                                    <form onSubmit={()=>handleLogin(e)} className="login-form">
                                        <div className="form-group">
                                            <label className="form-label">Email *</label>
                                            <input type="email" placeholder="Enter E-mail" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Password *</label>
                                            <input type="password" placeholder="Password" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <span>Or Login with Social</span>
                                            <ul>
                                                <li><button>Facebook</button></li>
                                                <li><button>Google</button></li>
                                            </ul>
                                        </div>
                                        <input type="submit" value="Log In" className="login-btn"/>
                                    </form>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="signup-wrapper">
                                    <h3>Don&apos;t have an account? Sign Up</h3>
                                    <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
                                        <div className="form-group">
                                            <label className="form-label">Email *</label>
                                            <input {...register("firstName", {required: true})} type="email" placeholder="Enter E-mail" className="form-control" required/>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Mobile *</label>
                                            <input {...register("mobile")} type="phone" placeholder="Enter Mobile" className="form-control" required/>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Password *</label>
                                            <input {...register("password")} type="password" placeholder="Password" className="form-control" required/>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Confirm Password *</label>
                                            <input {...register("confirmPassword")} type="password" placeholder="Confirm Password" className="form-control" required/>
                                        </div>
                                        <div className="form-group">
                                            <span>Or Sign Up with Social</span>
                                            <ul>
                                                <li><button>Facebook</button></li>
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