import React from 'react';
import CardIndex from './components/CardIndex';
import './App.scss';


const skillsArray = [
    'HTML',
    'CSS',
    'Sass',
    'Git',
    'Gulp',
    'JavaScript',
    'AJAX',
    'React'
]


class App extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            name:'Paca',
            job:'Unicornio'
        }
    }
    handleName(event){
        this.setState({
            name:event.currenTarget.value
        });
    }
    render(){
        return(
            <CardIndex skillsArray = {skillsArray} handleName = {this.handleName} default={this.state}  />
        );
    }
}


export default App;