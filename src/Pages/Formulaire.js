import {
     Input, Load
} from "../Data/Data";
import { choix, completerIncsription} from "../Data/Array";
import { useContext, useState } from "react";
import { profileContext } from "../Context/Profile";
import { authContext } from "../Context/Auth";
import { useNavigate } from "react-router-dom";

const Formulaire = () => {

    const navigate = useNavigate();
    const [int, setInt] =  useState(0);
    const [questions, setQuestion] = useState(completerIncsription)
    const [choixReponse, setChoix] = useState(choix);
    const [visualiser, setVisualiser] = useState(false);
    const [userName, SetUserName] = useState("");

    const { AddFormulaire} = useContext(profileContext);
    const {isLoading, user} = useContext(authContext);

    const ToggleHandeler = (resultat, question) => {
        setChoix(
            choixReponse?.map((c) =>(
                c.nom === resultat ? {...c, selected: !c.selected} : {...c, selected: false}
            ))
        )
        setQuestion(
            questions?.map((ques) => (
                    ques.label === question ? {...ques, reponse:resultat } : {...ques}
                ))
        );
    }

    const ResetChoix = () => {
        setInt(int + 1);
        setChoix(
            choixReponse?.map((c) =>(
                {...c, selected: false}
            ))
        );
    }
    
    const FormHandeler = (e) => {
        e.preventDefault();
    }
    const ClickHandeler = async() => {
        AddFormulaire(questions, userName, user.displayName)
        navigate('/accueil');
    }

    const NameHandeler = (resultat, nom ) => {
        SetUserName(resultat);
        setQuestion(
            questions?.map((ques) => (
                    ques.label === nom ? {...ques, reponse:resultat } : {...ques}
                ))
        );
    }
    
    return(
        <>
            {
                !isLoading ?
                <>
                    <h2>Formulaire</h2>
                    {
                        !visualiser ?
                        <form onSubmit={FormHandeler}>
                                <div className={questions[int].nom}>
                                    <Input label={questions[int].label} text={questions[int].text} type={questions[int].type}  ChangeFn={ToggleHandeler} choix={choixReponse} nameFn={NameHandeler}/>
                                </div>
                                {
                                    int !== questions.length-1 ?
                                    <button onClick={()=>ResetChoix()} disabled={int === questions.length-1}><p>Prochaine Question</p></button>
                                    :   
                                    <button onClick={()=>setVisualiser(!visualiser)} ><p>Sommaire</p></button>
                                }
                            </form>
                            :
                            <>
                                {
                                    questions?.map(({nom, text, reponse}, i) => (
                                        <div key={nom + i}>
                                            <h3>{nom}</h3>
                                            <p>{text}</p>
                                            <p>{reponse}</p>
                                        </div>
                                    ))
                                }
                                <button onClick={()=>ClickHandeler()} ><p>Envoyer</p></button>
                            </>
                    }
                </>
                : <Load/>
            }
        </>
    )

}
export default(Formulaire);