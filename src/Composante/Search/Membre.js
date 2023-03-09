import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListeDetails from "../Listes/ListeDetails";

import './Membre.scss';

const Membre = ({membre, removeFn}) => {

    const [option, setOption] = useState('')
    const [liste, setListe] = useState([]);

    useEffect(() => {
        const GenererListe = () => {
            setListe([]);
            for (let index = 0; index < Object?.keys(membre?.categories).length; index++) 
               if ( membre?.categories[Object?.keys(membre?.categories)[index]] ===  option && option != null) 
                setListe(currentItem => [{nom: membre?.liste[Object?.keys(membre?.categories)[index]]}, ...currentItem])
        }
        if (option != '')
            GenererListe();
        
    },[option])
    const ListeHandeler = (nom) => setOption(nom === option ? '': nom)
    
    
    return(
        <section className="show-membre">
            <button onClick={() => removeFn()} className="back">retourner</button>
        <h2>{membre?.formulaire[0].reponse === 'oui'? membre?.pseudonyme + ' ('+ membre?.nom+') ': membre?.pseudonyme}</h2>
        <div className="categories-membre">
            <h3>Categories</h3>
            <div>
                {
                    membre?.formulaire[1]?.reponse?.map(r => (
                        <p>{r}</p>
                        ))
                    }
            </div>
        </div>
        {
            membre?.formulaire[2]?.reponse === 'oui'? 
            <div className="box-white">
                <h3>Listes</h3>
                <section className="liste-membre">
                    <ListeDetails ListeHandeler={ListeHandeler} liste={liste} option={option} />
                </section>
            </div>
        :null

        }
    </section>
    )
}
export default (Membre);