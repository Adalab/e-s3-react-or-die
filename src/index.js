import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
// import Page from './main_index';
import CardIndex from './CardIndex';
// import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CardIndex />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
