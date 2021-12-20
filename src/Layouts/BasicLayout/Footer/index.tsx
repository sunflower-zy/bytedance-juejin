import "./index.css";
import { NavLink } from "react-router-dom";
function Footer() {
    return (
        <footer className="juejin-layout-footer">
            <nav className="juejin-layout-footer-tab">
                <NavLink to="/hot">热门</NavLink>
                <NavLink to="/new">最新</NavLink>
                <NavLink to="/history">历史</NavLink>
            </nav>
        </footer>
    );
}

export default Footer;
