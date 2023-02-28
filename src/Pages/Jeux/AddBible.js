import { addDoc, collection } from "firebase/firestore";
import  { db } from '../../Config/firebase';
import { useContext, useEffect, useState } from "react";
import { Input, TextArea } from '../../Data/Data';
import { profileContext } from "../../Context/Profile";
import { useNavigate } from "react-router-dom";
import moment from "moment";
moment.locale('fr-ca');


const AddBible = () => {
    const {profile} = useContext(profileContext)
    const navigate = useNavigate();
    const [date, setDate] = useState(moment().format() );
    const [isValid, setIsValid] = useState(false);
    const maDate = new Date(date);
    const [formulaire, setFormulaire] = useState({
        approuver: false,
        categoriesId:"",
        conseil:"",
        description:"",
        nom:"",
        securiter:"",
        sources:"",
        date: maDate,
        unity: {
            loaderUrl:"",
            dataUrl:"",
            frameworkUrl: "",
            codeUrl: "",
        }
        
    })
    const validate = () => {
        return formulaire.nom.length;
    }
    useEffect(() => {
        const isValid = validate();
        setIsValid(isValid)

    },[formulaire.sources])


    const updateBible = (texte, props) => {
        setFormulaire(current => {
            return {
                ...current,
                [props]: texte
            }
        });
    };
    console.log(formulaire);
    const ClickHandeler = async(e) => {
        e.preventDefault();
        const userRef = await addDoc(collection(db, 'Jeux'), {
            ...formulaire,
            auteur:profile?.pseudonyme,
        })
        navigate("/profile")
    }
    return(
         <>
             <h2>Ajouter une jeu dans la bible</h2>
             <form onSubmit={ClickHandeler}>
                <TextArea label="nom" text="Le nom du jeu" ChangeFn={(e) => updateBible(e.target.value, "nom")}/>
                <TextArea label="description" text="La description du jeu" ChangeFn={(e) => updateBible(e.target.value, "description")}/>
                <TextArea label="securiter" text="L'histoire du jeu" ChangeFn={(e) => updateBible(e.target.value, "securiter")}/>
                <TextArea label="sources" text="metter vos source sur la jeu" ChangeFn={(e) => updateBible(e.target.value, "sources")}/>
                <button onClick={ClickHandeler} disabled={!isValid}>Soumettre votre jeu retro dans la bible</button>
            </form>
         </>
    )
}
export default(AddBible);