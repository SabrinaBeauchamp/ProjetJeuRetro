import { useContext, useEffect, useState } from "react";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

import { profileContext } from "../../Context/Profile";
import { Link } from "react-router-dom";

import "./Search.scss";
import Membre from "./Membre";

const Search = ({ indexName, seaching, IsSearching}) => {
    const [membre, setMembre] = useState(null);
    const { profile, AddContact } = useContext(profileContext);
    const searchClient = algoliasearch('TJCM8B5990', 'd42ed511ce4cfa7a5a915948939745c4');

    const MembreHandeler = (utilisateur) => setMembre(utilisateur);
    const RemoveHandeler = () => setMembre(null);

    
    
    const hitHandeler = ({hit}) => {
        return(
            <>
             {
                indexName === "haha" ?
                <Link to = {`/jeux/${hit.nom}`}>
                        <article className="boxJeu" >
                            <div className="img">
                                <img src={hit.url != '' ? hit.url : "/img/Logos/logo.png"} alt="jeu" />
                            </div>
                            <div className="nom">
                                <h4>{hit.nom}</h4>
                            </div>
                        
                        </article>
                    </Link>
                :
                    <section className="hit">
                        <article className="resultat">
                            <p>{ hit.formulaire[0].reponse === 'oui'? hit.pseudonyme + ' ('+ hit.nom+') ': hit.pseudonyme}</p>
                            <button onClick={() => MembreHandeler(hit)}>Voir plus</button>
                        </article>
                    </section>
        
             }
            
            </>
        )
    }

   

    return(
        <>
            {
                membre === null ?
                <InstantSearch searchClient={searchClient} indexName={indexName}>
                    <SearchBox onClick={()=>IsSearching()} />
                    {
                        seaching ?
                        <Hits hitComponent={hitHandeler} />
                        :null
                    }
                </InstantSearch>
                :
                <Membre membre={membre} removeFn={RemoveHandeler}/>
            }
        </>
    )

}
export default (Search);