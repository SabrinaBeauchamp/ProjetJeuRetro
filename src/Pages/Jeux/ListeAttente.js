import { collection, onSnapshot, where, query, getDocs, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../../Config/firebase'
import { useContext, useEffect, useState,  } from 'react';
import { profileContext } from '../../Context/Profile';
import { useNavigate } from 'react-router-dom';

const ListeAttente = () => {
    const [ allJeux, setAllJeux] = useState([]);
    const {profile} = useContext(profileContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        const getDocument = () => {
            const refs = query(collection(db, "Jeux"), where("approuver", "==", false));
            const maCollection =  onSnapshot((refs), (snapshot) => {
                const monDocuments = snapshot.docs.map(doc => setAllJeux(currentTache => [{id: doc.id, ...doc.data()},...currentTache]))
            })
            
        };
        if(allJeux)
        getDocument() 
    },[profile?.id ])
    
    const onClickHandeler = async(nom, isDeleted) => {
        const userRef = doc(db, 'Jeux', nom);
        isDeleted ?
        await deleteDoc(userRef)
        : 
        await setDoc(userRef, {
            approuver: true
        }, {merge:true})
        setAllJeux(
            isDeleted ? 
            allJeux.filter( p => p.id !== nom)
            :
            allJeux?.map(p =>(
                p.id === nom ? {...p, approuver: !p.approuver} : {...p}
                ))
                )
                navigate("/jeu/attente")
            }
            console.log(allJeux);


    return(
        <>
            {
                allJeux?.map(({nom, description, conseil, securiter, categoriesId, auteur, sources, id, approuver},i) => (
                    
                    <div key={nom+1}>
                        {
                            !approuver ?
                            <section  className={"ficheAttente "+nom }>
                                <article>
                                    <p>{nom}</p>
                                    <p>{description}</p>
                                    <p>{conseil}</p>
                                    <p>{securiter}</p>
                                    <p>{categoriesId}</p>
                                    <p>{auteur}</p>
                                    <p>{sources}</p>
                                </article>
                                <button onClick={(e) =>onClickHandeler(id , false)}>Approuver</button>
                                <button onClick={(e) =>onClickHandeler(id , true)}>Supprimer</button>
                            </section>
                            :null
                        }
                    </div>
                ))
            }
        </>
    )
}
export default(ListeAttente);