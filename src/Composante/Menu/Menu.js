import { Link } from "react-router-dom";
import "./Menu.scss"

const Menu = () => {
    return(
        <div className="menu  ">
            <span>
                <input type="search" placeholder="Search ..." />
                <button type="submit" className="search"></button>
            </span>
            <span className="logoCompte">
                
            </span>
        </div>
    )
}
export default (Menu);