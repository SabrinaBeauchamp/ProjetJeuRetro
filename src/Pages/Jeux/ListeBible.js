import { useContext, } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from "../../Context/Auth";
import { Load, Menu, Resultat } from '../../Data/Data';

import "./ListeBible.scss";

const ListeBible = () => {
    const {isLoading} = useContext(authContext);
    
    return(
        <>
            {
                !isLoading? 
                    <>
                        <Menu/>
                        <div className='header'>
                            <h2>Bienvenue dans l'Arcade asile</h2>
                        </div>
                        
                        <Resultat />
                    </>
                :
                <Load/>
            }
        </>
    )
}
export default(ListeBible);