import { Link } from "react-router-dom";
import "./Menu.scss"

const Menu = () => {
    return(
        <div className="menu">
            <span>
                <input type="search" placeholder="Search ..." />
                <button type="submit">Recherche</button>
            </span>
            <span className="logoCompte">
                <Link to="/profile">
                    <img src="" alt="compte" />
                </Link>
            </span>
        </div>
    )
}
export default (Menu);