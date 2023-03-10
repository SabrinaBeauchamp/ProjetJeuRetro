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
    ModifyProfil : () => {},
    DeleteProfil : () => {},
    AddContact : () => {},
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
    const AddFormulaire = async(formulaire, pseudonyme, nom) => {
        const userRef = doc(db, 'Users', user.uid);
        await setDoc(userRef, {
            formulaire,
            pseudonyme: pseudonyme,
            nom: nom,
            liste:"",
            Recent:"",
            View:0,
        }, {merge:true})
    }
    const AddListes = async(infoListe, id) => {
        console.log(infoListe);
        console.log(id);
        const userRef = doc(db, 'Users', user.uid);
        await setDoc(userRef, {
            categories: { 
                [id]:infoListe.categorie,
            },
            liste: {
                [id]:infoListe.nom,
            }
             
        }, {merge:true})
    }
    const AddContact = async(nom) => {
        const userRef = doc(db, 'Users', user.uid);
        await setDoc(userRef, {
            contact: arrayUnion(nom)
        }, {merge:true})
    }
    const RecentView = async(id) => {
        var index = profile?.View > 4 ? 0: profile?.View;
        console.log("add");
        const userRef = doc(db, 'Users', user.uid);
        await setDoc(userRef, {
            Recent: {
                [index]:id,
            },
            View: increment(1)
        }, {merge:true})
    }
    
    const ModifyProfil = async(formulaire, pseudonyme) => {
        const userRef = doc(db, 'Users', user.uid);
        await setDoc(userRef, {
            formulaire: formulaire,
            pseudonyme: pseudonyme,
        }, {merge:true})
    }

    const DeleteProfil = async() => await deleteDoc(doc(db, "Users", user.uid))


    return (
        <Provider value={{user, profile, CompleterInscription, AddFormulaire , AddListes, RecentView, ModifyProfil, DeleteProfil, AddContact }}>
            {children}
        </Provider>
    )
}

export { ProfileProvider, profileContext};