import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { Result } from 'postcss';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);         // destruct korbo context r vhitorei


    // signout handler
    const handleSignout = () => {
        logOut()                                         // shudhu auth r kichu nibe nah                                     
            .then((result) => {
                console.log('signout-done');

            })
            .catch(error => {
                console.error(error.message);
            })
    }

    




    return (
        <div>
            <div className="navbar bg-primary text-neutral-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className='btn btn-ghost normal-case text-xl' to='/'>Home </Link>
                <Link className='btn btn-ghost normal-case text-xl' to='/orders'>Order </Link>
                {user && <Link className='btn btn-ghost normal-case text-xl' to='/profile'>Profile </Link>}
                <Link className='btn btn-ghost normal-case text-xl' to='/login'>Login </Link>
                <Link className='btn btn-ghost normal-case text-xl' to='/register'>Register </Link>

                {user ?
                    <>
                        <span>{user.email}</span> <button onClick={handleSignout} className='ms-2 btn btn-sm'>SignOut</button></>
                    :
                    <Link to='/login'></Link>
                }

            </div>
        </div>
    );
};

export default Header;