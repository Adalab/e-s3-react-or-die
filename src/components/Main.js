import React, {Component} from 'react';
import EditCard from './EditCard';
import FormContainer from './FormContainer';

class Main extends Component {
    render() {
        return (
            <div className="main-section">
                <EditCard default={this.props.default}/>
                <FormContainer skillsArray = {this.props.skillsArray} handleName = {this.props.handleName} default={this.props.default}/>
            </div>
        );
    }
}
export default Main;