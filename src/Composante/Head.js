import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../Context/Auth";
import { GoogleButton } from 'react-google-button';
import { profileContext } from '../Context/Profile';



const Head = () => {
    const {login,logout} = useContext(authContext);
    const {profile} = useContext(profileContext);
    const googleHandler = () => {
        console.log("ooh");
        logout();
    }
    return(
        <header>
            <h1><Link to='/'>Logo</Link></h1>
            <nav>
                <ul>
                    <li><Link to='/jeux/add'>ajouter jeux</Link></li>
                    <li><Link to='/pong'>pong</Link></li>
                    <li><Link to='/space_invaders'>space invaders</Link></li>
                     {
                        profile?.admin === true ? <>
                            <li><Link to='/jeux/attente'>attente</Link></li>
                        </>
                        :null
                     }
                    <li><GoogleButton label='Connectez-vous' onClick={googleHandler}/></li>
                </ul>
            </nav>
        </header>
    )
}
export default(Head);