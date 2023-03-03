import { Outlet, Link } from 'react-router-dom';
import { authContext } from "../Context/Auth";
import { useContext, useEffect, useState, } from "react";
import { profileContext, ProfileProvider } from '../Context/Profile';
import { collection, onSnapshot, where, query, getDocs } from 'firebase/firestore';
import { db } from '../Config/firebase';

import { Head , MenuPrincipal} from "../Data/Data";

import "./Layout.scss";


const LayoutNormal =() => {
    

    return(
        <>
            <Head/>
            {/* <div className='blank'></div> */}
            <main className=''>
                <Outlet/>
            </main>
        </>
    )
}

export default (LayoutNormal);