import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import Swal from 'sweetalert2'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        var form = document.getElementById('form');
        var formData = new FormData(form);
        if(formData != null){
            var url = "http://localhost:5000/login"
            axios.post(url, formData).then((res) =>{
                sessionStorage.setItem("userId",res.data.signup_id)
                sessionStorage.setItem("email",res.data.email)
                sessionStorage.setItem("isLogin","true");
                this.props.history.push("/");
            }).catch((err) =>{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email or Password is wrong',
                })
            })
        }
        else{
            <Redirect to="/login"/>
        }
    }
    
    render() {
        return (
            <div className="Login">
                <Header/>
                <div className="container">
                    <div className="row py-3 px-3">
                        <div className="col-6" style={{marginTop:'18vh'}}>
                        <h3>Login</h3>
                            <form className="mt-4" id="form" onSubmit={this.handleSubmit} method="POST">
                                <input name="email" className="mb-3 form-control" type="text" onChange={e => this.setState({email: e.target.value})} placeholder="Enter Email" />
                                <input name="password" className="mb-3 form-control" type="text" onChange={e => this.setState({password: e.target.value})} placeholder="Enter Password" />
                                <button className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div className="col-6">
                            <img src="/images/login.png" width="80%" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
