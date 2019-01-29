import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoCards from '../images/logo.svg';

class Header extends Component {
  render() {
    const editHeader = (
      <header>
        <Link to="/">
          <img src={logoCards} alt="hero" className="img-hero" />
        </Link>
      </header>
    );
    return editHeader;
  }
}

export default Header;