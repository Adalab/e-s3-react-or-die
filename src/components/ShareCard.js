import React, { Component } from 'react';
import { fetchCardCreator } from '../services/createCardApi';


class ShareCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urlCard: '',
            urlTwitter: '',
            twitter: 'hidden__icon'
        }
        this.createCard = this.createCard.bind(this);
    }
    createCard() {
        fetchCardCreator(this.props.cardInfo)
            .then(data => {
                this.setState({
                    urlCard: data.cardURL,
                    urlTwitter: `https://twitter.com/share?url=${data.urlCard}&text=Esta es mi tarjeta personal. Contrátame :) ! by React or Die s&hashtags=JavaScript, Adalab`,
                    twitter: ''
                })
            })
            .catch(err => alert('Servicio no disponible.\nError: ' + err));
    }
    render() {

        return (
            <React.Fragment>
                <fieldset>
                    <div className="collapsible collapsible-share">
                        <div className="collapsible__clickable collapsible__share">
                            <div className="collapsible__clickable-title">
                                <i className="fas fa-share-alt title-icon"></i>
                                <h2 className="title__collapsible title__collapsible-share">Comparte</h2>
                            </div>
                            <div className="collapsible__clickable-icons">
                                <i className="fas fa-angle-down icon-down"></i>
                            </div>
                        </div>
                        <div className="collapsible__content-share">
                            <button type="button" className="collapsible__content-button" onClick={this.createCard}>
                                <i className="far fa-address-card"></i>Crear tarjeta
                            </button>
                            <div className={`getURL  ${this.state.twitter}`}>
                                <p className="twitter-text">La tarjeta ha sido creada:</p>
                                <a className="card-link" href={this.state.urlCard} target="blank">{this.state.urlCard}</a>
                                <a className="link-twitter" href={this.state.urlTwitter} target="blank">
                                    <button className="btn-twitter" type="button">
                                        <i className="fab fa-twitter"></i>
                                        Compartir en Twitter
                                    </button>
                                </a>
                            </div>

                        </div>
                    </div>
                </fieldset>
            </React.Fragment>
        );
    }
}
export default ShareCard;