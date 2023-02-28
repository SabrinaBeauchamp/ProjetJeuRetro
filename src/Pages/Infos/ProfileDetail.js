import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { profileContext } from "../../Context/Profile";

const ProfileDetail = () => {
    const { profile, ModifyProfil, DeleteProfil } = useContext(profileContext);
    const navigate = useNavigate();

    const SaveHandeler = (e) => {
        e.preventDefault();
        ModifyProfil()
        navigate('/');
    }

    const DeleteHandeler = () => DeleteProfil();

    return(
        <>
            <section className="preview">
                <div className="box">
                    <article>
                        <div className="img">
                            <img src="" alt="img-perso" />
                        </div>
                        <h4>{profile?.nom}</h4>
                        <p>{profile?.pseudonyme}</p>
                    </article>
                </div>
            </section>
            <section className="form">
                <form onSubmit={(e) =>SaveHandeler()}>

                </form>

            </section>
        </>
    )

}
export default (ProfileDetail);