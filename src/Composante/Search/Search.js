import { useContext, useEffect } from "react";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

import { profileContext } from "../../Context/Profile";

const Search = ({ indexName}) => {
    const { profile, AddContact } = useContext(profileContext);
    
    const searchClient = algoliasearch('TJCM8B5990', 'd42ed511ce4cfa7a5a915948939745c4');

    const hitHandeler = ({hit}) => {
        return(
            <section className="hit">
                <article className="resulta">
                    {
                        profile.nom != hit.nom ?
                        <>
                            <p>{hit.nom}</p>
                            {
                                indexName === 'users'? 
                                <button onClick={(e)=>AddContact(hit.nom)} className="add"><img src="/img/imgs/add.png"/></button>
                                : null
                            }
                        </>
                        :
                        null
                    }
                </article>
            </section>
        )
    }

    return(
        <>
            <InstantSearch searchClient={searchClient} indexName={indexName}>
                <SearchBox />
                <Hits hitComponent={hitHandeler} />
            </InstantSearch>
        </>
    )

}
export default (Search);