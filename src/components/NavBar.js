import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="https://thamma513.github.io/memory-pro/">Home</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className={window.location.pathname === "/memory" ? "nav-link active" : "nav-link"}>
                <Link className="nav-link" to="/memory">Memory Game</Link>
            </li>
            <li className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                <Link className="nav-link" to="/contact">Contact Me</Link>
            </li>

        </ul>
    </div>
</nav>
);



export default NavBar;