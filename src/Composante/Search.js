import { useContext, useEffect, useState } from "react";

const Search = ({utilisateurs}) => {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState(utilisateurs);
    

    const SubmitHandeler = (e) => {
        e.preventDefault();
    }
    const ChangerHandeler = (e) => {
        setSearch(e.target.value)
    }

    const Resultat = () => {
        
    }
    console.log(users[0])
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
        </>
    )

}
export default (Search);