import { GoogleAuthProvider, signInWithPopup, signOut, } from "firebase/auth";
import {doc, setDoc} from 'firebase/firestore';
import React, { useState, useEffect } from "react";
import { auth, db } from "../Config/firebase";



const authContext = React.createContext({
    login: () => {},
    logout: () => {},
    updateProfilePic: () => {},
    user: null,
    isLoading: true,
});

const {Provider} = authContext;

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [isLoading, setLoading] = useState(true);
    
    console.log(user);
    const login = async() => {
        console.log("connecte toi");
        const providerGoogle = new GoogleAuthProvider();
        const cred = await signInWithPopup(auth, providerGoogle);
        saveDoc(cred.user);
        
    }
    const logout = async() => {
        signOut(auth);
        setUser();
    }

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false)
        });
        
        return unsub;
    },[]);
    
    
    const saveDoc = async(user) => {
        try {
            const docRef = doc(db, 'Users', user.uid);
            await setDoc(docRef, {
                nom: user.displayName,
            },{merge: true})
        }
        catch(error){
            console.log(error)
        }
    }
    


    return (
        <Provider value={{login, logout, user, isLoading}}>
            {children}
        </Provider>
    )
}

export {AuthProvider, authContext};