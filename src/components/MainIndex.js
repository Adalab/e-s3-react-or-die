import React, {
    Component
} from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/index.scss';
import logoAdalab from '../images/logo-adalab.png';
import logoCards from '../images/logo.svg';

class MainIndex extends Component {
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
                        <li className="main__item"><i className="icon far fa-object-ungroup"></i> Diseña</li>
                        <li className="main__item"><i className="icon far fa-keyboard"></i>  Rellena</li>
                        <li className="main__item"><i className="icon fas fa-share-alt"></i> Comparte</li>
                    </ul>
                
                        <div className="btn__comenzar">
                            <Link className="link-router" to="/CardIndex">Comenzar</Link> 
                        </div>
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

export default MainIndex;
