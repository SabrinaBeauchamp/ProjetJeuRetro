import { useContext, } from 'react';
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
                            <h2>Bienvenue dans la retro</h2>
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