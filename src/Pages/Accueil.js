import { useContext } from "react";
import { profileContext } from "../Context/Profile";
import { authContext } from "../Context/Auth";
import { Formulaire, Load, Recent, Resultat, UnityWindow, Menu} from "../Data/Data";

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
                        <Recent/>
                        <Resultat/>
                    </>
                }
                </>
            :<Load/>
        
    )
}
export default(Accueil);