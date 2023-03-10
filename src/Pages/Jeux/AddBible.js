import { addDoc, collection } from "firebase/firestore";
import  { db } from '../../Config/firebase';
import { useContext, useEffect, useState } from "react";
import { Input, TextArea } from '../../Data/Pages';
import { profileContext } from "../../Context/Profile";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "./AddBible.scss";
import Checkbox from "../../Composante/Input/CheckBox";
import { categorie } from "../../Data/Array"
import PopUp from "../../Composante/PopUp/PopUp";
moment.locale('fr-ca');



const AddBible = () => {
    const {profile} = useContext(profileContext)
    const navigate = useNavigate();
    const [date, setDate] = useState(moment().format() );
    const [isValid, setIsValid] = useState(false);
    const maDate = new Date(date);
    const [formulaire, setFormulaire] = useState({
        approuver: false,
        histoire:"",
        description:"",
        nom:"",
        date: maDate,
        unity: "",
        url:"",
        
    })
    const [categories, setCategories] = useState(categorie);
    const [isDone, setIsDone] = useState(false);
    const validate = () => {
        return formulaire.nom.length;
    }
    useEffect(() => {
        const isValid = validate();
        setIsValid(isValid)

    },[formulaire.histoire])


    const updateBible = (texte, props) => {
        setFormulaire(current => {
            return {
                ...current,
                [props]: texte
            }
        });
    };

    const ChangeHandeler = (nom) => {
        setCategories(
            categories?.map((c) =>(
                c.nom === nom ? {...c, selected: !c.selected} : {...c}
            ))
        )
    }
    var categorieSelect = categories?.filter(c => c.selected).map(c=>c.nom)

    const ClickHandeler = async(e) => {
        e.preventDefault();
        const userRef = await addDoc(collection(db, 'Jeux'), {
            ...formulaire,
            auteur:profile?.pseudonyme,
            categories: categorieSelect,
        })
        setIsDone(true);
        
    }
    return(
        <>
        {
            !isDone ?
            <section className="formAdd jeu">
                <h2>Ajouter un jeu dans la bible</h2>
                <form onSubmit={ClickHandeler} className="formJeu">
                    <div className="presentation">
                        <div className="ficheAdds">
                            <div className="img"><img src="/img/Logos/logo.png"/></div>
                            <div className="input">
                                <Input label="nom" type="text" text="Le nom du jeu" nameFn={updateBible}/>
                            </div>

                        </div>
                    </div>
                    <Checkbox categorie={categories} changeFn={ChangeHandeler}/>
                    <TextArea label="description" text="La description du jeu" ChangeFn={(e) => updateBible(e.target.value, "description")}/>
                    <TextArea label="securiter" text="L'histoire de sa création" ChangeFn={(e) => updateBible(e.target.value, "histoire")}/>
                    <button onClick={ClickHandeler} disabled={!isValid}>Rentrer votre pièce</button>
                </form>
                <PopUp slogan={"Oooh un nouveau jeu! J'espère ne pas subir le même sort dans ce nouveau jeu que dans Snake où je finissais toujours par me faire manger."} nomliste='' />
            </section>
            :
            <section className="submission">
                <h2>Merci d'avoir investi dans l'asile de l'arcade</h2>
                <PopUp slogan={'Votre jeu sera bientôt prêt'} nomliste='' />
                <button onClick={()=>navigate("/jeux/all")}>Retourner dans l'asile</button>
            </section>

        }
        
        </>
    )
}
export default(AddBible);