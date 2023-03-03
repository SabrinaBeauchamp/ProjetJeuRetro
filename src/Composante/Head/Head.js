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
        <header className="sideBar box-shadow">
            <nav>
                <ul>
                    <li><Link to='/'>
                            <img src="/img/imgs/home.png" alt="Home"/>
                        </Link></li>
                    <li><Link to='/jeux/all'>
                            <img src="/img/imgs/bible.png" alt="La bible"/>
                        </Link></li>
                    <li><Link to='/scores'>
                            <img src="/img/imgs/stats.png" alt="Search"/>
                        </Link></li>
                     {/* {
                        profile?.admin === true ? <>
                            <li><Link to='/jeux/attente'>attente</Link></li>
                        </>
                        :null
                     } */}
                    <li>
                    <GoogleButton style={{
                        backgroundColor: '#E76F51',
                        width: '90%',
                        height: 'auto',
                        margin: 'auto',
                    }} 
                    id="buttonGoogle" label='Déconnexion' onClick={googleHandler}/></li>
                </ul>
            </nav>
        </header>
    )
}
export default(Head);