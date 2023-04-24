import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);
//creating context api (must export it) & set initial value to null then -- create a provider of it and set value.
// ata diye access korbo nicher value ta k
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"
import app from '../Firebase/firebase.confiq';


//auth ta ekhane use korate sign/signup r kaj gula oikhane direct korte parbo na ekhane kore oikhane nibo retrn kore
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // const user = 'Sagor-Nodi';
    // (children mane router provider ta) aikhane jkono value niye amra value set kore onno compo t dekhate pari
    const [user,setUser] = useState(null);



    //for register
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // reg/login page e call korbo ai func k(context diye padhiye dici mail/pass diye pabo auth soho)
    // oikhan(login/reg theke call korbo mail,pass diye peye jabo return e auth soho then .then .catch)
    // karon auth ekhane r maill pass oikhane tai auth keo oikhane newyar jonno ai functin kora



    // for login(singin)
    const signInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }



    // padhaici ai object r vhitore kore
    const authinfo = {
        user,createUser,signInUser
    }



    // jei jei funciton korbo sheguloke ai obj vhitore padhiye dibo (destruct kore use korbo)
    // padhachhi akta obj r vhitore kore (tai destructin kora lagte pare)
    // oi function k context diye padhiye dilam jate dhore call korte pare

    return (
        <div>
            {/* children r shob jaygay ai value ta k use korte parbo usecontext(contextName) diye */}
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;