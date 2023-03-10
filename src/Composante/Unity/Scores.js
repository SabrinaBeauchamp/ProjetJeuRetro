import { collection, onSnapshot, where, query, orderBy } from 'firebase/firestore';
import { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../Config/firebase'
import { profileContext } from'../../Context/Profile';
import { jeux } from '../../Data/Array';
import PopUp from '../PopUp/PopUp';

import './Scores.scss';

const Scores = () => {
    const { profile } = useContext(profileContext);
    const [scores, setScores] = useState([]);
    const [scoresJeu, setScoresJeu] = useState([]);
    const [nom, setNom] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        const getDocument = () => {
            const refs = collection(db, "Scores");
            const q = query(refs, orderBy("score"));
            const maCollection =  onSnapshot((q), (snapshot) => {
                const monDocuments = snapshot.docs.map(doc => setScores(currentScores => [{id: doc.id, ...doc.data()},...currentScores]))
            })
        };
        if (profile.id)
        getDocument() 
    },[profile?.id])
    
    const ArrayGame = jeux.map((i,jeu)=>{
        return <p onClick={()=>ChangeArray(i)} key={jeu+i}>{i}</p>
    })

    const ChangeArray = (nom) => {
        setNom( nom === "Démineur" ? "Demineur" :nom);
        setScoresJeu();
        setScoresJeu(scores?.filter(s => s.jeu === nom).map(s =>s))
    } 

    return(
        <div className='array_score'>
            <h2 className='page-score'>Tableau de Pointages</h2>
            <section className='tableau'>
                <section className='jeux'>
                {ArrayGame}
                </section>
                <section className='scores'>
                    <div className='bg' style ={{backgroundImage:"url(/img/Logos/"+nom.replace(' ', '')+".png)",}}></div>
                    <section>
                    {
                        nom != '' ?
                                scoresJeu?.length > 0 ?
                                    scoresJeu?.map(({score, name, id}, i) => (
                                            <article key={id + 1} className='score'>
                                                <p>{score}</p>
                                                <p>{name}</p>
                                            </article>

                                    ))
                                    :
                                    <button onClick={() => navigate("/jeux/"+nom)}>Aller jouer</button>
                                
                        : 
                        <p>Sélectionner un jeu</p>
                    }

                    </section>
                    
                 </section>

            </section>
            <PopUp nomliste={''} slogan="Penses-tu être l'un des meilleurs ? Cet endroit te permettra de consulter ton score ainsi que celui des autres joueurs." />
        
        
        </div>
    )
}
export default (Scores)