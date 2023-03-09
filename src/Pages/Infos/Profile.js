import { useContext, useState } from "react";
import { profileContext } from "../../Context/Profile";
import { Link, useNavigate } from "react-router-dom";

import './Profile.scss';
import PopUp from "../../Composante/PopUp/PopUp";
import Listes from "../../Composante/Listes/Listes";
import Contact from "./Contact/Contact";
import ProfileDetail from "./ProfileDetail";

const Profile = () => {
    const {profile} = useContext(profileContext);
    const [menu, setMenu] = useState('liste');

    const MenuHandeler = (nom) => setMenu(nom)

    return(
            <>
            <section className="infosPerso">
                <article className="fichePerso">
                    {
                        profile?.formulaire?.[1].reponse == "non" ?
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
                    <PopUp slogan={'Bienvenue dans votre compte ' + profile?.nom } nomliste=''/>
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
    )
}
export default(Profile);