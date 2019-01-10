import React, {Component} from 'react';


class EditCard extends Component {
    render() {
        const editCard = (
            <section className="section__card">
                <div className="section__card-button">
                    <button className="reset"><i className="far fa-trash-alt icon-reset"></i>Reset</button>
                </div>
                <div className="section__card-content">
                    <div className="description">
                        <div className="rectangle"></div>
                        <h1 className="h1-description">Nombre Apellido</h1>
                        <p className="text-description">Front-End developer</p>
                    </div>
                    <div className="profile-pic"></div>
                    <div className="social-media">
                        <ul className="social-media__list">
                            <li className=" contact-list__tlf list__item--tel"></li>
                            <li className=" contact-list__mail list__item--mail"></li>
                            <li className="contact-list__linkedin list__item--linkedin"></li>
                            <li className=" contact-list__github list__item--github"></li>
                        </ul>
                    </div>
                    <div className="skills">
                        <ul className="skills__list"></ul>
                    </div>
                </div>
            </section>
        );
        return editCard;
    }
}
export default EditCard;