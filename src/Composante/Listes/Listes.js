import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { profileContext } from "../../Context/Profile";

import './Listes.scss';

const Listes = () => {
    const [option, setOption] = useState('')
    const [liste, setListe] = useState([]);
    const { profile } = useContext(profileContext);

    useEffect(() => {
        const GenererListe = () => {
            setListe([]);
            for (let index = 0; index < Object?.keys(profile?.categories).length; index++) 
               if ( profile?.categories[Object?.keys(profile?.categories)[index]] ===  option && option != null) 
                setListe(currentItem => [{nom: profile?.liste[Object?.keys(profile?.categories)[index]]}, ...currentItem])
        }
        if (option != '')
            GenererListe();
        
    },[option])

    const ListeHandeler = (nom) => setOption(nom === option ? '': nom)
    const ShowListe = (
        <section className="liste">
            {
                liste?.length > 0 ?
                    liste?.map((i) => (
                        <p key={i} className='item-list'>
                            <Link to={'/jeux/'+i.nom}>
                            {i.nom}
                            </Link>
                        </p>
                    ))
                : <button className="go-bible"><Link  to="/jeux">Aller voir la bible</Link></button>

            }
        </section>
    )
    return (
        <>
            <div className="posseder box">
                <p>Je possèdes</p>
                {
                    option === 'aime'?
                    ShowListe
                    :null
                }
                <span onClick={() => ListeHandeler('aime')} className="dropdown">.</span>
            </div>
            <div className="aime box">
                <p>J'aime</p>
                {
                    option === 'maybe'?
                    ShowListe
                    :null
                }
                <span onClick={() => ListeHandeler('maybe')} className="dropdown">.</span>
            </div>
            <div className="nope box">
                <p>Pas intéresser</p>
                {
                    option === 'nope'?
                    ShowListe
                    :null
                }
                <span onClick={() => ListeHandeler("nope")} className="dropdown">.</span>
            </div>
        </>
    )
}
export default (Listes);