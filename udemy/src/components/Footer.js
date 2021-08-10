import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Footer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="Footer" style={{borderTop:'1px solid rgba(0,0,0,0.1)'}}>
                <div className="container-fluid">
                    <div className="row mt-5 px-5">
                        <div className="col-4 col-md-2">
                            <div className="ul">
                                <div className="li"><Link to="/" className="text-decoration-none text-dark">Home</Link></div>
                                <div className="li"><Link to="/about" className="text-decoration-none text-dark">About us</Link></div>
                                <div className="li"><Link to="/contact" className="text-decoration-none text-dark">Contact us </Link></div>
                                <div className="li"><Link to="/allCourses" className="text-decoration-none text-dark">Browse Courses </Link></div>
                            </div>
                        </div>
                        {/* for screen bigger than medium */}
                        <div className="col-4 col-md-2 d-none d-md-block">
                            <div className="ul justify-content-start">
                                <div className="li"><Link to="/" className="text-decoration-none text-dark">Help & Support </Link></div>
                                <div className="li"><Link to="/" className="text-decoration-none text-dark">Privacy Policy </Link></div>
                                <div className="li"><Link to="/" className="text-decoration-none text-dark">Terms </Link></div>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 d-none d-md-block">
                        <div className="ul justify-content-start">
                                <div className="li"><Link to="/" className="text-decoration-none text-dark">Services </Link></div>
                                <div className="li"><Link to="/" className="text-decoration-none text-dark">Sitemap </Link></div>
                            </div>
                        </div>
                        {/* for screen smaller than medium */}
                        <div className="col-4 col-md-2 d-block d-md-none">
                            <div className="ul justify-content-start">
                                <div className="li"><Link to="/" className="text-decoration-none text-dark">Help & Support </Link></div>
                                <div className="li"><Link to="/" className="text-decoration-none text-dark">Privacy Policy </Link></div>
                                <div className="li"><Link to="/" className="text-decoration-none text-dark">Terms </Link></div>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 d-block d-md-none">
                        <div className="ul justify-content-start">
                                <div className="li"><Link to="/" className="text-decoration-none text-dark">Services </Link></div>
                                <div className="li"><Link to="/" className="text-decoration-none text-dark">Sitemap </Link></div>
                            </div>
                        </div>

                        <div className="col-4 d-none d-md-block">
                            <div className="row">
                           <div className="col-8">
                                <input type="text" className="form-control"  placeholder="Subscribe to our Newsletter" size="50" style={{borderRadius:50}} />
                            </div>
                            <div className="col-4 d-none d-md-block">
                                <button className="btn btn-success" style={{borderRadius:'20px'}}>Subscribe</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-6 justify-content-start">
                            <img src="/images/logo.png" className="bi me-2" width="60" height="40" alt="logo" />
                            Udemy
                        </div>
                        <div className="col-6 text-end">
                            &#169; 2021 Udemy Inc. 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer