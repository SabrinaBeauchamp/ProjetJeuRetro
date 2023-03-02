import { useContext, useEffect, useState } from "react";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const Search = ({utilisateurs}) => {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState(utilisateurs);
    

    const SubmitHandeler = (e) => {
        e.preventDefault();
    }
    const ChangerHandeler = (e) => {
        setSearch(e.target.value)
    }
    const searchClient = algoliasearch('TJCM8B5990', 'd42ed511ce4cfa7a5a915948939745c4');

    const hitHandeler = ({hit}) => {
        return(
            <div className="hit">
                <p>{hit.nom}</p>

            </div>
        )
    }
    return(
        <>
            <form onSubmit={SubmitHandeler}>
                <input onChange={(e)=>ChangerHandeler(e)} type="search"/>
                <button>Search</button>
            </form>
            {
                users?.filter((u) => {
                    return search.toLowerCase() === "" ? u : u.nom.toLowerCase.includes(search);
                }).map(u =>( 
                    <p>{u.nom}</p>)
                    )
            }
            <InstantSearch searchClient={searchClient} indexName="haha">
                <SearchBox />
                <Hits hitComponent={hitHandeler} />
            </InstantSearch>
        </>
    )

}
export default (Search);