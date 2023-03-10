import { useContext, useState } from "react";
import { profileContext } from "../Context/Profile";
import { authContext } from "../Context/Auth";
import { Formulaire, Load, Resultat, Menu} from "../Data/Pages";

const Accueil = () => {
    const {profile} = useContext(profileContext);
    const {isLoading} = useContext(authContext);
     
    return(
        !isLoading ? 
        <>
        {
            
            <>
                <Menu/>
                <Resultat isAccueil={true}/>
            </>
        }
        </>
        :<Load/>
    )
}
export default(Accueil);