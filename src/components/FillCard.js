import React, { Component } from 'react';
import ProfilePic from './ProfilePic';

class FillCard extends Component {
   render() {
        return (
            <React.Fragment>

                <fieldset>
                    <div className="collapsible">
                        <div className="collapsible__clickable collapsible__fill" onClick={this.props.handleCollapsiblesFill}>
                            <div className="collapsible__clickable-title">
                                <i className="far fa-keyboard title-icon"></i>
                                <h2 className="title__collapsible">Rellena</h2>
                            </div>
                            <div className="collapsible__clickable-icons">
                                <i className="fas fa-angle-down icon-down"></i>
                            </div>
                        </div>
                        <div className={`collapsible__content-fill ${this.props.collapsibleFill}`}>
                            <div className="collapsible__content-form">
                                <label htmlFor="name" className="form-label form-label--name">Nombre completo</label>
                                <input type="text" name="name" id="name" placeholder="Ej: Sally Jill" className="form-input" onKeyUp={this.props.handleName} />
                            </div>
                            <div className="collapsible__content-form">
                                <label htmlFor="puesto" className="form-label form-label--puesto">Puesto</label>
                                <input type="text" name="puesto" id="puesto" placeholder="Ej: Front-end unicorn" className="form-input" onKeyUp={this.props.handleJob} />
                            </div>
                            <div className="collapsible__content-form">
                                <div className="container__btn-img">
                                    <label htmlFor="imagen" className="form-label">Imagen de Perfil</label>
                                    <div className="collapsible__upload-file">
                                        <input type="file" id="img-selector" name="img-selector" className="action_hiddenField" />
                                        <ProfilePic cardInfo={this.props.cardInfo} handleUrl={this.props.handleUrl} previewRef={this.props.previewRef}/>
                                    </div>
                                </div>
                            </div>
                            <div className="collapsible__content-form">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" name="email" id="email" placeholder="Ej: sally-hill@gmail.com" className="form-input"
                                    data-common="mailto:" data-ico="far fa-envelope" data-dest=".list__item--mail" onKeyUp={this.props.handleEmail} />
                            </div>
                            <div className="collapsible__content-form">
                                <label htmlFor="phone" className="form-label">Teléfono</label>
                                <input type="tel" id="phone" name="phone" placeholder="Ej: 555-55-55-55" className="form-input"
                                    data-common="tel:" data-ico="fas fa-mobile-alt" data-dest=".list__item--tel" onKeyUp={this.props.handlePhone} />
                            </div>
                            <div className="collapsible__content-form">
                                <label htmlFor="linkedin" className="form-label">Linkedin</label>
                                <input type="" name="linkedin" id="linkedin" placeholder="Ej: linkedin.com/in/sally.hill" className="form-input"
                                    data-common="https://es.linkedin.com/" data-ico="fab fa-linkedin-in" data-dest=".list__item--linkedin" onKeyUp={this.props.handleLinkedin} />
                            </div>
                            <div className="collapsible__content-form">
                                <label htmlFor="github" className="form-label">Github</label>
                                <input type="" name="github" id="github" placeholder="Ej: @sally-hill" className="form-input"
                                    data-common="https://github.com/" data-ico="fab fa-github-alt" data-dest=".list__item--github" onKeyUp={this.props.handleGithub} />
                            </div>
                            <div className="container__skill--title">
                                <p className="skills">Habilidades (máximo 3)</p>
                            </div>
                            <div className="container__skills">
                                <div className="collapsible__content-form">
                                    <ul className="container__skills-list">
                                    {this.props.skillArray.map((item, index)=>{
                                        return(
                                            <li key={index}><label htmlFor={item} className="input-skills"><input className="maxCheck" type="checkbox" id={index} value={item} name="skills" onClick={this.props.handleSkills}></input>{item}</label></li>
                                        );
                                    })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </React.Fragment>

        );
    }
}
export default FillCard;