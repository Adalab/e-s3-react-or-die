import React, { Component } from 'react';


class ShareCard extends Component {
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
                            <button type="button" className="collapsible__content-button"><i className="far fa-address-card"></i>Crear tarjeta</button>
                            <div className="getURL"></div>
                        </div>
                    </div>
                </fieldset>

            </React.Fragment>

        );
    }
}
export default ShareCard;