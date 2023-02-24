import {Search} from "../../../Data/Data";
import { useContext, useEffect, useState } from "react";
import { profileContext } from "../../../Context/Profile";
import { collection, onSnapshot, where, query, getDocs } from 'firebase/firestore';
import { db } from '../../../Config/firebase'


const AddContact = () => {
    const [users, setUsers] = useState([]);
    const {profile} = useContext(profileContext);

    useEffect(() => {
        const getDocument = () => {
            const refs = query(collection(db, "Users"), where("nom","!=", profile?.nom));
            const maCollection =  onSnapshot((refs), (snapshot) => {
                const monDocuments = snapshot.docs.map(doc => setUsers(currentTache => [{...doc.data()},...currentTache]))
            })
        };
        getDocument() 
    },[])
    console.log(users[0]);
    return(
        <>
        <h1>hellojubsa</h1>
        <Search utilisateurs={users}/>
        </>
    )
}
export default(AddContact);