import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import Swal from 'sweetalert2'

class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             email:'',
             phone:"",
             msg:""
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        var url = "http://localhost:5000/contact"
        var form = document.getElementById('form');
        var formData = new FormData(form);
        if(formData != null){
            axios.post(url,formData).then((res) =>{
                if(res.data === "true"){
                    Swal.fire(
                        '',
                        'Your contact information has been saved',
                        'success'
                    )
                    this.props.history.push('/')
                }
            }).catch((err) =>{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something Went Error',
                })
            })
        }else{
            <Redirect to="/" />
        }
        
    }
    
    render() {
        return (
            <div>
                <Header />
                <div className="container px-5 py-5 contact-form" style={{background:'#fafafa'}}>
                    <div className="row" align="center">
                        <span style={{fontSize:'5rem',color:"blue"}}><i className="fas fa-rocket"></i></span>
                    </div>
                    <form id="form" method="post" onSubmit={this.handleSubmit}>
                        <h3>Drop Us a Message</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mt-3">
                                    <input required onChange={e => this.setState({name: e.target.value})} type="text" name="name" className="form-control" placeholder="Your Name *"/>
                                </div>
                                <div className="form-group mt-3">
                                    <input required onChange={e => this.setState({email: e.target.value})} type="text" name="email" className="form-control" placeholder="Your Email *"/>
                                </div>
                                <div className="form-group mt-3">
                                    <input required onChange={e => this.setState({phone: e.target.value})} type="text" name="phone" className="form-control" placeholder="Your Phone Number *"/>
                                </div>
                                <div className="form-group mt-4">
                                    <button style={{backgroundColor:'blue', color:'white'}} className="btn" type="submit" name="btnSubmit">Send message</button>
                                </div>
                            </div>
                            <div className="col-md-6 mt-3">
                                <div className="form-group">
                                    <textarea required onChange={e => this.setState({msg: e.target.value})} name="msg" className="form-control" placeholder="Your Message *" style={{width: "100%",height: "150px"}}></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact