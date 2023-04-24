import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null);
//creating context api (must export it) & set initial value to null then -- create a provider of it and set value.
// ata diye access korbo nicher value ta k
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from '../Firebase/firebase.confiq';


//auth ta ekhane use korate sign/signup r kaj gula oikhane direct korte parbo na ekhane kore oikhane nibo retrn kore
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // const user = 'Sagor-Nodi';
    // (children mane router provider ta) aikhane jkono value niye amra value set kore onno compo t dekhate pari
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);


    // reg/login page e call korbo ai func k(context diye padhiye dici mail/pass diye pabo auth soho)
    // oikhan(login/reg theke call korbo mail,pass diye peye jabo return e auth soho then .then .catch)
    // karon auth ekhane r maill pass oikhane tai auth keo oikhane newyar jonno ai functin kora



    
    //for register
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }



    // for login(singin)
    const signInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }



    // for logout (Akta func r vhitore korbo return kore dibo jeta drkr signout pathabo context r value hishebe
    // then call kore signout r result pabo then shekhane .then .catch korbo) karon auth aikhane
    const logOut = ()=>{
        return signOut(auth)
        // .then .catch korbo sekhane
    }




    // Observe auth state change (to get sign in user information) jehetu bayrer sathe connection korte hobe 
    // tai useEffect use korte hobe
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
            // data load(user k peye gele loading k false kore dibe true(user na thakle) login e nibo noyto naa)   
            // console.log(currentUser);          
            // current user r shob information peye jabo ai useauthstateChanged use kore
            // current user r shob info k user state e set kore dilam then onno compo te dekhabo info gula context r value hishebe padhiye
        })
        return ()=>{
            unsubscribe();  
            // return(arrow func)e sheta kei abar call kore dibo (karon pore unsubscribe kore return kore dite hoy)
        }

    },[])




    // padhaici ai object r vhitore kore (obj r moddhe dewa jate aktar modde onkgula dewa jay jar jeta lagbe
    // she sheta usecontext use kore desrtruct kore use korbe)
    const authinfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut
    }


    // user state e current user r info gula rakhlam sheta context r value hishbe boshiye dilam jekhane khushi
    // akhn use korte parbo UI te dekhate parbo ai context r usecontext use kore receive kore



    // jei jei funciton korbo sheguloke ai obj vhitore padhiye dibo (destruct kore use korbo)
    // padhachhi akta obj r vhitore kore (tai destructin kora lagte pare)
    // oi function k context diye padhiye dilam jate dhore call korte pare

    
    return (
        <div>
            {/* children r shob jaygay ai value ta k use korte parbo usecontext(contextName) diye */}
            {/* context api r value set kortechi context r nam holo AuthContext */}
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;