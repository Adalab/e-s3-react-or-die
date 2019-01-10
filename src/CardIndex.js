import React, {Component} from 'react';
import './stylesheets/index.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

class CardIndex extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Main/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default CardIndex;
