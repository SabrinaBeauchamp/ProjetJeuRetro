import { Link } from "react-router-dom";
import "./Fiches.scss";

const Fiches = ({bible, clickFn}) => {
    return (
        <>
            {
                bible?.map(({nom, id}) => (
                    <Link key={id} to = {`/jeux/${nom}`} onClick={()=>clickFn(id)}>
                        <article className="boxJeu" >
                            <div className="img">
                                <img src="" alt="jeu" />
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