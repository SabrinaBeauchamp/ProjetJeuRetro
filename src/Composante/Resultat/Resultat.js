import { useState, useEffect, useContext } from "react";
import {Fiches, Recent} from "../../Data/Data";
import moment from 'moment';
import { profileContext } from '../../Context/Profile';
import { Link, useNavigate } from "react-router-dom";
import { collection, onSnapshot, where, query } from 'firebase/firestore';
import { db } from '../../Config/firebase'

import "./Resultat.scss";

const Resultat = ({isAccueil}) => {
    const {profile, RecentView} = useContext(profileContext);
    const [isClick, setIsClick] = useState(false)
    const ClickHandelerMenu = () =>setIsClick(!isClick);
    const [ allJeux, setAllJeux] = useState([]);
    
    useEffect(() => {
        const getDocument = () => {
            const refs = query(collection(db, "Jeux"), where("approuver", "==", true));
            const maCollection =  onSnapshot((refs), (snapshot) => {
                const monDocuments = snapshot.docs.map(doc => setAllJeux(currentTache => [{id: doc.id, ...doc.data()},...currentTache]))
            })
            
        };
        if (profile.id)
        
        getDocument() 
    },[profile?.id])

    var newest = allJeux?.filter(j => moment(j.date.toDate()).format("MMM") === moment().format("MMM")).map(j => j)
    var recents = allJeux
    const Verif = (id) => {
        for (let index = 0; index < Object?.keys(profile?.Recent).length; index++) 
            if (profile?.Recent?.[index] === id ) 
                return true;
        return false;
    }

    const ClickHandeler = async(id) => {
        if (!Verif(id))
            RecentView(id);
    }

    const navigate = useNavigate();
    const newDir = () => {
        navigate("/jeux/add");
    }

    return (
        <>
        {
            isAccueil ?
                <Recent recent={profile.Recent}/>
                :
                null
        }
            <section className="Recherche">
                <nav className="navBible">
                    <ul>
                        <div>
                            <li onClick={(e) => ClickHandelerMenu()} className={isClick ? `actif`: ""} >Les nouveautées</li>
                            <li onClick={(e) => ClickHandelerMenu()} className={!isClick ? `actif`: ""} >La bible</li>
                        </div>
                        <div>
                            <li>
                            <button className='add' onClick={()=>newDir()}></button>
                            </li>
                        </div>
                    </ul>
                </nav>
                <section className="resultat">
                    {
                        isClick ?
                        <Fiches bible={newest} clickFn={ClickHandeler}/>
                        :
                        <Fiches bible={allJeux} clickFn={ClickHandeler}/>
                    }
                </section>
            </section>
        </>
    )
}
export default (Resultat);