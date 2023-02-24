import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";


const Contact = () => {
    const [contacts, setContacts] = useState({});

    useEffect(() =>{

    },[])

    const ClickHandeler = () => {
    }
    return(
        <>
            <h1>Contact</h1>
            {
                contacts?.length ?
                <></>
                :<button><Link to="/profile/contact/ajouter">Ajouter un contact</Link></button>
            }
        </>

    )
}
export default(Contact);