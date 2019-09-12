import React, { Component } from 'react'
import {fire} from '../../Config/fire';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";   

export default class Login extends Component {
    state={
        email: '',
        password: ''
    }

    login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((u) => {

        })
        .catch( (error) => {
            console.log("login error",);
            
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        // const {auth} = this.props.auth;
        // if (!auth) return <Redirect to="/login" />;
        return (
            <div className="container-fluid">
                  <div className="row no-gutter">
                        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                    <div className="col-md-8 col-lg-6">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9 col-lg-8 mx-auto">
                                     <h3 className="text-center mb-4">Login</h3>
                                        <form>
                                            <div className="form-label-group mb-2x">
                                            <input type="email" name='email' value={this.state.email} onChange={this.handleChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                                            <label for="inputEmail">Email address</label>
                                            </div>

                                            <div className="form-label-group mb-2x">
                                            <input type="password" name='password' id="inputPassword" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Password" required/>
                                            <label for="inputPassword">Password</label>
                                            </div>
                                            
                                            {/* <button onClick={this.login} className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-4" type="submit">Login</button> */}
                                            
                                            
                                            <Link onClick={this.login}  className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-4" 
                                            to="/profile">Login</Link>

                                            <Link className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-4"
                                            to='/register'>Register</Link>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                  </div>
            </div>
        )
    }
}
