import React, {
    Component
} from 'react';
import './stylesheets/index.scss';
import logoAdalab from './images/logo-adalab.png';
import logoCards from './images/logo.svg';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faObjectUngroup} from '@fortawesome/free-solid-svg-icons';
import {faKeyboard, faShareAlt} from '@fortawesome/free-solid-svg-icons';
library.add(faShareAlt, faKeyboard, faObjectUngroup);


class Page extends Component {
    render() { 
        const pageHeader = (
        <header className="page__header">
            <div className="image__logo">
                <img src= {logoCards} alt="logo cards" className="logo" />
            </div>
        </header>
        );
        const pageMain = (
            <main className="page__main">
                <div className="main__container">
                    <h1 className="main__title">Crea tu tarjeta de visita</h1>
                    <p className="main__subtitle">Crea mejores contactos profesionales de forma fácil y cómoda</p>
                    <ul className="main__icons">
                        <li className="main__item diseña"> <FontAwesomeIcon icon="object-ungroup" className="icon object-ungroup" /> Diseña</li>
                        <li className="main__item rellena"><FontAwesomeIcon icon="keyboard" className="icon keyboard" /> Rellena</li>
                        <li className="main__item comparte"><FontAwesomeIcon icon="share-alt" className="icon share-alt" /> Comparte</li>
                    </ul>
                    <a className="link__other" href="">
                        <div className="btn__comenzar">Comenzar</div>
                    </a>
                </div>
            </main>
        );
        const pageFooter = (
            <footer className = "page__footer">
                <div className = "footer__container">
                     <p className = "footer__copy"> Awesome profile - cards @2019 </p> 
                    <a href = "https://adalab.es/" target = "_blank " rel="noopener noreferrer"> 
                    <img src = {logoAdalab} alt = "logo-adalab" className = "footer__logo" /> 
                    </a> 
                </div> 
            </footer>
        ); 
        const all = (
            <div className = "page" >
                <div className = "main" >
                {pageHeader} {pageMain} {pageFooter}
                </div>
            </div>
        );
        return all;
    }
}

export default Page;
