import axios from 'axios'
import React, { Component } from 'react'
import Header from './Header'
import {Redirect} from 'react-router-dom'
import Swal from 'sweetalert2'

class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             email:'',
             password:''
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        var form = document.getElementById('form');
        var formData = new FormData(form);
        if(formData != null){
            var url = "http://localhost:5000/signup"
            axios.post(url, formData).then((res) =>{
                this.props.history.push('/login');
            }).catch((err) =>{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something Went Error',
                })
            })
        }
        else{
            <Redirect to="/signup"/>
        }
    }
    
    render() {
        return (
            <div className="signup">
                <Header />
                <div className="container">
                    <div className="row py-2 px-3">
                        <div className="col-6 mt-5">
                        <h3>Sign Up</h3>
                        <form className="mt-3" method="POST" id="form" action="/" onSubmit={this.handleSubmit}>
                            <div className="mb-3">
                                <input type="text" onChange={(e) => this.setState({ name: e.target.value })} className="form-control" placeholder="Enter Name" name="name" required />
                            </div>
                            <div className="mb-3">
                                <input type="email" onChange={(e) => this.setState({email: e.target.email})} className="form-control" placeholder="Enter Email" name="email" required />
                            </div>
                            <div className="mb-3">
                                <input type="password" onChange={(e) => this.setState({password: e.target.password})} className="form-control" placeholder="Enter Password" name="password" required />
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                        </div>
                        <div className="col-6">
                            <img src="/images/signup.jpg" width="100%" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup