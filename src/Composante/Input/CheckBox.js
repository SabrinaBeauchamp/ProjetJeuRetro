
import "./CheckBox.scss";

const Checkbox = ({categorie, changeFn}) => {
    return(
        <div className="choix">
            <h3>Categories de jeux vidéo</h3>
            <div className="categories">
                {
                    categorie.map(({nom, selected},i)=> (
                        <div key={nom+i}>
                            <label>{nom}</label>
                            <input  type="checkbox" onChange={()=>changeFn(nom)} checked={selected} />
                        </div>
                    ))
                }
            </div>
        
        </div>

    )


}
export default (Checkbox);