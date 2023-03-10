import { useContext, useState} from "react";
import { profileContext } from "../../../Context/Profile";
import { Search } from "../../../Data/Pages";

import './Contact.scss';
const Contact = () => {
    const { profile } = useContext(profileContext);
    const [seaching, setSearching] = useState(true);
    const IsSearching = () => setSearching(true);
    return(
        <section className="contact box">
            <Search indexName={"users"} IsSearching={IsSearching} seaching={seaching}/>
            
        </section>

    )
}
export default(Contact);