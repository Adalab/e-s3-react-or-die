import React, {Component} from 'react';
import './stylesheets/index.scss';
import logoAdalab from './images/logo-adalab.png';
import logoCards from './images/logo.svg';


class CardIndex extends Component {
    render() { 
        const editHeader = (
        <header>
            <a href="index-edit.html">
                <img src={logoCards} alt="hero" className="img-hero"/>
            </a>
        </header>
        );
        const editCard = (
            <section className="section__card">
                <div className="section__card-button">
                    <button className="reset"><i className="far fa-trash-alt icon-reset"></i>Reset</button>
                </div>
                <div className="section__card-content">
                    <div className="description">
                        <div className="rectangle"></div>
                        <h1 className="h1-description">Nombre Apellido</h1>
                        <p className="text-description">Front-End developer</p>
                    </div>
                    <div className="profile-pic"></div>
                    <div className="social-media">
                        <ul className="social-media__list">
                            <li className=" contact-list__tlf list__item--tel"></li>
                            <li className=" contact-list__mail list__item--mail"></li>
                            <li className="contact-list__linkedin list__item--linkedin"></li>
                            <li className=" contact-list__github list__item--github"></li>
                        </ul>
                    </div>
                    <div className="skills">
                        <ul className="skills__list"></ul>
                    </div>
                </div>
            </section>
        );

        const cardStyle = (
        <section className="section-form">
            <div className="section-form__container">
                <form action="">
                    <div className="section-form__fieldset-container section-form__fieldset-container--design">
                        <fieldset className="section-form__subsection">
                            <div className="collapsible">
                                <div className="collapsible__clickable collapsible__design">
                                    <div className="collapsible__clickable-title">
                                        <i className="far fa-object-ungroup title-icon"></i>
                                        <h2 className="title__collapsible">Diseña</h2>
                                    </div>
                                    <div className="collapsible__clickable-icons">
                                        <i className="fas fa-angle-down icon-down"></i>
                                    </div>
                                </div>
                                <div className="collapsible__content-design hidden">
                                    <div className="colors">
                                        <h3 className="subtitle__collapsible">Colores</h3>
                                        <ul className="themes">
                                            <li>
                                                <label for="colors" className="theme default">
                                                    <input type="radio" id="cold" name="colors" className="radio" value="1" checked/>
                                                    <div className="colors__list" style={{backgroundColor:"#114e4e"}}></div>
                                                    <div className="colors__list" style={{backgroundColor:"#438792"}}></div>
                                                    <div className="colors__list" style={{backgroundColor: "#a2deaf"}}></div>
                                                </label>
                                            </li>
                                            <li>
                                                <label for="colors" className="theme orange">
                                                    <input type="radio" id="warm" name="colors" className="radio" value="2"/>
                                                    <div className="colors__list" style={{backgroundColor: "#420101"}}></div>
                                                    <div className="colors__list" style={{backgroundColor: "#bd1010"}}></div>
                                                    <div className="colors__list" style={{backgroundColor: "#e95626"}}></div>
                                                </label>
                                            </li>
                                            <li>
                                                <label for="colors" className="theme blue">
                                                    <input type="radio" id="formal" name="colors" className="radio" value="3"/>
                                                    <div className="colors__list" style={{backgroundColor: "#3e5b65"}}></div>
                                                    <div className="colors__list" style={{backgroundColor: "#dfe5eb"}}></div>
                                                    <div className="colors__list" style={{backgroundColor: "#a0c0cf"}}></div>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="fonts">
                                        <h3 className="subtitle__collapsible">Fuentes</h3>
                                        <ul className="fonts___list">
                                            <li>
                                                <label for="ubuntu" className="typography ubuntu">
                                                    <input type="radio" id="ubuntu" value="ubuntu" name="fonts" className="radio" value="1"/>
                                                    <p className="ubuntu">Ubuntu</p>
                                                </label>
                                            </li>
                                            <li>
                                                <label for="comic" className="typography comic">
                                                    <input type="radio" id="comic" value="comic" name="fonts" className="radio" value="2" checked/>
                                                    <p className="comic">Comic Sans</p>
                                                </label>
                                            </li>
                                            <li>
                                                <label for="monserrat" className="typography monserrat">
                                                    <input type="radio" id="monserrat" value="monserrat" name="fonts" className="radio" value="3"/>
                                                    <p className="monserrat">Monserrat</p>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </fieldset>        
                        <fieldset>
                            <div className="collapsible">
                                <div className="collapsible__clickable collapsible__fill">
                                    <div className="collapsible__clickable-title">
                                        <i className="far fa-keyboard title-icon"></i>
                                        <h2 className="title__collapsible">Rellena</h2>
                                    </div>
                                    <div className="collapsible__clickable-icons">
                                        <i className="fas fa-angle-down icon-down"></i>
                                    </div>
                                </div>
                                <div className="collapsible__content-fill hidden">
                                    <div className="collapsible__content-form">
                                        <label for="name" className="form-label form-label--name">Nombre completo</label>
                                        <input type="text" name="name" id="name" placeholder="Ej: Sally Jill" className="form-input"/>
                                    </div>
                                    <div className="collapsible__content-form">
                                        <label for="puesto" className="form-label form-label--puesto">Puesto</label>
                                        <input type="text" name="puesto" id="puesto" placeholder="Ej: Front-end unicorn" className="form-input"/>
                                    </div>
                                    <div className="collapsible__content-form">
                                        <div className="container__btn-img">
                                            <label for="imagen" className="form-label">Imagen de Perfil</label>
                                            <div className="collapsible__upload-file">
                                                <input type="file" id="img-selector" name="img-selector" className="action_hiddenField"/>
                                                <button className="btn--img" type="button">Añadir Imagen</button>
                                                <div className="uploadFile"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapsible__content-form">
                                        <label for="email" className="form-label">Email</label>
                                        <input type="email" name="email" id="email" placeholder="Ej: sally-hill@gmail.com" className="form-input"
                                            data-common="mailto:" data-ico="far fa-envelope social-media__icon" data-dest=".list__item--mail"/>
                                    </div>
                                    <div className="collapsible__content-form">
                                        <label for="phone" className="form-label">Teléfono</label>
                                        <input type="tel" id="phone" name="phone" placeholder="Ej: 555-55-55-55" className="form-input"
                                            data-common="tel:" data-ico="fas fa-mobile-alt social-media__icon" data-dest=".list__item--tel"/>
                                    </div>
                                    <div className="collapsible__content-form">
                                        <label for="linkedin" className="form-label">Linkedin</label>
                                        <input type="" name="linkedin" id="linkedin" placeholder="Ej: linkedin.com/in/sally.hill" className="form-input"
                                            data-common="https://es.linkedin.com/" data-ico="fab fa-linkedin-in social-media__icon" data-dest=".list__item--linkedin"/>
                                    </div>
                                    <div className="collapsible__content-form">
                                        <label for="github" className="form-label">Github</label>
                                        <input type="" name="github" id="github" placeholder="Ej: @sally-hill" className="form-input"
                                            data-common="https://github.com/" data-ico="fab fa-github-alt social-media__icon" data-dest=".list__item--github"/>
                                    </div>
                                    <div className="container__skill--title">
                                        <p className="skills">Habilidades (máximo 3)</p>
                                    </div>
                                    <div className="container__skills">
                                        <div className="collapsible__content-form"></div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                        <div className="collapsible collapsible-share">
                        <div className="collapsible__clickable collapsible__share">
                            <div className="collapsible__clickable-title">
                            <i className="fas fa-share-alt title-icon"></i>
                            <h2 className="title__collapsible title__collapsible-share">Comparte</h2>
                            </div>
                            <div className="collapsible__clickable-icons">
                            <i className="fas fa-angle-down icon-down"></i>
                            </div>
                        </div>
                        <div className="collapsible__content-share hidden">
                            <button type="button" className="collapsible__content-button"><i className="far fa-address-card"></i>Crear tarjeta</button>
                            <div className="getURL"></div>
                        </div>
                        </div>
                    </fieldset>
                    </div>
                </form>
            </div>
        </section>
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
                    {editHeader} {editCard} {cardStyle} {pageFooter}                 
                </div>
            </div>
        );
        return all;
    }
}

export default CardIndex;
