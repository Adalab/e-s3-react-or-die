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
        this.formRef = React.createRef();
        this.previewRef = React.createRef();
        this.state = {
            skillArray: [],
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
            styles: {
                colors: '',
                typo: ''
            },

            
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
        this.getLastStyles = this.getLastStyles.bind(this);
        this.handleReset = this.handleReset.bind(this);
        // this.handleCollapsibles = this.handleCollapsibles.bind(this);
    }

    componentDidMount() {
        this.getSkills();
        this.setState({
            card: this.getLastWord(),
            styles: this.getLastStyles()
        });
    }

    saveLastWord(value) {
        localStorage.setItem('data', JSON.stringify(value))
    }

    saveLastStyles(item) {
        localStorage.setItem('styles', JSON.stringify(item))
    }

    getLastStyles() {
        const lastStyles = (localStorage.getItem('sytles') !== null) ? JSON.parse(localStorage.getItem('styles')) : {
            colors: '',
            typo: ''
        }
        return lastStyles;
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
        const { card } = this.state;
        const newCard = { ...card, photo: url };

        this.setState({
            card: newCard
        });
        this.saveLastWord(newCard);
    };

    handleName(event) {
        const { card } = this.state;
        const newCard = { ...card, name: event.currentTarget.value };

        this.setState({
            card: newCard
        });
        this.saveLastWord(newCard);
    }

    handleJob(event) {
        const { card } = this.state;
        const newCard = { ...card, job: event.currentTarget.value };

        this.setState({
            card: newCard
        });
        this.saveLastWord(newCard);
    }

    handlePhone(event) {
        const { card } = this.state;
        const newCard = { ...card, phone: event.currentTarget.value };

        this.setState({
            card: newCard
        });
        this.saveLastWord(newCard);
    }

    handleEmail(event) {
        const { card } = this.state;
        const newCard = { ...card, email: event.currentTarget.value };

        this.setState({
            card: newCard
        });
        this.saveLastWord(newCard);
    }

    handleLinkedin(event) {
        const { card } = this.state;
        const newCard = { ...card, linkedin: event.currentTarget.value };

        this.setState({
            card: newCard
        });
        this.saveLastWord(newCard);
    }

    handleGithub(event) {
        const { card } = this.state;
        const newCard = { ...card, github: event.currentTarget.value };

        this.setState({
            card: newCard
        });
        this.saveLastWord(newCard);
    }

    handlePhoto(event) {
        const { card } = this.state;
        const newCard = { ...card, photo: event.currentTarget.value };

        this.setState({
            card: newCard
        });
        this.saveLastWord(newCard);
    }

    handleColor(event) {
        const { card } = this.state;
        const newCard = { ...card, palette: event.currentTarget.value};
        const {styles} = this.state;
        const newColor = {...styles, colors: event.currentTarget.id};

        if (event.currentTarget.value === "1") {
            this.setState({
                card: newCard,
                styles: newColor
            });
        } else if (event.currentTarget.value === "2") {
            this.setState({
                card: newCard,
                styles: newColor
            });
        } else if (event.currentTarget.value === "3") {
            this.setState({
                card: newCard,
                styles: newColor
            });
        }
        this.saveLastWord(newCard);
        this.saveLastStyles(newColor)
    }

    handleTypo(e) {
        const { card } = this.state;
        const newCard = { ...card, typography: e.currentTarget.value };
        const {styles} = this.state;
        const newTypo = {...styles, typo: e.currentTarget.id};

        if (e.currentTarget.value === "1") {
            this.setState({
                card: newCard,
                styles: newTypo
            });
        } else if (e.currentTarget.value === "2") {
            this.setState({
                card: newCard,
                styles: newTypo
            });
        } else if (e.currentTarget.value === "3") {
            this.setState({
                card: newCard,
                styles: newTypo
            });
        }
        this.saveLastWord(newCard);
        this.saveLastStyles(newTypo);
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
        const { card } = this.state;
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

    handleReset() {
      const defaultCard = {
        name: 'Nombre Apellido',
        job: 'Front-end developer',
        photo: darth,
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        palette: '1',
        typography: '2',
        skills: []
      }
      this.setState({
        card: defaultCard
      });
      this.formRef.current.reset();
      this.previewRef.current.style='';
    };


    // handleCollapsibles(event){
    //     const clickableSection = event.currentTarget;
    //     if (clickableSection.classList.contains('collapsible__design') === true) {
    //       designContent.classList.toggle('hidden');
    //     } else if (clickableSection.classList.contains('collapsible__fill') === true) {
    //       fillContent.classList.toggle('hidden');
    //     } else {
    //       shareContent.classList.toggle('hidden');
    //     }
    // }
    

    render() {
        return (
            <Switch>
                <Route exact path="/" component={MainIndex} />
                <Route path="/CardIndex" render={() => <CardIndex handleName={this.handleName}
                    handleJob={this.handleJob} handlePhone={this.handlePhone} handleEmail={this.handleEmail} handleLinkedin={this.handleLinkedin} handleGithub={this.handleGithub} handlePhoto={this.handlePhoto} cardInfo={this.state.card} handleUrl={this.handleUrl} handleColor={this.handleColor} styles={this.state.styles} handleTypo={this.handleTypo} handleSkills={this.addSkillorNot} skillArray={this.state.skillArray} handleReset={this.handleReset} handleCollapsibles={this.handleCollapsibles} formRef={this.formRef} previewRef={this.previewRef}/>} />
            </Switch>

        );
    }
}

export default App;