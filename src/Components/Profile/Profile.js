import React, { Component } from 'react'
import {fire} from '../../Config/fire';
import { Redirect, Link } from "react-router-dom";    

export class Profile extends Component {
    logOut = () => {
        fire.auth().signOut()
    }
    render() {
        // const {auth} = this.props.auth;
        // if (!auth) return <Redirect to="/login" />;
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">Profile</span>
                    <span className="navbar-brand mb-0 h1"><Link className="btn btn-outline-dark" onClick={this.logOut} to='/login'>Logout</Link></span>
                </nav>
                <div className="card">
                    
                    <div className="card-body">
                        <div className='container'>
                            <h5>Name :  <span>Rahul</span> </h5>
                            <h5>Email :  <span>rahul@gmail.com</span> </h5>
                            <h5>Gender :  <span>Male</span> </h5>
                            <h5>Address :  <span>0522, Narayan Nivas, Sector-8, chinch ali, Behind N.M.M.c School, Ghansoli, Navi Mumbai, 400701</span> </h5>
                            <h5>ZipCode :  <span>4000701</span> </h5>
                        </div>
                       
                        
                    </div>
                    <div class="card-footer text-center">
                         <Link to='/editprofile' type="button" class="btn btn-secondary btn-lg">Edit Profile</Link>
                    </div>
                </div>


            </div>
        )
    }
}

export default Profile
