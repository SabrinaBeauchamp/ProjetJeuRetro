import { Outlet, Link } from 'react-router-dom';
import { authContext } from "../Context/Auth";
import { useContext, useEffect, useState, } from "react";
import { profileContext } from '../Context/Profile';
import { collection, onSnapshot, where, query, getDocs } from 'firebase/firestore';
import { db } from '../Config/firebase';
import GoogleButton from 'react-google-button'

import { Nav, Accueil, Head }from "../Data/Data";


const Connection =() => {
    const {user, logout, login} = useContext(authContext);
    const {profile} = useContext(profileContext);
    const [projets, setProjets] = useState([]);
    

    const googleSingout = async() => {
        logout();
    }
    const googleHandler = async() => {
        
        login();
    }

    return(
        <>
            <Outlet/>
            { 
                !user?
                <GoogleButton label='Connectez-vous' onClick={googleHandler}/>
                    :null
            }
        </>
    )
}

export default (Connection);