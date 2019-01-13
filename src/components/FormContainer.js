import React, { Component } from 'react';
import DesignCard from './DesignCard';
import FillCard from './FillCard';
import ShareCard from './ShareCard';
import { threadId } from 'worker_threads';

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

class FormContainer extends Component {
    render() {


        return (
            <React.Fragment>
                <section className="section-form">
                    <div className="section-form__container">
                        <form action="">
                            <div className="section-form__fieldset-container section-form__fieldset-container--design">
                                <DesignCard/>
                                <FillCard skillsArray={skillsArray}/>
                                <ShareCard/>
                            </div>
                        </form>
                    </div>
                </section>
            </React.Fragment>

        );
    }
}
export default FormContainer;