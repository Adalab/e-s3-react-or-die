import React, { Component } from 'react';
import {fetchCardCreator} from '../services/createCardApi';


class ShareCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            urlCard: '',
            urlTwitter: '',
            twitter: 'hidden__icon'
        }
        this.createCard=this.createCard.bind(this);
    }
    createCard(){
        fetchCardCreator(this.props.cardInfo)
        .then(data =>{
            this.setState({
                urlCard: data.cardURL,
                urlTwitter: `https://twitter.com/share?url=${data.urlCard}&text=Lo peto con mi tarjeta personal! by Sticker Fighters&hashtags=JavaScript, Adalab`,
                twitter:'' 
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
                            <button type="button" className="collapsible__content-button" onClick={this.createCard}><i className="far fa-address-card"></i>Crear tarjeta</button>
                            <div className="getURL"><a href={this.state.urlCard}>{this.state.urlCard}</a></div>
                            <div className={`content-share__twitter ${this.state.twitter}`} target="_blank"><a className="link__twitter" href={this.state.urlTwitter}><button className="share-twitter" type="button">
                            <i className="fab fa-twitter"></i>
                            <span className="text-twitter">Compartir en Twitter</span>
                        </button></a></div>

                        </div>
                    </div>
                </fieldset>
            </React.Fragment>
        );
    }
}
export default ShareCard;