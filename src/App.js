import React from 'react';
// import CardIndex from './components/CardIndex';
import './App.scss';
import LocalStorage from './components/LocalStorage';


// const skillsArray = [
//     'HTML',
//     'CSS',
//     'Sass',
//     'Git',
//     'Gulp',
//     'JavaScript',
//     'AJAX',
//     'React'
// ]


class App extends React.Component {
    render(){
        return(
            <LocalStorage />
        );
    }
}


export default App;