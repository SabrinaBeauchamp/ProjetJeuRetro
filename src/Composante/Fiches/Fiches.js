import { Link } from "react-router-dom";
import "./Fiches.scss";

const Fiches = ({bible, clickFn}) => {
    return (
        <>
            {
                bible?.map(({nom, id, url}) => (
                    <Link key={id} to = {`/jeux/${nom}`} onClick={()=>clickFn(nom)}>
                        <article className="boxJeu" >
                            <div className="img">
                                <img src={url != null ? url : "/img/Logos/logo.png"} alt="jeu" />
                            </div>
                            <div className="nom">
                                <h4>{nom}</h4>
                            </div>
                        
                        </article>
                    </Link>
                ))
            }
        </>
    )
}
export default (Fiches);