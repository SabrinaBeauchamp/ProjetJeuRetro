import {
     Input, Load
} from "../Data/Data";
import { choix, completerIncsription, categorie } from "../Data/Array";
import { useContext, useState, useEffect } from "react";
import { profileContext } from "../Context/Profile";
import { authContext } from "../Context/Auth";
import { useNavigate } from "react-router-dom";
import Checkbox from "../Composante/Input/CheckBox";

import "./Formulaire.scss";

const Formulaire = () => {
    const { user } = useContext(authContext)
    const [choixReponse, setChoix] = useState(choix);
    const [choixReponse2, setChoix2] = useState(choix);
    const {profile, AddFormulaire} = useContext(profileContext)
    const navigate = useNavigate();
    const [isValid, setIsValid] = useState(false);
    const [categories, setCategories] = useState(categorie);
    const [nom, setNom] = useState('');
    const [formulaire, setFormulaire] = useState([
            {
                label:1,
                question: "voulez-vous cacher votre nom?",
            },
            {
                label:2,
                question: "selectionner quelle categorie de jeu que vous aimer jouer?",
            },
            {
                label:3,
                question: "Est-ce que vous accepter de rendre public vos liste aux autres utilisateur?",

            },
        ])
    const [isDone, setIsDone] = useState(false);
    
    const ToggleHandeler = (resultat, question) => {
        setChoix(
            choixReponse?.map((c) =>(
                c.nom === resultat ? {...c, selected: !c.selected} : {...c, selected: false}
            ))
        )
        AddValue(resultat, question)
        
    }
    const ToggleHandeler2 = (resultat, question) => {
        setChoix2(
            choixReponse2?.map((c) =>(
                c.nom === resultat ? {...c, selected: !c.selected} : {...c, selected: false}
                ))
                )
                AddValue(resultat, question)
            setIsValid(true)
    }

    const AddValue = (resultat, question) => setFormulaire( formulaire?.map(f => (
        f.label === question ? {...f, reponse: resultat} : {...f}
    )))
    const UpdateValue = () => setFormulaire( formulaire?.map(f => (
        f.label === 2 ? {...f, reponse: categories?.filter(c => c.selected).map(c=>c.nom)} : {...f}
    )))


    const updateNom = (e) => setNom(e)

    const ChangeHandeler = (nom) => {
        setCategories(
            categories?.map((c) =>(
                c.nom === nom ? {...c, selected: !c.selected} : {...c}
            ))
        )
        UpdateValue();
    }
   
    const ClickHandeler = async(e) => {
        e.preventDefault();

       AddFormulaire(formulaire, nom, user.displayName)
        
    }
    return(
        <>
        {
            !isDone ?
            <section className="formAdd">
                <h2>Formulaire</h2>
                <form onSubmit={ClickHandeler} className="formulaireInit">
                    <div className="presentation">
                        <div className="ficheAdds">
                            <div className="img"><img src=""/></div>
                            <div className="input">
                                <Input label="pseudonyme" type="text" text="Votre Pseudonyme" nameFn={updateNom}/>
                            </div>

                        </div>
                    </div>
                    <Checkbox categorie={categories} changeFn={ChangeHandeler}/>
                    <section>
                        <div className="check">
                            <Input label={formulaire[0].label} text={formulaire[0].question} type={"Checkbox"}  ChangeFn={ToggleHandeler} choix={choixReponse}/>
                        </div>
                        <div className="check">
                            <Input label={formulaire[2].label} text={formulaire[2].question} type={"Checkbox"}  ChangeFn={ToggleHandeler2} choix={choixReponse2}/>
                        </div>
                    </section>
                    <button onClick={ClickHandeler} disabled={!isValid}>Rentrer dans l'asile</button>
                </form>
            </section>
            :
            <section className="submission">
                <h2>Merci d'avoir investi dans l'asile de l'arcade</h2>
                <p>Votre jeu sera bientôt prêt</p>
                <button onClick={()=>navigate("/")}>Retourner dans l'asile</button>
            </section>

        }
        
        </>
    )

}
export default(Formulaire);