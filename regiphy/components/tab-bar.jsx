import { NavLink } from "react-router-dom";
import Stack from "react-bootstrap/Stack"
const Tab = () => {
    return (
        <header>
            <nav>
                <Stack direction="horizontal" gap={3}>
                    <NavLink to="random">Random</NavLink>
                    <NavLink to="search">Search</NavLink>
                    <NavLink to="trending">Trending</NavLink>
                </Stack>
            </nav>
        </header>
    );
}

export default Tab;