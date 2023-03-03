import { collection, onSnapshot, where, query } from 'firebase/firestore';
import { useContext, useState, useEffect } from 'react';
import { db } from '../../Config/firebase'
import { profileContext } from'../../Context/Profile';
import { jeux } from '../../Data/Array';


const Scores = () => {
    const { profile } = useContext(profileContext);
    const [scores, setScores] = useState([]);
    const [scoresJeu, setScoresJeu] = useState('');
    
    useEffect(() => {
        const getDocument = () => {
            const refs = collection(db, "Scores");
            const maCollection =  onSnapshot((refs), (snapshot) => {
                const monDocuments = snapshot.docs.map(doc => setScores(currentScores => [{id: doc.id, ...doc.data()},...currentScores]))
            })
        };
        if (profile.id)
        getDocument() 
    },[profile?.id])
    console.log(scores)
    const ArrayGame = jeux.map((i,jeu)=>{
        return <p onClick={()=>ChangeArray(i)} key={jeu+i}>{i}</p>
    })

    const ChangeArray = (nom) => setScoresJeu(nom)

    return(
        <section className='tableau'>
            <h2>Scores</h2>
            <section className='jeux'>
               {ArrayGame}
            </section>
            {
                scoresJeu != '' ?
                <section>
                    {
                        // scores?.length > 0 ?
                            // scores?.filtre(({score, name, jeu},i) => (
                            //     <article key={name+i} className='score'>
                            //         <p>{score}</p>
                            //         <p>{name}</p>
                            //     </article>
                            //     // <button>Aller gamer</button>
                            // ))
                            // :
                    }
                </section>
                : <p>Sélectionner un jeu</p>
            }

        </section>
    )
}
export default (Scores)