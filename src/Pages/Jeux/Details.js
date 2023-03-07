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
    console.log(jeuId);
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
    console.log(jeux?.unity)
    
    const ClickHandeler = async(nom) => {
        var p = {
            nom: jeux.nom,
            categorie: nom
        }
        AddListes(p, jeux.id);
    }
    return(
        <>
        {
            jeux?.id != null?
            <>
            <section className="presentation">
                <h2>{jeux?.nom}</h2>
                <div className="btns">
                        {
                            options?.map(({nom, url, selected}) => (
                                
                                <button key={nom} onClick={(e)=>ClickHandeler(nom)} className="btn" >
                                    <img src={url}/>
                                </button>
                                ))
                            }
                    </div>
                
            </section>
            <section className="footer"> 
                <div className="description">
                    <h4>Description</h4>
                    <div className="txt">
                        <p>{jeux.description}</p>
                    </div>
                </div>
                    <section className="histoire">
                        <h4>Histoire</h4>
                        <div className="txt">
                            <p>{jeux.histoire}</p>
                        </div>
                    </section>
                    <section className="categories">
                        <h4>Categories</h4>
                        <div className="txt">
                            {
                                Object.keys(jeux.categories).map((j) => (
                                    <p key={jeux.categories[j]}>{jeux.categories[j]}</p>

                                ))
                            }
                        </div>
                    </section>
                
                    

                </section>
            <section className="part-1">
                

            </section>
            <section className="infos">
                <section className="Unity">
                    <span>
                        <h3>Zone de jeu</h3> 
                        <section className="bordure">
                            <section className="screen">
                                {
                                    jeux?.unity == "" ?
                                    <div className="gameplay">
                                        <div className="screen" >
                                        <p className="test">Le jeu est en préparation ... </p>
                                        </div>

                                    </div>
                                    : 
                                    <>
                                        <UnityWindow url={jeux.unity}/> 
                                    </>
                                }

                            </section>
                        
                        </section>
                    </span>
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