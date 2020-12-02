import React from 'react';
import './main.css';

function main() {
    return (
        <div className='Main'>
            <div className="Section1">
            <h1>KNOW MORE, GROW MORE</h1>
            <p>Find the best programming courses and tutorials</p>
            </div>
            
            <div className="Section2">
                <input  className="Input" type="text" placeholder="Search for programming concepts that you want to learn"></input>
                <button className="Button">Search</button>
            </div>
        </div>
    )
}

export default main
