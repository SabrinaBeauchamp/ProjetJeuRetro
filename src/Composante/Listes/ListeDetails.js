import { Link } from "react-router-dom";

const ListeDetails = ({ListeHandeler, liste, option}) => {
    const ShowListe = (
        <section className="liste">
            {
                liste?.length > 0 ?
                    liste?.map((i) => (
                        <p key={i} className='item-list'>
                            <Link to={'/jeux/'+i.nom}>
                            {i.nom}
                            </Link>
                        </p>
                    ))
                : <p>Vide</p>

            }
        </section>
    )
    return(
        <>
        <div className="posseder">
                <p>Je possèdes</p>
                {
                    option === 'aime'?
                    ShowListe
                    :null
                }
                <span onClick={() => ListeHandeler('aime')} className="dropdown">.</span>
            </div>
            <div className="aime ">
                <p>J'aime</p>
                {
                    option === 'maybe'?
                    ShowListe
                    :null
                }
                <span onClick={() => ListeHandeler('maybe')} className="dropdown">.</span>
            </div>
            <div className="nope ">
                <p>Pas intéresser</p>
                {
                    option === 'nope'?
                    ShowListe
                    :null
                }
                <span onClick={() => ListeHandeler("nope")} className="dropdown">.</span>
            </div></>
    )
}
export default(ListeDetails);