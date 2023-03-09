import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from "../../Context/Auth";
import { Load, Menu, Resultat, Search } from '../../Data/Data';

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
                            <p> Tu ne trouve pas un jeu qui est devrais avoir sa place dans la bible?</p>
                            <button className='add' onClick={()=>newDir()}></button>
                            
                        </section>
                    </>
                :
                <Load/>
            }
        </div>
    )
}
export default(ListeBible);