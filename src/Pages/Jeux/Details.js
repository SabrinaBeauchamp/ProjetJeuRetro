import {
    useParams
} from "react-router-dom"
import { useEffect, useState, useContext, useRef } from "react";
import { collection, onSnapshot, where, query, getDocs, deleteDoc, doc, setDoc, addDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../../Config/firebase'
import { profileContext } from "../../Context/Profile";
import { options, } from "../../Data/Array";
import UnityWindow from "../../Composante/UnityWindow";

const Details = () => {
    const {jeuId} = useParams();
    const [jeux, setJeux] = useState({});
    const { AddListes, profile } = useContext(profileContext);
    useEffect(() => {
        const getDocument = () => {
            const refs = query(collection(db, "jeux"), where("nom", "==", jeuId));
            const maCollection =  onSnapshot((refs), (snapshot) => {
                const monDocuments = snapshot.docs.map(doc => setJeux({id: doc.id, ...doc.data()}))
            })
        };
        if(jeuId)
        getDocument() 
    },[jeuId])
    
    const ClickHandeler = async(categorieListes) => {
        var p = {
            nom: jeux.nom,
        }
        AddListes(p, jeux.id)
        
    }

    return(
        <>
            <h1>{jeux.nom}</h1>
            <div className="btn">
                {
                    options?.map(({nom, selected}) => (

                        <button key={nom} onClick={(e)=>ClickHandeler(nom)}>{nom}</button>
                    ))
                }
            </div>
            <UnityWindow dossier={""}/>
        
        </>
    )
}
export default(Details);