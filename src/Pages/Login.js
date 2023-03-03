import { useContext } from "react";
import { authContext } from "../Context/Auth";
import { GoogleButton } from 'react-google-button';



const Login =() => {
    const {login} = useContext(authContext);
    const googleHandler = () => {
        console.log("ooh");
        login();
    }

    return(
        <>
            <div className="bgImg"></div>
            <div className="login">
            <GoogleButton style={{
                        backgroundColor: '#E76F51',
                        width: '90%',
                        height: 'auto',
                        margin: 'auto',
                    }} 
                    id="buttonGoogle" label='Connexion' onClick={googleHandler}/>
                
            </div>
        
        </>
    )
}
export default (Login);