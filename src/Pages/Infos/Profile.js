import { useContext, useEffect, useState } from "react";
import { profileContext } from "../../Context/Profile";
import { collection, onSnapshot, where, query, getDocs } from 'firebase/firestore';
import { db } from '../../Config/firebase'
import { Link, Outlet } from "react-router-dom";
import Formulaire from "../Formulaire";


const Profile = () => {
    const {profile} = useContext(profileContext);
    const [navClick, setNavClick] = useState("Listes");


    return(
            <>
            <section className="infosPerso">
                <span className="img">
                    <img src ="" alt="imagePerso"/>
                </span>
                <article className="fichePerso">
                    {
                        profile?.formulaire[1].reponse == "oui" ?
                        <>
                            <h1>{profile?.nom}</h1>
                            <p>({profile?.pseudonyme})</p>
                        </>
                        :
                        <h1>{profile?.pseudonyme}</h1>

                    }
                </article>
            </section>
            <nav>
                <ul>
                    <li>
                            Listes</li>
                    <li> <Link to="/profile/contact">
                            Contact 
                    </Link></li>
                    <li> <Link to="/profile/moi">
                            Compte
                    </Link></li>
                </ul>
            </nav>
            <section className="sectionscompte">
                <button className="listes">
                    <Link to="/profile/listes/aime">Possèder</Link>
                </button>
                <button className="contact">
                    <Link to="/profile/listes/maybe">À acheter</Link>
                </button>
                <button className="listes">
                    <Link to="/profile/listes/nope">pas intéresser</Link>
                </button>
            </section>
        </>
    )
}
export default(Profile);