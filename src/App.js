import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CardIndex from './components/CardIndex';
import MainIndex from './components/MainIndex';

import './App.scss';
import darth from './images/darth.jpg';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card:
            {
                palette: 1,
                typography: 2,
                name: 'Nombre completo',
                job: 'Front-End developer',
                phone: '',
                email: '',
                linkedin: '',
                github: '',
                photo: darth,
                skills: ['HTML', 'Sass', 'JavaScript']
            },

            colors: '',
            typo: ''

        }

        this.handleName = this.handleName.bind(this);
        this.handleJob = this.handleJob.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleLinkedin = this.handleLinkedin.bind(this);
        this.handleGithub = this.handleGithub.bind(this);
        this.handleUrl = this.handleUrl.bind(this);
        this.handleColor = this.handleColor.bind(this);
        this.handleTypo = this.handleTypo.bind(this);
    }

    handleUrl(url) {
        this.setState({
            card: { ...this.state.card, photo: url }
        });
    }

    handleName(event) {
        this.setState({
            card: { ...this.state.card, name: event.currentTarget.value }
        });
    }


    handleJob(event) {
        this.setState({
            card: { ...this.state.card, job: event.currentTarget.value }
        });
    }

    handlePhone(event) {
        this.setState({
            card: { ...this.state.card, phone: event.currentTarget.value }
        });
    }

    handleEmail(event) {
        this.setState({
            card: { ...this.state.card, email: event.currentTarget.value }
        });
    }

    handleLinkedin(event) {
        this.setState({
            card: { ...this.state.card, linkedin: event.currentTarget.value }
        });
    }

    handleGithub(event) {
        this.setState({
            card: { ...this.state.card, github: event.currentTarget.value }
        });

    }

    handlePhoto(event) {
        this.setState({
            card: { ...this.state.card, photo: event.currentTarget.value }
        });
    }

    handleColor(e) {
        if (e.currentTarget.value === "1") {
            this.setState({
                card: { ...this.state.card, palette: e.currentTarget.value },
                colors: e.currentTarget.id
            });
        } else if (e.currentTarget.value === "2") {
            this.setState({
                card: { ...this.state.card, palette: e.currentTarget.value },
                colors: e.currentTarget.id
            });
        } else if (e.currentTarget.value === "3") {
            this.setState({
                card: { ...this.state.card, palette: e.currentTarget.value },
                colors: e.currentTarget.id
            });
        }
    }

    handleTypo(e) {
        if (e.currentTarget.value === "1") {
            this.setState({
                card: { ...this.state.card, typography: e.currentTarget.value },
                typo: e.currentTarget.id
            });
        } else if (e.currentTarget.value === "2") {
            this.setState({
                card: { ...this.state.card, typography: e.currentTarget.value },
                typo: e.currentTarget.id
            });
        } else if (e.currentTarget.value === "3") {
            this.setState({
                card: { ...this.state.card, typography: e.currentTarget.value },
                typo: e.currentTarget.id
            });
        }
    }

    render() {
        return (

            <Switch>
                <Route exact path="/" component={MainIndex} />
                <Route path="/CardIndex" render={() => <CardIndex handleName={this.handleName}
                    handleJob={this.handleJob} handlePhone={this.handlePhone} handleEmail={this.handleEmail} handleLinkedin={this.handleLinkedin} handleGithub={this.handleGithub} handlePhoto={this.handlePhoto} cardInfo={this.state.card} handleUrl={this.handleUrl} handleColor={this.handleColor} colors={this.state.colors} handleTypo={this.handleTypo} typo={this.state.typo} />} />

            </Switch>

        );
    }
}


export default App;