import "../styles/Navbar.css";
import "../styles/colors.css";

import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* <a href="/" className="navbar-logo">
                    Durango Bakery #1
                </a> */}

                <ul className="navbar-menu">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                        >
                            home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                        >
                            about
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                        >
                            contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
