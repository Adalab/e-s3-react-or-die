import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoCards from '../images/logo.svg';

class Header extends Component {
    render() {
        const editHeader = (
            <header>

                <Link to="/">
                    <a href="index-edit.html">
                        <img src={logoCards} alt="hero" className="img-hero" />
                    </a>
                </Link>
            </header>
        );
        return editHeader;
    }
}
export default Header;