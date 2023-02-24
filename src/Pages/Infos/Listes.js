import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { options } from "../../Data/Array";


const Listes = () => {
    const [liste, setListe] = useState({});
    const [isClick, setIsClik] = useState({})
    const [option, setOption] = useState(options)
    const [isValid, setIsValid] = useState(false);

    const validate = () => {
        const o = option?.filter(o => o.selected == true).map(o => o.selected);
        return o.length;
    }
    useEffect(() => {
        const isValid = validate();
        setIsValid(isValid);
        
    },[option])
    const CLickHandeler = (e) => {
        setOption(
            option?.map(o => (
                o.nom == e ? {...o, selected: !o.selected} : {...o, selected: false}
            ))
        )
    }
    const RetourHandeler = (e) => {
        setOption(option?.map(o => ({...o, selected:false})))
    }


    return(
        <>
            <h1>Listes</h1>
            {
                !isValid ?
                option?.map(({nom, titre, selected}) => (
                    <button key={nom} onClick={(e)=>CLickHandeler(nom)} disabled={selected}>{titre}</button>
                ))
                :
                <>
                    {
                        liste.length > 0 ?
                            liste?.map((i,l) => (
                                <div key={i} className="ficheCarrees">

                                </div>
                            ))
                        : <button><Link to="/jeux">Aller voir la bible</Link></button>
                    }
                    <button disabled={!isValid} onClick={(e)=>RetourHandeler()}><img src="" alt="retour"/></button>
                </>
            }
        </>
    )
}
export default(Listes);