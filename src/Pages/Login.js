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
                <GoogleButton label='Connectez-vous' onClick={googleHandler}/>
            </div>
        
        </>
    )
}
export default (Login);