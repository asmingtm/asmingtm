import { Outlet, /*useLocation*/ } from "react-router";
import { NavBar } from "@components";

export function AppLayout() {
    // const location = useLocation();

    return (
        <>
        <NavBar />
        {/* { location.pathname !== "/" && <NavBar /> } */}
        <Outlet />
        </>
    );
}