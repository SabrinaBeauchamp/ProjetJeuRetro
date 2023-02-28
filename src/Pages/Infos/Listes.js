import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { profileContext } from "../../Context/Profile";
import { options } from "../../Data/Array";


const Listes = () => {
    const [option, setOption] = useState(options)
    const [isValid, setIsValid] = useState(false);
    const { profile } = useContext(profileContext);
    const [liste, setListe] = useState([]);
    const { listeId } = useParams();
    const validate = () => {
        const o = option?.filter(o => o.selected == true).map(o => o.selected);
        return o.length;
    }
    useEffect(() => {
        for (let index = 0; index < Object?.keys(profile?.categories).length; index++) 
           if ( profile?.categories[Object?.keys(profile?.categories)[index]] ===  listeId) 
                setListe(currentItem => [{nom: profile.liste[Object?.keys(profile?.categories)[index]]}, ...currentItem])
        
    },[option])
    console.log(liste.length);
    const CLickHandeler = (e) => {
        setOption(
            option?.map(o => (
                o.nom == e ? {...o, selected: !o.selected} : {...o, selected: false}
            ))
        )
    }


    return(
        <>
            <h1>Listes</h1>
            {
                // !isValid ?
                // option?.map(({nom, titre, selected}) => (
                //     <button key={nom} onClick={(e)=>CLickHandeler(nom)} disabled={selected}>{titre}</button>
                // ))
                // :
                <>
                    {
                        liste?.length > 0 ?
                            liste?.map((i) => (
                                <div key={i} className="ficheCarrees">
                                    <p>{i.nom}</p>
                                </div>
                            ))
                        : <button><Link to="/jeux">Aller voir la bible</Link></button>
                    }
                    <button>
                        <Link to="/profile">
                            <img src="" alt="retour"/>
                        </Link>
                    </button>
                </>
            }
        </>
    )
}
export default(Listes);