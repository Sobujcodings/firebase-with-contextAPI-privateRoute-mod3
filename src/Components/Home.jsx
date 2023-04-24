import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext); // jei nam e context toyri and export korechilam shei context e ano
    console.log(user);                      // direct user.user na likhe destructuring kore fello hoy
    // console.log(user.user);
    return (
        <div>
            <h1>this is the home {user}</h1>
        </div>
    );
};

export default Home;