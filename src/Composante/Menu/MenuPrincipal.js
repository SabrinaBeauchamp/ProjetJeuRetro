import { Link } from "react-router-dom";


const MenuPrincipal = () => {
    return(
        <>
            <div className="footer">
                <nav>
                    <ul>
                        <li><Link to="/jeux/all">Bible</Link></li>
                        <li><Link to="/profile">Compte</Link></li>
                        <li><Link to="/corps">Corps</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default(MenuPrincipal);