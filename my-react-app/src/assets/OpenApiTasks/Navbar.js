import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/task">Task</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
