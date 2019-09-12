import React, { Component } from 'react';
import Profile from './Components/Profile/Profile';
import Login from './Components/login/Login';
import Register from './Components/Register/Register';
import EditProfile from './Components/Profile/EditProfile';
import {fire} from './Config/fire';
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class App extends Component {
  state={ 
    user: {}
  }
  componentDidMount(){
    this.authListner();
  }

  authListner = () => {
    fire.auth().onAuthStateChanged( (user) => {
      console.log(user);
      if (user) {
        this.setState({user})
        
        
      } else {
        this.setState({user: null})
      }
    })
  }

  render() {
    
    return (
     
      <BrowserRouter>
        
        <Route exact path="/" render={() => <Login auth={this.state.user} /> }/>
        <Route exact path="/profile" component={Profile}  />
        <Route path="/register" component = {Register} />
        <Route path="/editprofile" component = {EditProfile} />
       
      </BrowserRouter>
    )
  }
}

