import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PopUp from '../../Composante/PopUp/PopUp';
import { authContext } from "../../Context/Auth";
import { Load, Menu, Resultat, Search } from '../../Data/Pages';

import "./ListeBible.scss";

const ListeBible = () => {
    const {isLoading} = useContext(authContext);
    const navigate = useNavigate();
    const newDir = () => navigate("/jeux/add");
    
    return(
        <div className='bible'>
            {
                !isLoading? 
                    <>
                        {/* <Menu/> */}
                        <div className='header'>
                            <h2>Bienvenue dans l'Arcade asile</h2>
                        </div>
                        
                        <Resultat />

                        <section className='section-add'>
                            <p> Tu es certain qu'il n'y a pas un jeu qui mérite sa place dans la bible et que tu aimerais y voir figurer ?</p>
                            <p>Rendez-vous ici.</p>
                            <button className='add' onClick={()=>newDir()}></button>
                            
                        </section>
                    </>
                :
                <Load/>
            }
            <PopUp nomliste={''} slogan="Tu m'as rejoins dans l'asile pour jouer ensemble !" />
        </div>
    )
}
export default(ListeBible);