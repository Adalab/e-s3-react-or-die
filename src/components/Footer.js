import React, {Component} from 'react';
import logoAdalab from '../images/logo-adalab.png';

class Footer extends Component {
    render() {
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
        return pageFooter;
    }
}
export default Footer;