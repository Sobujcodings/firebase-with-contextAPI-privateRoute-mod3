import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    // createuser function k recive kore destruct kore nilam
    const {createUser} = useContext(AuthContext);

    const handleRegister=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value ;
        const email = form.email.value ;
        const password = form.password.value ;
        // console.log(name,email,password);
        form.reset();


        //oi func e call kore createwith and auth shob peye jeiye akhn just display this (call korbe ata kintu pabe ager ata createUserWithEmailAndPassword(auth, email, password) karon return ata mail,pass diye auth soho pabo
        createUser(email,password)  
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log(error.message);
        })
        }


    return (
        <div>
            <div>
                <div className="hero mt-10">
                    <div className="">
                        <div className="text-center ">
                            <h1 className="text-5xl font-bold mb-5">Please Register!</h1>
                        </div>
                        <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' required placeholder="Name" className="input input-bordered" />
                                </div>
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
                                        <Link to='/login' className=" link link-hover btn-link text-blue">Already have an account?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>        </div>
    );
};

export default Register;