import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Search } from "../../../Data/Data";

import './Contact.scss';
const Contact = () => {
    const [contacts, setContacts] = useState({});

    useEffect(() =>{

    },[])

    const ClickHandeler = () => {
    }
    return(
        <section className="contact">
            <Link to='/profile' className="retour"><img src='/img/imgs/back.png'/></Link>
            <h1>Contacts</h1>
            <Search indexName={"users"}/>
        </section>

    )
}
export default(Contact);