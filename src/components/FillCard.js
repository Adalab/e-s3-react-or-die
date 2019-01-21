import React, { Component } from 'react';
import {fetchSkills} from '../services/SkillsApi';
import ProfilePic from './ProfilePic';

const currentSkills = [];
class FillCard extends Component {
    constructor(props){
        super(props);

         this.state = {
            skillArray : []
        }
        this.getSkills = this.getSkills.bind(this);
        this.addSkillorNot = this.addSkillorNot.bind(this);
    }

    componentDidMount() {
        this.getSkills();
    }

    getSkills () {
        fetchSkills()
         .then(data=>{
            this.setState({
                skillArray : data.skills
            })
        })
    }


    // addSkills(e){
    //     const check = e.currentTarget;
    //     const currentSkill = this.state.skillArray.slice(0);
    //     const newSkill = e.currentTarget.value;
    //     const isChecked = check.checked;

    //     if (isChecked){
    //         //Está marcado

    //         if (currentSkill.length < 3){
    //             currentSkill.push(newSkill)
    //             const newCard = {...this.props.cardInfo.skill, skill:currentSkill}
    //             const {card} = this.state;
    //             this.setState({
    //                 card: {...card, skill : newCard}
    //             })
    //         } else {
    //             check.checked = false;
    //         }
    //     }
    // }
    addSkillorNot(e){

        /** Esto no sé para que es
        const card = this.props.cardInfo;
        const currentSkills = card.skills.slice(0);
        */
        
        const check = e.currentTarget;
        const newSkill = e.currentTarget.value;
        const isChecked = check.checked;
        // currentSkills.push('holi');
        // currentSkills.push('me llamo');
        // currentSkills.push('me llamo');
        //currentSkills.push('me llamo');
        
        

        if (currentSkills.length < 3 && isChecked) {
    
          // Está marcado y hay menos de 3 skills
          currentSkills.push(newSkill);
          console.log("dentro del if");
          console.log(currentSkills.length);
          
        } else {
            console.log('en el else');
          // No está marcado o hay 3 skills o más
          check.checked = false;
          // si existe tengo que borrarlo
          const index = currentSkills.indexOf(newSkill);
          if (index > -1) {
            currentSkills.splice(index, 1);
          }
        }

        // if (currentSkills.length > 2) {

        //     console.log(currentSkills);
        //     // No está marcado o hay 3 skills o más
        //     check.checked = false;
        //     // si existe tengo que borrarlo
        //     const index = currentSkills.indexOf(newSkill);
        //     if (index > -1) {
        //       currentSkills.splice(index, 1);
        //     }
            
            
        //   } else {
        //       // Está marcado y hay menos de 3 skills
        //     currentSkills.push(newSkill);
             
        //     }
            console.log('despues del if',currentSkills);
            console.log(currentSkills.length);

        const newCard = {...this.props.cardInfo, skills: currentSkills};
        // this.saveCard(newCard);
        // this.setState({
        //   card: newCard
        // });
      }

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
                                <label htmlFor="name" className="form-label form-label--name">Nombre completo</label>
                                <input type="text" name="name" id="name" placeholder="Ej: Sally Jill" className="form-input"  onKeyUp={this.props.handleName}/>
                            </div>
                            <div className="collapsible__content-form">
                                <label htmlFor="puesto" className="form-label form-label--puesto">Puesto</label>
                                <input type="text" name="puesto" id="puesto" placeholder="Ej: Front-end unicorn" className="form-input" onKeyUp={this.props.handleJob}/>
                            </div>
                            <div className="collapsible__content-form">
                                <div className="container__btn-img">
                                    <label htmlFor="imagen" className="form-label">Imagen de Perfil</label>
                                    <div className="collapsible__upload-file">
                                        <input type="file" id="img-selector" name="img-selector" className="action_hiddenField" />
                                        <ProfilePic  cardInfo={this.props.cardInfo} handleUrl = {this.props.handleUrl}/>
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
                                    data-common="tel:" data-ico="fas fa-mobile-alt" data-dest=".list__item--tel" onKeyUp={this.props.handlePhone}/>
                            </div>
                            <div className="collapsible__content-form">
                                <label htmlFor="linkedin" className="form-label">Linkedin</label>
                                <input type="" name="linkedin" id="linkedin" placeholder="Ej: linkedin.com/in/sally.hill" className="form-input"
                                    data-common="https://es.linkedin.com/" data-ico="fab fa-linkedin-in" data-dest=".list__item--linkedin" onKeyUp={this.props.handleLinkedin} />
                            </div>
                            <div className="collapsible__content-form">
                                <label htmlFor="github" className="form-label">Github</label>
                                <input type="" name="github" id="github" placeholder="Ej: @sally-hill" className="form-input"
                                    data-common="https://github.com/" data-ico="fab fa-github-alt" data-dest=".list__item--github" onKeyUp={this.props.handleGithub}/>
                            </div>
                            <div className="container__skill--title">
                                <p className="skills">Habilidades (máximo 3)</p>
                            </div>
                            <div className="container__skills">
                                <div className="collapsible__content-form">
                                    <ul className="container__skills-list">
                                    {this.state.skillArray.map((item, index)=>{
                                        return(
                                            <li><label htmlFor={`skills--${index}`}  className="input-skills"><input className="maxCheck" id={`skills--${index}`} onClick={this.addSkillorNot}type="checkbox" value={item} name="skills"/>{item}</label></li>
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