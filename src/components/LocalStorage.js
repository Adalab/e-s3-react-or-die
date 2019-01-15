import React, { Component } from 'react';

const dataJason = {
    "palette": 0,
    "typography": 0,
    "name": "",
    "job": "",
    "phone": "",
    "email": "",
    "linkedin": "",
    "github": "",
    "photo": "",
    "skills": ['uno', 'dos','tres']
};



class LocalStorage extends Component {
    constructor(props){
        super(props);
        this.state={
          name:""
    };
    
        this.handleFilmName = this.handleFilmName.bind(this);
        this.createStorage = this.createStorage.bind(this);
    }
      
      handleFilmName(event){
        this.setState({name:event.currentTarget.value});
        this.createStorage(this.state.name);
    }
      
    localStore(key, value) {
        localStorage.setItem(key, value);
        }
      
    getStorage(key) {
        return localStorage.getItem(key);
    }
    
    createStorage(){
        localStorage.setItem('name', JSON.stringify(this.state.name));
    }
      
    
    render(){
        return(
            <React.Fragment>
            <form className="filmForm">
            <div className="name__container">

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" onKeyUp={this.handleFilmName} defaultValue={this.state.name} />

            </div>
            </form>
    
            <h2>{this.state.name}</h2>
            </React.Fragment>
        );
    }
}

export default LocalStorage;