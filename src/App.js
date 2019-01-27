import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CardIndex from './components/CardIndex';
import { fetchSkills } from './services/SkillsApi';
import MainIndex from './components/MainIndex';

import './App.scss';
import darth from './images/darth.jpg';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skillArray:[],
            card: {
                palette: 1,
            typography: 2,
            name: "Nombre y Apellidos",
            job: "Front-End Developer",
            phone: "",
            email: "",
            linkedin: "",
            github: "",
            photo: darth,
            skills: []
            },
            // card: this.getStorage("card"),
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
        this.addSkillorNot = this.addSkillorNot.bind(this);
        this.getSkills = this.getSkills.bind(this);
        this.getLastWord = this.getLastWord.bind(this);
    }

    componentDidMount() {
        this.getSkills();
        this.setState({
            card: this.getLastWord()
        });
    }
    
    saveLastWord(value) {
        localStorage.setItem('data', JSON.stringify(value))
    }

    getLastWord() {
        const lastWord = (localStorage.getItem('data') !== null) ? JSON.parse(localStorage.getItem('data')) : { 
            palette: 1,
            typography: 2,
            name: "Nombre y Apellidos",
            job: "Front-End Developer",
            phone: "",
            email: "",
            linkedin: "",
            github: "",
            photo: darth,
            skills: []

        }
        return lastWord;
    }


    handleUrl(url) {
        const {card} = this.state;
        const newCard = {...card, photo: url };

        this.setState({
            card: newCard
        });
        this.saveLastWord(newCard);
    };

    handleName(event) {
        const {card} = this.state;
        const newCard = {...card, name: event.currentTarget.value };

        this.setState({
            card: newCard
        });
        this.saveLastWord(newCard);
    }


    handleJob(event) {
        const {card} = this.state;
        const newCard = {...card, job: event.currentTarget.value };

        this.setState({
            card: newCard
        });
        this.saveLastWord(newCard);
    }

    handlePhone(event) {
        const {card} = this.state;
        const newCard = {...card, phone: event.currentTarget.value };

        this.setState({
            card: newCard
        });
        this.saveLastWord(newCard);
    }

    handleEmail(event) {
        const {card} = this.state;
        const newCard = {...card, email: event.currentTarget.value };

        this.setState({
            card: newCard
        });
        this.saveLastWord(newCard);
    }

    handleLinkedin(event) {
        const {card} = this.state;
        const newCard = {...card, linkedin: event.currentTarget.value };

        this.setState({
            card: newCard
        });
        this.saveLastWord(newCard);
    }

    handleGithub(event) {
        const {card} = this.state;
        const newCard = {...card, github: event.currentTarget.value };

        this.setState({
            card: newCard
        });
        this.saveLastWord(newCard);
    }

    handlePhoto(event) {
        const {card} = this.state;
        const newCard = {...card, photo: event.currentTarget.value };

        this.setState({
            card: newCard
        });
        this.saveLastWord(newCard);
    }

    handleColor(event) {
        const {card} = this.state;
        const newCard = {...card, palette: event.currentTarget.value };
        this.saveLastWord(newCard);
        if (event.currentTarget.value === "1") {
            this.setState({
                card: newCard,
                colors: event.currentTarget.id
            });
        } else if (event.currentTarget.value === "2") {
            this.setState({
                card: newCard,
                colors: event.currentTarget.id
            });
        } else if (event.currentTarget.value === "3") {
            this.setState({
                card: newCard,
                colors: event.currentTarget.id
            });
        }
    }

    handleTypo(e) {
        const {card} = this.state;
        const newCard = {...card, typography: e.currentTarget.value };

        if (e.currentTarget.value === "1") {
            this.setState({
                card: newCard,
                typo: e.currentTarget.id
            });
        } else if (e.currentTarget.value === "2") {
            this.setState({
                card: newCard,
                typo: e.currentTarget.id
            });
        } else if (e.currentTarget.value === "3") {
            this.setState({
                card: newCard,
                typo: e.currentTarget.id
            });
        }
        this.saveLastWord(newCard);
    }

    getSkills() {
        fetchSkills()
            .then(data => {
                this.setState({
                    skillArray: data.skills
                })
            })
    }

    addSkillorNot(e) {
        const {card} = this.state;
        const currentSkills = card.skills.slice(0);
        const check = e.currentTarget;
        const newSkill = e.currentTarget.value;
        const isChecked = check.checked;

        if (currentSkills.length < 3 && isChecked) {
            currentSkills.push(newSkill);
        } else {
            check.checked = false;
            const index = currentSkills.indexOf(newSkill);
            if (index > -1) {
                currentSkills.splice(index, 1);
            }
        }
        const newCard = { ...card, skills: currentSkills };
        this.setState({
          card: newCard
        });
        this.saveLastWord(newCard);        
    }

    localStore(key, value) {
        localStorage.setItem(key, value);
        }
 
    getStorage(key) {
        if (localStorage.getItem(key) !== null){
            return JSON.parse(localStorage.getItem(key));
        }else{
            return this.state.card;
        }
    }
 
    createStorage(){
        localStorage.setItem('card', JSON.stringify(this.state.card));
 
    }

    render() {
        return (

            <Switch>
                <Route exact path="/" component={MainIndex} />
                <Route path="/CardIndex" render={() => <CardIndex handleName={this.handleName}
                    handleJob={this.handleJob} handlePhone={this.handlePhone} handleEmail={this.handleEmail} handleLinkedin={this.handleLinkedin} handleGithub={this.handleGithub} handlePhoto={this.handlePhoto} cardInfo={this.state.card} handleUrl={this.handleUrl} handleColor={this.handleColor} colors={this.state.colors} handleTypo={this.handleTypo} typo={this.state.typo} handleSkills={this.addSkillorNot} skillArray={this.state.skillArray}/>} />

            </Switch>

        );
    }
}

export default App;