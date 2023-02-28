import { authContext } from './Auth';
import { doc, onSnapshot, setDoc, arrayUnion, arrayRemove, collection, addDoc, deleteDoc, increment, updateDoc} from 'firebase/firestore';
import React, { useState, useEffect, useContext,  } from "react";
import { db } from "../Config/firebase";
const profileContext = React.createContext({
    user: null,
    profile:null,
    CompleterInscription : () => {},
    AddFormulaire : () => {},
    AddListes : () => {},
    RecentView : () => {},
});

const {Provider} = profileContext;

const ProfileProvider = ({children}) => {
    const {user} = useContext(authContext);
    const [profile,setProfile] = useState({});
    
    
    // Récupérer LE profil de l'utilisateur connecté à partir du user.uid
    useEffect(() => {
        const unsub = onSnapshot(doc(db, 'Users', user.uid), (doc) => setProfile({
            ...doc.data(),
            id:doc.id
        }));      
        return unsub;
    },[user.uid]);
    
    const CompleterInscription = async(genre, pseudonyme) => {
        const userRef = doc(db, 'Users', user.uid);
        console.log(pseudonyme);
        await setDoc(userRef, {
            pseudonyme:pseudonyme,
        }, {merge:true})
    }
    const AddFormulaire = async(formulaire) => {
        const userRef = doc(db, 'Users', user.uid);
        await setDoc(userRef, {
            formulaire: formulaire,
        }, {merge:true})
    }
    const AddListes = async(infoListe, id) => {
        const userRef = doc(db, 'Users', user.uid);
        await setDoc(userRef, {
            categories: { 
                [id]:infoListe.categorie,
            },
            liste: {
                [id]:profile?.categories?.[id] ? infoListe : arrayUnion(infoListe) 
            }
             
        }, {merge:true})
    }
    const RecentView = async(id) => {
        
        
        // var index = profile?.View;
        console.log("add");
        // const userRef = doc(db, 'Users', user.uid);
        // await setDoc(userRef, {
        //     Recent: {
        //         [index]:id,
        //     },
        //     View: increment(1)
        // }, {merge:true})
    }


    return (
        <Provider value={{user, profile, CompleterInscription, AddFormulaire , AddListes, RecentView }}>
            {children}
        </Provider>
    )
}

export { ProfileProvider, profileContext};