import React from 'react';
import './navbar.css'

function navbar() {
    return (
        <div className='Navbar'>
            <p>Asquero</p>
            <div>
            <input  className="Input" type="text" placeholder="Search for programming concepts that you want to learn"></input>
            <button className="Button">Search</button>
            </div>
        </div>
    )
}

export default navbar
