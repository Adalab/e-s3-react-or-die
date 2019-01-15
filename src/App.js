import React from 'react';
import CardIndex from './CardIndex';
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
    render(){
        return(
            <CardIndex skillsArray = {skillsArray} />
        );
    }
}


export default App;