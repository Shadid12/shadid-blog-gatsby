import React from 'react'
import { Link } from 'gatsby'
import './nav.scss'


const Nav = ({ children }) => {
    return (
        <nav className="main-nav">
            <button className="btn-img"></button>
            <div className="links">
                <Link to="/" className="link">Home</Link>
                <Link to="/about/" className="link">About</Link>
            </div>
        </nav>
    )
}

export default Nav;