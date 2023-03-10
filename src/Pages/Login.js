import { useContext } from "react";
import { authContext } from "../Context/Auth";
import { GoogleButton } from 'react-google-button';
import PopUp from "../Composante/PopUp/PopUp";

import "./Login.scss";

const Login =() => {
    const {login} = useContext(authContext);
    const googleHandler = () => login();

    return(
        <div className="intro">
            <h2 className="titre-site">L'Asile de L'Arcade</h2>
            <section className="explication">
                <section className="but">
                    <h3>Description</h3>
                    <div className="txt">
                        L'Asile de L'Arcade est une application de jeux rétro qui vous permet de revivre la nostalgie et d'apprendre sur les jeux rétro, de soumettre des demandes de jeux, d'enregistrer vos scores et de partager vos préférences de jeux.
                    </div>
                </section>
                <section className="login">
                <div className="btnGoogle">
                <PopUp nomliste={''} slogan="'Je me sers de ChatGPT pour m'assister dans la rédaction de mes phrases.'"/>
                    <GoogleButton style={{
                                backgroundColor: '#E76F51',
                                width: '70%',
                                height: 'auto',
                                margin: 'auto',
                                zIndez:'5',
                            }} 
                            id="buttonGoogle" label='Connexion' onClick={googleHandler}/>

                </div>
                </section>
            
            </section>
        </div>
    )
}
export default (Login);