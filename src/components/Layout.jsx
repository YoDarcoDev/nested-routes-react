import { Outlet } from "react-router";
import Menu from "./Menu";

export default function Layout() {
    return (
        <>
            <Menu />
            <Outlet />
        </>
    )
}