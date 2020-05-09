import React from 'react';
import './header.style.css';

const Header = () =>{
    return(
        <header className="header">
            <nav>
                <div className="row">
                    <img src="/images/logo-white.png" alt="Omnifood Logo" className="logo" />
                    <ul className="main-nav">
                        <li><a href="/">Food delivery</a></li>
                        <li><a href="/">How it works</a></li>
                        <li><a href="/">Our cities</a></li>
                        <li><a href="/">Sign up</a></li>
                    </ul>
                </div>
            </nav>
            <div className="hero-text-box">
                <h1>Goodbye junk food.<br />Hello super healthy meals.</h1>
                <a className="btn btn-full" href="/">I’m hungry</a>
                <a className="btn btn-ghost" href="/">Show me more</a>
            </div>
        </header>
    )
}

export default Header;