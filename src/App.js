import React from 'react';
import CardIndex from './components/CardIndex';
import './App.scss';

const defaultImg = '../images/darth_vader.jpg';

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
                photo: defaultImg,
                skills: ['HTML', 'Sass', 'JavaScript']
            }

        }

        this.handleName = this.handleName.bind(this);
        this.handleJob = this.handleJob.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleLinkedin = this.handleLinkedin.bind(this);
        this.handleGithub = this.handleGithub.bind(this);
        this.handleUrl = this.handleUrl.bind(this);
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

    render() {
        return (
            
            <CardIndex handleName={this.handleName}
                handleJob={this.handleJob} handlePhone={this.handlePhone} handleEmail={this.handleEmail} handleLinkedin={this.handleLinkedin} handleGithub={this.handleGithub} handlePhoto={this.handlePhoto} cardInfo={this.state.card} handleUrl={this.handleUrl}/>

        );
    }
}


export default App;