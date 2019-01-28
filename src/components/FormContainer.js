import React, { Component } from 'react';
import DesignCard from './DesignCard';
import FillCard from './FillCard';
import ShareCard from './ShareCard';




class FormContainer extends Component {

  render() {
        return (
            <React.Fragment>
                <section className="section-form">
                    <div className="section-form__container">
                        <form action="" className="card-form" ref={this.props.formRef}>
                            <div className="section-form__fieldset-container section-form__fieldset-container--design">
                                <DesignCard handleColor={this.props.handleColor} handleTypo={this.props.handleTypo} designRef={this.props.designRef} handleCollapsibles={this.props.handleCollapsibles} collapsibleDesign={this.props.collapsibleDesign}
                                />
                                <FillCard handleName={this.props.handleName} handleJob = {this.props.handleJob} handlePhone = {this.props.handlePhone} handleEmail = {this.props.handleEmail} handleLinkedin = {this.props.handleLinkedin} handleGithub = {this.props.handleGithub} handlePhoto = {this.props.handlePhoto} cardInfo={this.props.cardInfo} handleUrl = {this.props.handleUrl} handleColor={this.props.handleColor} handleSkills={this.props.handleSkills} skillArray={this.props.skillArray} previewRef={this.props.previewRef} handleCollapsibles={this.props.handleCollapsibles} collapsibleFill={this.props.collapsibleFill} />
                                <ShareCard cardInfo={this.props.cardInfo} handleCollapsibles={this.props.handleCollapsibles} collapsibleShare={this.props.collapsibleShare}/>
                            </div>
                        </form>
                    </div>
                </section>
            </React.Fragment>

    );
  }
}
export default FormContainer;