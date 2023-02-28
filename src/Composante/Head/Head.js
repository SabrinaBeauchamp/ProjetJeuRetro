import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../Context/Auth";
import { GoogleButton } from 'react-google-button';
import { profileContext } from '../../Context/Profile';



const Head = () => {
    const {login,logout} = useContext(authContext);
    const {profile} = useContext(profileContext);
    const googleHandler = () => {
        console.log("ooh");
        logout();
    }
    return(
        <header className="sideBar">
            <h1><Link to='/'>Logo</Link></h1>
            <nav>
                <ul>
                    <li><Link to='/'>
                            <img src="" alt="Home"/>
                        </Link></li>
                    <li><Link to='/jeux/all'>
                            <img src="" alt="La bible"/>
                        </Link></li>
                    <li><Link to='/scores'>
                            <img src="" alt="Scores"/>
                        </Link></li>
                     {/* {
                        profile?.admin === true ? <>
                            <li><Link to='/jeux/attente'>attente</Link></li>
                        </>
                        :null
                     } */}
                    <li><GoogleButton label='Connectez-vous' onClick={googleHandler}/></li>
                </ul>
            </nav>
        </header>
    )
}
export default(Head);