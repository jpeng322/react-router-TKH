import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav"
import Stack from "react-bootstrap/Stack"
const Navbar = () => {
    return (
        <Stack className="p-3" direction="horizontal" gap={3}>
            <div className="p-2 bg-light border">
                <NavLink to="random">Random</NavLink>
            </div>
            <div className="p-2  bg-light border">
                <NavLink to="search">Search</NavLink>
            </div>
            <div className="p-2  bg-light border">
                <NavLink to="trending">Trending</NavLink>
            </div>
        </Stack>

    );
}

export default Navbar;