import React, {Component} from 'react';
import EditCard from './EditCard';
import FormContainer from './FormContainer';

class Main extends Component {
    render() {
                           
        return (
            <div className="main-section">
                <EditCard />
                <FormContainer/>
            </div>
        );
    }
}
export default Main;