import React, {Component} from 'react';
import ResetBtn from './ResetBtn';


class EditCard extends Component {
    isEmptyPhone () {

        if (this.props.cardInfo.phone !== '') { 
            return (
                <div>
                    <li className=" contact-list__tlf list__item--tel social-media__icon"><i className="fas fa-mobile-alt"></i></li>
                </div>
            
            )
            
        } 
        else {
            return (
            <div className="hidden__icon">
                <li className=" contact-list__tlf list__item--tel social-media__icon"></li>
            </div> 
            )
        
    }
    }
    isEmptyEmail () {

        if (this.props.cardInfo.email !== '') { 
            return (
                <div>
                    <li className=" contact-list__tlf list__item--tel social-media__icon"><i class="far fa-envelope"></i></li>
                </div>
            
            )
            
        } 
        else {
            return (
            <div className="hidden__icon">
                <li className=" contact-list__tlf list__item--tel social-media__icon"></li>
            </div> 
            )
        
    }
    }
    isEmptyGithub () {

        if (this.props.cardInfo.github !== '') { 
            return (
                <div>
                    <li className=" contact-list__tlf list__item--tel social-media__icon"><i class="fab fa-github-alt"></i></li>
                </div>
            
            )
            
        } 
        else {
            return (
            <div className="hidden__icon">
                <li className=" contact-list__tlf list__item--tel social-media__icon"></li>
            </div> 
            )
        
    }
    }
    isEmptyIn () {

        if (this.props.cardInfo.linkedin !== '') { 
            return (
                <div>
                    <li className=" contact-list__tlf list__item--tel social-media__icon"><i class="fab fa-linkedin-in"></i></li>
                </div>
            
            )
            
        } 
        else {
            return (
            <div className="hidden__icon">
                <li className=" contact-list__tlf list__item--tel  social-media__icon"></li>
            </div> 
            )
        
    }
    }
    render() {
        const editCard = (
            <section className="section__card">
                <ResetBtn/>
                <div className="section__card-content">
                    <div className="description">
                        <div className="rectangle"></div>
                        <h1 className="h1-description">{this.props.cardInfo.name}</h1>
                        <p className="text-description">{this.props.cardInfo.job}</p>
                    </div>
                    <div className="profile-pic">
                    <img className="user-pic" src={this.props.cardInfo.photo} alt="user_image"></img>
                    </div>
                    <div className="social-media">
                        <ul className="social-media__list"> 
                            {this.isEmptyPhone()}
                            {this.isEmptyEmail()}
                            {this.isEmptyGithub()}
                            {this.isEmptyIn()}
                        </ul>
                    </div>
                    <div className="skills">
                        <ul className="skills__list"></ul>
                    </div>
                </div>
            </section>
        );
        return editCard;
    }
}
export default EditCard;