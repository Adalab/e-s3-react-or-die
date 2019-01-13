import React, { Component } from 'react';
import DesignCard from './DesignCard';

class FormContainer extends Component {
    render() {

        return (
            <React.Fragment>
                <section className="section-form">
                    <div className="section-form__container">
                        <form action="">
                            <div className="section-form__fieldset-container section-form__fieldset-container--design">
                                <DesignCard/>
                            </div>
                        </form>
                    </div>
                </section>
            </React.Fragment>

        );
    }
}
export default FormContainer;