import React, { Component } from 'react'

export class EditProfile extends Component {
    render() {
        return (
            <div className="container-fluid">
            <div className="row no-gutter">
                  <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
              <div className="col-md-8 col-lg-6">
                  <div className="login d-flex align-items-center py-5">
                      <div className="container">
                          <div className="row">
                              <div className="col-md-9 col-lg-8 mx-auto">
                               <h3 class="text-center mb-4">Edit Profile</h3>
                                  <form>
                                      <div className="form-label-group mb-2x">
                                      <input type="text" id="name" className="form-control" placeholder="Name" required autofocus/>
                                      <label for="name">Name</label>
                                      </div>

                                      <div className="form-label-group mb-2x">
                                      <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                                      <label for="inputEmail">Email address</label>
                                      </div>

                                      <div className="form-label-group mb-2x">
                                      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                                      <label for="inputPassword">Password</label>
                                      </div>

                                      <div className="form-label-group mb-2x">
                                      <input type="confirm" id="confirm" className="form-control" placeholder="Confirm Password" required/>
                                      <label for="confirm">Confirm Password</label>
                                      </div>

                                      <div className="form-label-group mb-2x">
                                      <input type="date" id="date" className="form-control" placeholder="Date" required/>
                                      <label for="date">Date</label>
                                      </div>

                                      <div className="form-label-group mb-2x">
                                      <input type="number" id="mobile" className="form-control" placeholder="Mobile Number" required/>
                                      <label for="mobile">Mobile Number</label>
                                      </div>

                                      <div className="form-label-group mb-2x">
                                      <input type="text" id="address" className="form-control" placeholder="Address" required/>
                                      <label for="address">Address</label>
                                      </div>

                                      <div className="form-label-group mb-2x">
                                      <input type="number" id="zip" className="form-control" placeholder="Zip Code" required/>
                                      <label for="zip">Zip Code</label>
                                      </div>
                                      
                                      {/* <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-4" type="submit">Login</button> */}

                                      <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mt-4" type="submit">Register</button>
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

export default EditProfile
