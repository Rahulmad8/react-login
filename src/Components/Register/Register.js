import React, { Component } from 'react';
import {fire} from '../../Config/fire';
import {DB} from '../../Config/fire'


export class Register extends Component {
    state={
        email: '',
        password: '',
        name: '',
        date: '',
        mobile: '',
        address: '',
        zip: ''

    }

    signUp = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then( (resp) => {
            return DB
          .collection("users")
          .doc(resp.user.uid)
          .set({
            Name: this.state.name,
            Date: this.state.date,
            Mobile: this.state.mobile,
            Address: this.state.address,
            Zip: this.state.zip
          });
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch( (error) => {
            console.log("login error", error);
            
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return (
            <div className="container-fluid">
                  <div className="row no-gutter">
                        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                    <div className="col-md-8 col-lg-6">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9 col-lg-8 mx-auto">
                                     <h3 className="text-center mb-4">Register</h3>
                                        <form>
                                            <div className="form-label-group mb-2x">
                                            <input type="text" value={this.state.name} onChange={this.handleChange} name='name' id="name" className="form-control" placeholder="Name" required/>
                                            <label for="name">Name</label>
                                            </div>

                                            <div className="form-label-group mb-2x">
                                            <input type="email" name='email' value={this.state.email}  
                                            onChange={this.handleChange} id="email" className="form-control" placeholder="Email address" required/>
                                            <label for="email">Email address</label>
                                            </div>

                                            <div className="form-label-group mb-2x">
                                            <input type="password" name='password' value={this.state.password} onChange={this.handleChange} id="password" className="form-control" placeholder="Password" required/>
                                            <label for="password">Password</label>
                                            </div>

                                            <div className="form-label-group mb-2x">
                                            <input type="confirm" name='confirm' id="confirm" className="form-control" placeholder="Confirm Password" required/>
                                            <label for="confirm">Confirm Password</label>
                                            </div>

                                            <div className="form-label-group mb-2x">
                                            <input type="date" name='date' value={this.state.date} onChange={this.handleChange} id="date" className="form-control" placeholder="Date" required/>
                                            <label for="date">Date</label>
                                            </div>

                                            <div className="form-label-group mb-2x">
                                            <input type="number" name='mobile' id="mobile" value={this.state.mobile} onchange={this.handleChange} className="form-control" placeholder="Mobile Number" required/>
                                            <label for="mobile">Mobile Number</label>
                                            </div>

                                            <div className="form-label-group mb-2x">
                                            <input type="text" name='address' id="address" value={this.state.address} onchange={this.handleChange} className="form-control" placeholder="Address" required/>
                                            <label for="address">Address</label>
                                            </div>

                                            <div className="form-label-group mb-2x">
                                            <input type="number" name='zip' id="zip" value={this.state.zip} onchange={this.handleChange} className="form-control" placeholder="Zip Code"  required/>
                                            <label for="zip">Zip Code</label>
                                            </div>
                                            
                                            {/* <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-4" type="submit">Login</button> */}

                                            <button onClick={this.signUp} className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mt-4" type="submit">Register</button>
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

export default Register

