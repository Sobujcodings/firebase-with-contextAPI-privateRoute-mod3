import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { defaultBaseSortFn } from 'match-sorter';
import { Navigate } from 'react-router-dom';

// private route e children hishebe ache <Orders>
const PrivateRoute = ({children}) => {
    // akhn jodi login kora thake taholei order e(children) dhukte dibo noyto login e jaye login koro age

    const {loading,user} = useContext(AuthContext);
    // jodi login kora thake tahole user e data thakbe 

    
    // data load/current user peye gele progress false hoye jabe na hole cholte thakbe loading
    if(loading){
        return <progress className="progress progress-primary w-56" value="100" max="100"></progress>;
    }


    // user check korar age loading k check kore nibe false hole loading off then user r k kache jabe data pele
    // ekhane loading check na  korle direct user r kache jeye dekhbe user nai tokhon login e chole jabe karon 
    // data to tokhon o load hocche load shesh hole user r kache jaawaa ucit tai jotokhon load hobe totokhon 
    // loading k true rekhe chalabo cholbe(Besto rakhbo) r data peye gele false kore dibo loading off then user r 
    // kache jabe and user k pabe tokhon r reload dile data thakleo login e jabe na.
    // user thakle ami children gulay jete parbo
    if(user){         
        return children;                                        // jodi login kora thake tahole children(order e jabe)
    }
    return <Navigate to='/login' replace={true}></Navigate>  // noyto niye jabe login e (automatically)
};

export default PrivateRoute;

// replace coz history t jate save na hoy ai jonno!