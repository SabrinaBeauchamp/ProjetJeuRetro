import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { profileContext } from "../../Context/Profile";
import { options } from "../../Data/Array";


const Listes = () => {
   

    return(
        <>
            <h1>Listes</h1>
            {
                // !isValid ?
                // option?.map(({nom, titre, selected}) => (
                //     <button key={nom} onClick={(e)=>CLickHandeler(nom)} disabled={selected}>{titre}</button>
                // ))
                // :
                <>
                    
                </>
            }
        </>
    )
}
export default(Listes);