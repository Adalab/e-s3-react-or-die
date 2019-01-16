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
            card: 
                {
                    palette: 1,
                    typography: 2,
                    name: 'Nombre completo',
                    job: '',
                    phone: '',
                    email: '',
                    linkedin: '',
                    github: '',
                    photo: '',
                    skills: ['HTML', 'Sass', 'JavaScript']
                }
            
            // name:'Paca'
        }

        this.handleName = this.handleName.bind(this);
    }

  
    handleName(event){
        this.setState({

            card: {...this.state.card, name: event.currentTarget.value}
        
        });
        console.log(this.state.name)
    }

    render(){
        return(
            <CardIndex skillsArray = {skillsArray} handleName = {this.handleName} name={this.state.card.name}  />
        );
    }
}


export default App;