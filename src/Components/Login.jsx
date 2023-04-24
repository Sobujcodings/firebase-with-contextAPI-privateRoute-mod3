import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const {contextValue,signInUser} = useContext(AuthContext)    // create ta export na korle pabe nah


    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        // event.target.name.value
        // const email= event.target.email.value ;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        form.reset();



        // ager kaj tai akta central jaygay(auth provider e korlam then func baniye niye ashlam,auth oikhane aijonno)
        // ai fun k anlam context diye (call korlei sigin r ota peye jabo then just .then .catch)
      
        signInUser(email,password)
        .then(result=>{
            console.log(result.user);
            console.log('sign in done');
        })
        .catch(error=>{
            console.log(error.message);
        })

    }


    return (
        <div>
            <div className="hero mt-10 ">
                <div className="">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold mb-5">Please Login!</h1>
                    </div>
                    <div className="card  pb-2 b w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className=" card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover btn-link">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-5">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <Link to='/register'>
                            <a  className="mx-auto ms-14 link link-hover btn-link ">New User? Please Register</a>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;