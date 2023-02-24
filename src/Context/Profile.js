import { authContext } from './Auth';
import { doc, onSnapshot, setDoc, arrayUnion, arrayRemove, collection, addDoc, deleteDoc} from 'firebase/firestore';
import React, { useState, useEffect, useContext, increment, updateDoc } from "react";
import { db } from "../Config/firebase";
const profileContext = React.createContext({
    user: null,
    profile:null,
    CompleterInscription : () => {},
    AddFormulaire : () => {},
    AddListes : () => {},
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
        console.log(pseudonyme);
        const userRef = doc(db, 'Users', user.uid);
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


    return (
        <Provider value={{user, profile, CompleterInscription, AddFormulaire , AddListes }}>
            {children}
        </Provider>
    )
}

export { ProfileProvider, profileContext};