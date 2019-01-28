import React, {Component} from 'react';
import EditCard from './EditCard';
import FormContainer from './FormContainer';

class Main extends Component {
    render() {
        return (
            <div className="main-section">
                <EditCard cardInfo={this.props.cardInfo} styles={this.props.styles} handleReset={this.props.handleReset}/>
                <FormContainer handleName = {this.props.handleName} handleJob = {this.props.handleJob} handlePhone = {this.props.handlePhone} handleEmail = {this.props.handleEmail} handleLinkedin = {this.props.handleLinkedin} handleGithub = {this.props.handleGithub} handlePhoto = {this.props.handlePhoto} cardInfo={this.props.cardInfo} handleUrl={this.props.handleUrl} handleColor={this.props.handleColor} handleTypo={this.props.handleTypo} handleSkills={this.props.handleSkills} skillArray={this.props.skillArray} formRef={this.props.formRef}previewRef={this.props.previewRef} designRef={this.props.designRef} handleCollapsibles={this.props.handleCollapsibles} collapsibleDesign={this.props.collapsibleDesign}
                collapsibleFill={this.props.collapsibleFill} collapsibleShare={this.props.collapsibleShare}/>
            </div>
        );
    }
}
export default Main;