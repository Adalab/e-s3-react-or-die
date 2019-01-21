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
                <Main handleName = {this.props.handleName} handleJob = {this.props.handleJob} handlePhone = {this.props.handlePhone} handleEmail = {this.props.handleEmail} handleLinkedin = {this.props.handleLinkedin} handleGithub = {this.props.handleGithub} handlePhoto = {this.props.handlePhoto} cardInfo={this.props.cardInfo} handleUrl={this.props.handleUrl} handleColor={this.props.handleColor} colors={this.props.colors} handleTypo={this.props.handleTypo} typo={this.props.typo}/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default CardIndex;
