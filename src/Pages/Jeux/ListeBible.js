
import { collection, onSnapshot, where, query, getDocs } from 'firebase/firestore';
import { db } from '../../Config/firebase'
import { useContext, useEffect, useState,  } from 'react';
import { profileContext } from '../../Context/Profile';
import { authContext } from "../../Context/Auth";
import { Load } from '../../Data/Data';
import { Link } from "react-router-dom";

const ListeBible = () => {
    const [ allJeux, setAllJeux] = useState([]);
    const {profile} = useContext(profileContext);
    const {isLoading} = useContext(authContext);
    
    useEffect(() => {
        const getDocument = () => {
            const refs = query(collection(db, "Jeux"), where("approuver", "==", true));
            const maCollection =  onSnapshot((refs), (snapshot) => {
                const monDocuments = snapshot.docs.map(doc => setAllJeux(currentTache => [{id: doc.id, ...doc.data()},...currentTache]))
            })
            
        };
        if (profile.id)
    
        getDocument() 
    },[profile?.id])
    console.log(allJeux);


    return(
        <>
            {
                !isLoading? 
                allJeux?.map(({nom, description, conseil, securiter, categoriesId, auteur, sources, id, approuver},i) => (
                    <section key={nom+1} className={"fiche "+nom }>
                        {
                            approuver ?
                            <  >
                                <article>
                                    <p><Link to={`/jeu/${nom}`}>{nom}</Link></p>
                                    {/* <p>{description}</p>
                                    <p>{conseil}</p>
                                    <p>{securiter}</p>
                                    <p>{categoriesId}</p>
                                    <p>{auteur}</p>
                                    <p>{sources}</p> */}
                                </article>
                                {/* <button onClick={(e) =>onClickHandeler(id , false)}>Approuver</button>
                                <button onClick={(e) =>onClickHandeler(id , true)}>Supprimer</button> */}
                            </>
                            :null
                        }
                    </section>
                ))
                :
                <Load/>
            }
        </>
    )
}
export default(ListeBible);