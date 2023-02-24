import { useContext, useEffect, useState } from "react";
import { profileContext } from "../../Context/Profile";
import { collection, onSnapshot, where, query, getDocs } from 'firebase/firestore';
import { db } from '../../Config/firebase'
import { Link, Outlet } from "react-router-dom";


const Profile = () => {
    const {profile} = useContext(profileContext);
    const [liste, setListe] = useState({});

    useEffect(() => {
        const getDocument = async() => {
            const refs = query(collection(db, "Listes"), where("user", "==", profile?.id)) ;
            const maCollection =  onSnapshot((refs), (snapshot) => {
                const monDocuments = snapshot.docs.map(doc => setListe({id: doc.id, ...doc.data()}))
            })
        }
        if (profile?.id)
            getDocument();

    },[profile?.id])
     console.log(liste)
    return(
            <>
            <section className="infosPerso">
                <span className="img">
                    <img src ="" alt="imagePerso"/>
                </span>
                <article className="fichePerso">
                    <h1>{profile.nom}</h1>
                    <div className="autre">
                        <p>nickname: {profile.pseudonyme}</p>
                        <p>genre: {profile.genre}</p>
                    </div>
                </article>
            </section>
            <section className="sectionscompte">
                <button className="contact">
                    <Link to="/profile/contact">Contact</Link>
                </button>
                <button className="listes">
                    <Link to="/profile/listes">Listes</Link>
                </button>
            </section>
            <Outlet/>
        </>
    )
}
export default(Profile);