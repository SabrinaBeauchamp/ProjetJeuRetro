import {
    useParams
} from "react-router-dom";
import { useEffect, useState, useContext, useRef } from "react";
import { collection, onSnapshot, where, query, getDocs, deleteDoc, doc, setDoc, addDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../../Config/firebase'
import { profileContext } from "../../Context/Profile";
import { options, } from "../../Data/Array";
import UnityWindow from "../../Composante/Unity/UnityWindow";

import { Load } from "../../Data/Data";

import "./Details.scss";

const Details = () => {
    const {jeuId} = useParams();
    const [jeux, setJeux] = useState({});
    const { AddListes } = useContext(profileContext);

    useEffect(() => {
        const getDocument = () => {
            const refs = query(collection(db, "Jeux"), where("nom", "==", jeuId));
            const maCollection =  onSnapshot((refs), (snapshot) => {
                const monDocuments = snapshot.docs.map(doc => setJeux({id: doc.id, ...doc.data()}))
            });
        };
        if(jeuId)
        getDocument() 
    },[jeuId])
    
    const ClickHandeler = async() => {
        var p = {
            nom: jeux.nom,
        }
        AddListes(p, jeux.id);
    }
    return(
        <>
        {
            jeux != null?
            <>
            <section className="presentation">
                <span>
                    <div className="fiche">
                        <div className="imgJeu">
                            <img scr="" alt="img-jeu" />
                        </div>
                        <h1>{jeux?.nom}</h1>
                    </div>
                    <div className="btn">
                        {
                            options?.map(({nom, selected}) => (
                                
                                <button key={nom} onClick={(e)=>ClickHandeler(nom)} className={selected?"black" : "white"} >{nom}</button>
                                ))
                            }
                    </div>
                </span>
                <div className="description">
                    <h4>Description</h4>
                    <div className="txt">
                        <p>lorem</p>
                    </div>
                </div>
            </section>
            <section className="infos">
                <section className="Unity">
                    {
                        jeux?.unity?.loaderUrl !== "" ?
                        <UnityWindow url={jeux?.unity}/>
                        : 
                        <div className="gameplay">
                            <div className="screen" >
                                <p className="test">Le jeu est en préparation ... </p>
                            </div>

                        </div>
                    }
                </section>
                <section className="footer"> 
                    <section className="histoire">
                        <h4>Histoire</h4>
                        <div className="txt">
                            <p>lorem</p>
                        </div>
                    </section>
                    <section className="categories">
                        <h4>Categories</h4>
                        <div className="txt">
                            <p>lorem</p>
                        </div>
                    </section>

                </section>
            </section>
            </>
            :
            <Load/>
        }
        </>
    )
}
export default(Details);