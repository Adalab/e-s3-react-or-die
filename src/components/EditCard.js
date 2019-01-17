import React, {Component} from 'react';
import ResetBtn from './ResetBtn';


class EditCard extends Component {
    isEmpty () {

        if (this.props.cardInfo.phone !== '') { 
            console.log('hay algo', this.props.cardInfo.phone);
            return (
                <div>
                    <li className=" contact-list__tlf list__item--tel social-media__icon"><i className="fas fa-mobile-alt"></i></li>
            </div>
            
            )
            
        } 
        else {
            console.log('paca, no hay nada', this.props.cardInfo.phone);
            
            return (
            <div className="hidden__icon">
                <li className=" contact-list__tlf list__item--tel hidden__icon social-media__icon"><i className="fas fa-mobile-alt"></i></li>
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
                    <div className="profile-pic"></div>
                    <div className="social-media">
                        <ul className="social-media__list"> {this.isEmpty()}
                            {/* <li className=" contact-list__tlf list__item--tel">{this.props.cardInfo.phone}</li> */}
                            <li className=" contact-list__mail list__item--mail">{this.props.cardInfo.email}</li>
                            <li className="contact-list__linkedin list__item--linkedin">{this.props.cardInfo.linkedin}</li>
                            <li className=" contact-list__github list__item--github">{this.props.cardInfo.github}</li>
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