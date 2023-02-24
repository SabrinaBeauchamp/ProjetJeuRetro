import { Outlet } from "react-router-dom";
import { ProfileProvider } from "../Context/Profile";
import {Connection, Head, MenuPrincipal, LayoutNormal} from "../Data/Data";

const LayoutProfile = () => {

    return (
        <>
        <ProfileProvider>
            <LayoutNormal/>
        </ProfileProvider>
            
        </>
    );
};
export default (LayoutProfile);