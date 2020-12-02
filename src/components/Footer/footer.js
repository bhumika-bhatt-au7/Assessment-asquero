import React from 'react';
import './footer.css';

const footer = () => {
    return (
        <div className='FooterContainer'>
            <p className="Para">Join Asquero Community</p>
            <div >
                <span className="fa-stack fa-2x IconSection">
                    <i className="fas fa-circle fa-stack-2x Icon" style={{fontSize:"50px", color:"#2F3030"}}></i>
                    <i className="fab fa-twitter fa-stack-1x fa-inverse" style={{color:"white", fontSize:"25px", marginTop:"-3px"}}></i>
                </span>
                <span className="fa-stack fa-2x IconSection">
                    <i className="fas fa-circle fa-stack-2x" style={{fontSize:"50px", color:"#2F3030"}}></i>
                    <i className="fab fa-linkedin-in fa-stack-1x fa-inverse" style={{color:"white", fontSize:"25px", marginTop:"-5px"}}></i>
                </span>
                <span className="fa-stack fa-2x IconSection">
                    <i className="fas fa-circle fa-stack-2x" style={{fontSize:"50px", color:"#2F3030"}}></i>
                    <i className="fab fa-instagram fa-stack-1x fa-inverse" style={{color:"white", fontSize:"25px", marginTop:"-5px"}}></i>
                </span>
                <span className="fa-stack fa-2x IconSection">
                    <i className="fas fa-circle fa-stack-2x" style={{fontSize:"50px", color:"#2F3030"}}></i>
                    <i className="fab fa-facebook-f fa-stack-1x fa-inverse" style={{color:"white", fontSize:"25px", marginTop:"-5px"}}></i>
                </span>
            </div>
            <p className="Copyright">Copyright <span>&#169;</span>Asquero 2020</p>
        </div>
    )
}

export default footer
