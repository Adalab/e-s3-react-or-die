import React, { Component } from 'react';

class FillCard extends Component {
    render() {

        return (
            <React.Fragment>

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
                        <div className="collapsible__content-fill ">
                            <div className="collapsible__content-form">
                                <label for="name" className="form-label form-label--name">Nombre completo</label>
                                <input type="text" name="name" id="name" placeholder="Ej: Sally Jill" className="form-input" />
                            </div>
                            <div className="collapsible__content-form">
                                <label for="puesto" className="form-label form-label--puesto">Puesto</label>
                                <input type="text" name="puesto" id="puesto" placeholder="Ej: Front-end unicorn" className="form-input" />
                            </div>
                            <div className="collapsible__content-form">
                                <div className="container__btn-img">
                                    <label for="imagen" className="form-label">Imagen de Perfil</label>
                                    <div className="collapsible__upload-file">
                                        <input type="file" id="img-selector" name="img-selector" className="action_hiddenField" />
                                        <button className="btn--img" type="button">Añadir Imagen</button>
                                        <div className="uploadFile"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="collapsible__content-form">
                                <label for="email" className="form-label">Email</label>
                                <input type="email" name="email" id="email" placeholder="Ej: sally-hill@gmail.com" className="form-input"
                                    data-common="mailto:" data-ico="far fa-envelope social-media__icon" data-dest=".list__item--mail" />
                            </div>
                            <div className="collapsible__content-form">
                                <label for="phone" className="form-label">Teléfono</label>
                                <input type="tel" id="phone" name="phone" placeholder="Ej: 555-55-55-55" className="form-input"
                                    data-common="tel:" data-ico="fas fa-mobile-alt social-media__icon" data-dest=".list__item--tel" />
                            </div>
                            <div className="collapsible__content-form">
                                <label for="linkedin" className="form-label">Linkedin</label>
                                <input type="" name="linkedin" id="linkedin" placeholder="Ej: linkedin.com/in/sally.hill" className="form-input"
                                    data-common="https://es.linkedin.com/" data-ico="fab fa-linkedin-in social-media__icon" data-dest=".list__item--linkedin" />
                            </div>
                            <div className="collapsible__content-form">
                                <label for="github" className="form-label">Github</label>
                                <input type="" name="github" id="github" placeholder="Ej: @sally-hill" className="form-input"
                                    data-common="https://github.com/" data-ico="fab fa-github-alt social-media__icon" data-dest=".list__item--github" />
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
            </React.Fragment>

        );
    }
}
export default FillCard;