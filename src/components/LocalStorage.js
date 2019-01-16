import React, { Component } from 'react';

const dataJason = {
    palette: 0,
    typography: 0,
    name: "",
    job: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    photo: "",
    skills: ['uno', 'dos','tres']
}
class LocalStorage extends Component {
    constructor(props){
        super(props);        
        this.state={
        
          dataJason: this.getStorage("dataJason")          
        
    };
    
        this.handleName = this.handleName.bind(this);
        this.handleJob = this.handleJob.bind(this);
        this.createStorage = this.createStorage.bind(this);
    }
      
      handleName(event){
        this.setState({
            dataJason: {...this.state.dataJason, name:event.currentTarget.value}});
        const localName = event.currentTarget.value;
        this.createStorage(localName);
    }

    handleJob(event){
        this.setState({
        dataJason: {...this.state.dataJason, job:event.currentTarget.value}
        });
        this.createStorage(this.state.job);
    }   
      
    localStore(key, value) {
        localStorage.setItem(key, value);
        }
      
    getStorage(key) {
        if (localStorage.getItem(key) !== null){
            console.log('yay')
            return JSON.parse(localStorage.getItem(key));
        }else{
            console.log('fos')
            return dataJason;
        }
    }
    
    createStorage(){
        localStorage.setItem('dataJason', JSON.stringify(this.state.dataJason));
        
    }
      
    
    render(){
        return(
            <React.Fragment>
            <form className="filmForm">
            <div className="name__container">

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" onKeyUp={this.handleName} defaultValue={this.state.dataJason.name} />
                <label htmlFor="job">Job:</label>
                <input type="text" id="job" onKeyUp={this.handleJob} defaultValue={this.state.dataJason.job} />
                

            </div>
            </form>
    
            <h2>{this.state.dataJason.name}</h2>
            <h2>{this.state.dataJason.job}</h2>
            </React.Fragment>
        );
    }
}

export default LocalStorage;