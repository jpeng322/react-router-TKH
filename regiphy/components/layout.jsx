import Tab from "./tab-bar"
import Navbar from "./navbar"
import { Outlet } from "react-router-dom"
import Stack from "react-bootstrap/Stack"
function Layout() {
    return (
        <div>
            <Tab />
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout