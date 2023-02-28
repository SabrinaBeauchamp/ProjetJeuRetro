import "./Menu.scss"

const Menu = () => {
    return(
        <div className="menu">
            <span>
                <input type="search" placeholder="Search ..." />
                <button type="submit">Recherche</button>
            </span>
            <span className="logoCompte">
                <img src="" alt="compte" />
            </span>
        </div>
    )
}
export default (Menu);