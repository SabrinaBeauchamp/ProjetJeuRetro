import { useContext, useState } from "react";
import { profileContext } from "../../Context/Profile";
import { Link, useNavigate } from "react-router-dom";

import './Profile.scss';

const Profile = () => {
    const {profile} = useContext(profileContext);
    const navigate = useNavigate();

    const newDir = (url) => {
        navigate('/profile/listes/'+url);
    }

    return(
            <>
            <section className="infosPerso">
                <div className="img">
                    <img src ="/img/Compte/moumou_log.png" alt="imagePerso"/>
                </div>
                <article className="fichePerso">
                    {
                        profile?.formulaire[1].reponse == "non" ?
                        <>
                            <h1>{profile?.nom}</h1>
                            <p>({profile?.pseudonyme})</p>
                        </>
                        :
                        <h1>{profile?.pseudonyme}</h1>

                    }
                </article>
            </section>
            <nav className="nav">
                <ul>
                    <li className="On">
                            Listes</li>
                    <li className=""> <Link to="/profile/contact">
                            Contact 
                    </Link></li>
                    <li className=""> <Link to="/profile/moi">
                            Compte
                    </Link></li>
                </ul>
            </nav>
            <section className="sectionscompte">
                <button className="posseder" onClick={()=>newDir('aime')}>
                    <div className="posseder"></div>
                    <p>Je possèdes</p>
                </button>
                <button className="aime" onClick={()=>newDir('maybe')}>
                    <div className="aime"></div>
                    <p>J'aime</p>
                </button>
                <button className="nope" onClick={()=>newDir('nope')}>
                    <div className="nope"></div>
                    <p>Pas intéresser</p>
                </button>
            </section>
        </>
    )
}
export default(Profile);