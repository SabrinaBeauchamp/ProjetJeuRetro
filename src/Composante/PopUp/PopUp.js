
import "./Popup.scss";

const PopUp = ({nomJeu, nomliste, slogan}) => {

    
    return(
        <section className="mascotte">
            {
                nomliste != "" ?
                <div className="pop-up" >
                    <p>{nomJeu} est ajouté dans la liste {nomliste}</p>
                </div>
                :
                 slogan != '' ?
                    <div className="pop-up" >
                        <p>{slogan}</p>
                    </div>
                : null
                
            }
            <div className="img">
                <img src="/img/compte/moumou_site.png" alt="moumou"/>
            </div>
        </section>
    )
}
export default (PopUp);