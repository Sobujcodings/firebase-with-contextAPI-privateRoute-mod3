import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext); // jei nam e context toyri and export korechilam shei context e ano
    // console.log(user);                      // direct user.user na likhe destructuring kore fello hoy
    // console.log(user.user);
    return (
        <div>
            {
                user ? 
                <h1>Current user email is <span className='text-red-500'>{user.email}</span> </h1>
                : 
                ''
            }
           
            {/* ekhane user ta holo currentuser r pura info gula shetar ja ja dekhate chao dekhao */}
        </div>
    );
};

export default Home;