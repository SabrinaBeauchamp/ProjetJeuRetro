import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { profileContext } from "../../Context/Profile";
import { Input } from "../../Data/Data";

import './ProfileDetail.scss';

const ProfileDetail = () => {
    const { profile, ModifyProfil, DeleteProfil } = useContext(profileContext);
    const navigate = useNavigate();
    const [formulaire, setFormulaire] = useState(profile)
    console.log(formulaire);

    const SaveHandeler = (e) => {
        e.preventDefault();
        ModifyProfil()
        navigate('/');
    }

    const DeleteHandeler = () => DeleteProfil();

    const UpdateProfile = (texte, props) => {
        setFormulaire(current => {
            return {
                ...current,
                [props]: texte
            }
        });
    };

    return(
        <>
            <section className="preview">
                <div className="box">
                    <article>
                        <Input type="text" text={"Nom: "} label={"nom"} nameFn={UpdateProfile} value={formulaire?.nom}/>
                        <Input type="text" text={"Pseudonyme :"} label={"pseudonyme"} nameFn={UpdateProfile} value={formulaire?.pseudonyme}/>
                    </article>
                </div>
            </section>
        </>
    )

}
export default (ProfileDetail);