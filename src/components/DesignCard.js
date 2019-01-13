import React, { Component } from 'react';

class DesignCard extends Component {
    render() {

        return (
            <React.Fragment>


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
                        <div className="collapsible__content-design">
                            <div className="colors">
                                <h3 className="subtitle__collapsible">Colores</h3>
                                <ul className="themes">
                                    <li>
                                        <label for="colors" className="theme default">
                                            <input type="radio" id="cold" name="colors" className="radio" value="1" checked />
                                            <div className="colors__list" style={{ backgroundColor: "#114e4e" }}></div>
                                            <div className="colors__list" style={{ backgroundColor: "#438792" }}></div>
                                            <div className="colors__list" style={{ backgroundColor: "#a2deaf" }}></div>
                                        </label>
                                    </li>
                                    <li>
                                        <label for="colors" className="theme orange">
                                            <input type="radio" id="warm" name="colors" className="radio" value="2" />
                                            <div className="colors__list" style={{ backgroundColor: "#420101" }}></div>
                                            <div className="colors__list" style={{ backgroundColor: "#bd1010" }}></div>
                                            <div className="colors__list" style={{ backgroundColor: "#e95626" }}></div>
                                        </label>
                                    </li>
                                    <li>
                                        <label for="colors" className="theme blue">
                                            <input type="radio" id="formal" name="colors" className="radio" value="3" />
                                            <div className="colors__list" style={{ backgroundColor: "#3e5b65" }}></div>
                                            <div className="colors__list" style={{ backgroundColor: "#dfe5eb" }}></div>
                                            <div className="colors__list" style={{ backgroundColor: "#a0c0cf" }}></div>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="fonts">
                                <h3 className="subtitle__collapsible">Fuentes</h3>
                                <ul className="fonts___list">
                                    <li>
                                        <label for="ubuntu" className="typography ubuntu">
                                            <input type="radio" id="ubuntu" value="ubuntu" name="fonts" className="radio" value="1" />
                                            <p className="ubuntu">Ubuntu</p>
                                        </label>
                                    </li>
                                    <li>
                                        <label for="comic" className="typography comic">
                                            <input type="radio" id="comic" value="comic" name="fonts" className="radio" value="2" checked />
                                            <p className="comic">Comic Sans</p>
                                        </label>
                                    </li>
                                    <li>
                                        <label for="monserrat" className="typography monserrat">
                                            <input type="radio" id="monserrat" value="monserrat" name="fonts" className="radio" value="3" />
                                            <p className="monserrat">Monserrat</p>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </fieldset>

            </React.Fragment>
        );
    }
}
export default DesignCard;