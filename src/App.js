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

        this.handleName = this.handleName.bind(this);
    }

    handleName(event){
        this.setState({
            name:event.currentTarget.value
        });
        console.log(this.state.name)
    }

    render(){
        return(
            <CardIndex skillsArray = {skillsArray} handleName = {this.handleName} name={this.state.name}  />
        );
    }
}


export default App;