import React, {Component} from 'react';
import logoCards from '../images/logo.svg';

class Header extends Component {
    render() {
        const editHeader = (
        <header>
            <a href="index-edit.html">
                <img src={logoCards} alt="hero" className="img-hero"/>
            </a>
        </header>
        );
        return editHeader;
    }
}
export default Header;