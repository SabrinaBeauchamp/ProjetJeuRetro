import { Outlet } from "react-router-dom";
import { ProfileProvider } from "../Context/Profile";
import {Connection, Head, MenuPrincipal, LayoutNormal} from "../Data/Pages";

const LayoutProfile = () => {

    return (
        <>
        <ProfileProvider>
            <Head/>
            <LayoutNormal/>
        </ProfileProvider>
            
        </>
    );
};
export default (LayoutProfile);