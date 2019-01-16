import React, {Component} from 'react';
import '../stylesheets/index.scss';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class CardIndex extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Main skillsArray = {this.props.skillsArray} handleName = {this.props.handleName} handleJob = {this.props.handleJob} handlePhone = {this.props.handlePhone} handleEmail = {this.props.handleEmail} handleLinkedin = {this.props.handleLinkedin} handleGithub = {this.props.handleGithub} handlePhoto = {this.props.handlePhoto} cardInfo={this.props.cardInfo}/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default CardIndex;
