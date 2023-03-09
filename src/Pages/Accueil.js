import { useContext, useState } from "react";
import { profileContext } from "../Context/Profile";
import { authContext } from "../Context/Auth";
import { Formulaire, Load, Resultat, Menu} from "../Data/Data";

const Accueil = () => {
    const {profile} = useContext(profileContext);
    const {isLoading} = useContext(authContext);
     
    return(
        !isLoading ? 
        <>
        {
            !profile?.formulaire ?
                <Formulaire/>
            : 
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