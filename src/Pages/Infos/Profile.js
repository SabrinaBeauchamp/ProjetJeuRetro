import { useContext, useState } from "react";
import { profileContext } from "../../Context/Profile";
import { Link, useNavigate } from "react-router-dom";

import './Profile.scss';
import PopUp from "../../Composante/PopUp/PopUp";
import Listes from "../../Composante/Listes/Listes";
import Contact from "./Contact/Contact";
import ProfileDetail from "./ProfileDetail";
import Formulaire from "../Formulaire";
import { authContext } from "../../Context/Auth";
import { Load } from "../../Data/Pages";

const Profile = () => {
    const {profile} = useContext(profileContext);
    const {isLoading} = useContext(authContext);
    const [menu, setMenu] = useState('liste');
    var nom = profile?.formulaire?.[0].reponse == "non" ? profile?.nom + " ("+ profile?.pseudonyme+") " : profile?.pseudonyme ;

    const MenuHandeler = (nom) => setMenu(nom)

    return(
            <>
            {
                !isLoading ?
                !profile?.formulaire ?
                <Formulaire/>
            : 
            <>
                <section className="infosPerso">
                    <article className="fichePerso">
                        {
                            profile?.formulaire?.[0].reponse == "non" ?
                            <>
                                <h1>{profile?.nom}</h1>
                                <p>({profile?.pseudonyme})</p>
                            </>
                            :
                            <h1>{profile?.pseudonyme}</h1>
                            
                        }
                    </article>
                </section>
                <section className="infos-profile">
                    <nav className="nav">
                        <ul>
                            <li onClick={() => MenuHandeler('liste')} className={menu === 'liste' ? 'On' : ''}> Listes</li>
                            <li onClick={() => MenuHandeler('contact')} className={menu === 'contact' ? 'On' : ''}> Contact </li>
                            {/* <li onClick={() => MenuHandeler('Compte')} className={menu === 'Compte' ? 'On' : ''}>  Compte</li> */}
                        </ul>
                        <PopUp slogan={'Je te souhaite la bienvenue dans votre compte '  + nom } nomliste=''/>
                    </nav>
                    <section className="sectionscompte">
                        {
                            menu != "liste" ?
                                menu === 'contact' ?
                                <Contact/>
                                :
                                <ProfileDetail/>
                            :
                            <Listes/>
                        }
                    </section>

                </section>
            
            </>
            :
            <Load/>
            }
        </>
    )
}
export default(Profile);