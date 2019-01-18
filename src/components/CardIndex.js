import React, {Component} from 'react';
import '../stylesheets/index.scss';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class CardIndex extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Main />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default CardIndex;
