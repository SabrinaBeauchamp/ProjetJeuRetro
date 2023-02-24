import { useContext } from "react";
import { profileContext } from "../Context/Profile";
import { authContext } from "../Context/Auth";
import { Formulaire, Load, UnityWindow} from "../Data/Data";

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
                        <section className="profile">
                            <h2>Profile</h2>
                        </section>
                        <section className="Recherche">
                            <h2>Jeux</h2>
                        </section>
                        <section className="Corps">
                            <h2>Visualiser</h2>
                        </section>
                    </>
                }
                </>
            :<Load/>
        
    )
}
export default(Accueil);