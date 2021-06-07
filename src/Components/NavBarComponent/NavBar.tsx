import React from 'react'
import dota2_logo from '../../images/dota2.png'


function NavBar() {
    return (
        <nav className="navbar">
            <div className="links">
                <a href="/">
                    <img src={dota2_logo} height="120" width="250" alt="logo"></img>
                </a>

                <h1>Dota Hero Info</h1>

            </div>
        </nav>

    )
}

export default NavBar
