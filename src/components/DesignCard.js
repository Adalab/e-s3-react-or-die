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
                                        <label htmlFor="colors" className="theme default">
                                            <input onClick={this.props.handleColor} type="radio" id="cold" name="colors" className="radio" value="1" defaultChecked/>
                                            <div className="colors__list" style={{ backgroundColor: "#114e4e" }}></div>
                                            <div className="colors__list" style={{ backgroundColor: "#438792" }}></div>
                                            <div className="colors__list" style={{ backgroundColor: "#a2deaf" }}></div>
                                        </label>
                                    </li>
                                    <li>
                                        <label htmlFor="colors" className="theme orange">
                                            <input onClick={this.props.handleColor} type="radio" id="orange-palette" name="colors" className="radio" value="2" />
                                            <div className="colors__list" style={{ backgroundColor: "#420101" }}></div>
                                            <div className="colors__list" style={{ backgroundColor: "#bd1010" }}></div>
                                            <div className="colors__list" style={{ backgroundColor: "#e95626" }}></div>
                                        </label>
                                    </li>
                                    <li>
                                        <label htmlFor="colors" className="theme blue">
                                            <input onClick={this.props.handleColor} type="radio" id="blue-palette" name="colors" className="radio" value="3" />
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
                                        <label htmlFor="fonts" className="typography ubuntu">
                                            <input onClick={this.props.handleTypo} type="radio" id="font-ubuntu" name="fonts" className="radio" value="1" />
                                            <p className="ubuntu">Ubuntu</p>
                                        </label>
                                    </li>
                                    <li>
                                        <label htmlFor="fonts" className="typography comic">
                                            <input onClick={this.props.handleTypo} type="radio" id="font-comic" name="fonts" className="radio" value="2" defaultChecked/>
                                            <p className="comic">Comic Sans</p>
                                        </label>
                                    </li>
                                    <li>
                                        <label htmlFor="fonts" className="typography monserrat">
                                            <input onClick={this.props.handleTypo} type="radio" id="font-monserrat" name="fonts" className="radio" value="3" />
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